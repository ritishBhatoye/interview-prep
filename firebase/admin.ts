import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    const projectId = process.env["FIREBASE_PROJECT_ID"];
    const clientEmail = process.env["FIREBASE_CLIENT_EMAIL"];
    const privateKey = process.env["FIREBASE_PRIVATE_KEY"];

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error(
        "Missing required Firebase environment variables: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY"
      );
    }

    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        // Replace newlines in the private key
        privateKey: privateKey.replace(/\\n/g, "\n"),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
