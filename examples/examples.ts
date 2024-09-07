import {
  createOrUpdateThread,
  CreateThreadRequest,
} from "@melodi/melodi-sdk-typescript";
import "dotenv/config";

async function createExampleThread() {
  const createThreadRequest: CreateThreadRequest = {
    projectId: 64,
    externalId: "typescript-sdk-example-2",
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
  };

  const response1 = await createOrUpdateThread(createThreadRequest);
  console.log(response1);

  const createThreadRequest2: CreateThreadRequest = {
    projectId: 64,
    externalId: "typescript-sdk-example-2",
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
        role: "assistant",
        content: "My favorite color is blue. Thanks so much for asking!!!!",
      },
    ],
  };

  const response2 = await createOrUpdateThread(createThreadRequest2);
  console.log(response2);
}

createExampleThread();
