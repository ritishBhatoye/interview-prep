"use client";

import { useEffect, useState } from "react";

import { interviewer } from "@/constants";
import { createFeedback } from "@/lib/actions/general.action";
import { cn } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import { AgentProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

const Agent = ({ userName, userId, type, interviewId, questions }: AgentProps) => {
  const router = useRouter();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);

  useEffect(() => {
    const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
    const onCallEnd = () => setCallStatus(CallStatus.FINISHED);

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };

        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);

    const onError = (error: Error) => console.log("Error", error);

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  const handleGenerateFeedback = async (messages: SavedMessage[]) => {
    console.log("Generate feedback here.");
    //TODO:Create a server action that generate the feedback
    const { success, feedbackId: id } = await createFeedback({
      interviewId: interviewId!,
      userId: userId!,
      transcript: messages,
    });

    if (success && id) {
      router.push(`/interview/${interviewId}/feedback`);
    } else {
      console.log("Error saving feedback");
      router.push("");
    }
  };

  useEffect(() => {
    if (callStatus == CallStatus.FINISHED) {
      if (type === "generate") {
        router.push("/");
      } else {
        handleGenerateFeedback(messages);
      }
    }
  }, [messages, callStatus, type, userId]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    if (type === "generate") {
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
        variableValues: {
          username: userName,
          userId: userId,
        },
      });
    } else {
      let formattedQuestions = "";

      if (questions) {
        formattedQuestions = questions.map((question) => `- ${question}`).join("\n");
      }
      await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        },
      });
    }
  };
  const handleDisconnectCall = async () => {
    setCallStatus(CallStatus.FINISHED);

    vapi.stop();
  };

  const latestMessage = messages[messages.length - 1]?.content;

  const isCallInactiveOrFinished =
    callStatus == CallStatus.INACTIVE || callStatus == CallStatus.FINISHED;
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-10 items-center justify-between w-full">
        <div className="flex items-center justify-center flex-col gap-2 p-7 h-[400px] bg-gradient-to-b from-[#171532] to-[#08090D] rounded-lg border-2 border-primary-200/50 flex-1 sm:basis-1/2 w-full">
          <div className="z-10 flex items-center justify-center bg-gradient-to-l from-[#FFFFFF] to-[#CAC5FE] rounded-full size-[120px] relative">
            <Image
              src={"/ai-avatar.png"}
              height={65}
              width={54}
              alt={"vapi"}
              className="object-cover"
            />
            {isSpeaking && <span className="absolute inline-flex size-5/6 animate-ping rounded-full bg-primary-200 opacity-75" />}
          </div>
        </div>
        <div className="border-gradient p-0.5 rounded-2xl flex-1 sm:basis-1/2 w-full h-[400px] max-md:hidden">
          <div className="flex flex-col gap-2 justify-center items-center p-7 dark-gradient rounded-2xl min-h-full">
            <Image
              src={"/user-avatar.png"}
              alt="vapi"
              width={540}
              height={540}
              className="object-cover rounded-full size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        {callStatus != "ACTIVE" ? (
          <button className="relative inline-block px-7 py-3 font-bold text-sm leading-5 text-white transition-colors duration-150 bg-success-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-success-200 hover:bg-success-200 min-w-28 cursor-pointer items-center justify-center overflow-visible" onClick={handleCall}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus != "CONNECTING" && "hidden"
              )}
            />

            <span>{isCallInactiveOrFinished ? "Call" : "..."}</span>
          </button>
        ) : (
          <button className="inline-block px-7 py-3 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-destructive-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-destructive-200 hover:bg-destructive-200 min-w-28" onClick={handleDisconnectCall}>
            End
          </button>
        )}
      </div>
      {messages.length > 0 && (
        <div className="border-gradient p-0.5 rounded-2xl w-full">
          <div className="dark-gradient rounded-2xl min-h-12 px-5 py-3 flex items-center justify-center">
            <p
              key={latestMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {latestMessage}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Agent;
