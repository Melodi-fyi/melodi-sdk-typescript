import {
  CreateExternalUserRequest,
  createFeedback,
  CreateFeedbackRequest,
  createOrUpdateThread,
  CreateThreadRequest,
} from "@melodi/melodi-sdk-typescript";
import "dotenv/config";

async function createExampleThread() {
  const externalThreadId = "typescript-sdk-example-11";
  const externalUser: CreateExternalUserRequest = {
    externalId: "testuserid1",
    name: "Greg Brown",
    email: "greg+test@melodi.fyi",
    segments: { team: "engineering" },
  };

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
    externalUser,
  };

  const response1 = await createOrUpdateThread(createThreadRequest);
  console.log(response1);

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

  const response2 = await createOrUpdateThread(createThreadRequest2);
  console.log(response2);

  const feedbackRequest: CreateFeedbackRequest = {
    externalThreadId: externalThreadId,
    externalMessageId: "5",
    attributes: {
      Quality: "Wonderful",
    },
    externalUser,
  };

  const response3 = await createFeedback(feedbackRequest);
  console.log(response3);
}

createExampleThread();
