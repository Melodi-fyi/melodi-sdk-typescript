import { CreateThreadRequest, ThreadResponse } from "./types";
import { checkForBadResponse, getApiKeyOrError } from "./utils";

export async function createOrUpdateThread(
  createThreadRequest: CreateThreadRequest,
  apiKey?: string
): Promise<ThreadResponse> {
  const key = getApiKeyOrError(apiKey);

  const response = await fetch(
    `https://app.melodi.fyi/api/external/threads?apiKey=${key}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createThreadRequest),
    }
  );

  await checkForBadResponse(response);

  const thread: ThreadResponse = await response.json();
  return thread;
}
