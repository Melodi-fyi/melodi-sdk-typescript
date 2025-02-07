import {
  createFeedback,
  CreateFeedbackRequest,
  createOrUpdateThread,
  createOrUpdateUser,
  CreateThreadRequest,
  UserResponse,
} from "@melodi/melodi-sdk-typescript";
import "dotenv/config";

const externalUserId = "user-sdk-example-1";
const externalThreadId = `typescript-sdk-example-${Math.floor(
  Math.random() * 10000
)}`;

async function createExampleUser() {
  const user: UserResponse = await createOrUpdateUser({
    externalId: externalUserId,
    name: "Example User",
    email: "testuser@melodi.fyi",
    segments: { team: "engineering" },
  });

  return user;
}

async function createExampleThread() {
  const createThreadRequest: CreateThreadRequest = {
    projectId: 64,
    externalId: externalThreadId,
    messages: [
      {
        externalId: "1",
        role: "user",
        content: "Hello!",
      },
      {
        externalId: "2",
        role: "assistant",
        content: "Hi!",
      },
    ],
    externalUser: {
      externalId: externalUserId,
    },
  };

  await createOrUpdateThread(createThreadRequest);

  const createThreadRequest2: CreateThreadRequest = {
    projectId: 64,
    externalId: externalThreadId,
    messages: [
      {
        externalId: "1",
        role: "user",
        content: "Hello!",
      },
      {
        externalId: "2",
        role: "assistant",
        content: "Hi!",
      },
      {
        externalId: "3",
        role: "user",
        content: "What is your favorite color?",
      },
      {
        externalId: "4",
        role: "tool",
        type: "json",
        jsonContent: {
          favoriteColorInfo: {
            type: "color",
            color: "blue",
          },
        },
      },
      {
        externalId: "5",
        role: "assistant",
        content: "My favorite color is blue. Thanks so much for asking!!!!",
      },
    ],
  };

  return await createOrUpdateThread(createThreadRequest2);
}

async function createExampleFeedback() {
  const feedbackRequest: CreateFeedbackRequest = {
    externalThreadId,
    externalMessageId: "5",
    attributes: {
      Quality: "Wonderful",
    },
    externalUser: {
      externalId: externalUserId,
    },
  };

  return await createFeedback(feedbackRequest);
}

async function runExamples() {
  const user = await createExampleUser();
  console.log(user);
  const thread = await createExampleThread();
  console.log(thread);
  const feedback = await createExampleFeedback();
  console.log(feedback);
}

runExamples();
