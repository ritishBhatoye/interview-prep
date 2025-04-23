import Agent from "@/components/interview/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import React from "react";

const InterviewPage = async () => {
  const user = await getCurrentUser();

  return (
    <div>
      <Agent userName="Ritish" type={"generate"} />
    </div>
  );
};

export default InterviewPage;
