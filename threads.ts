import { CreateThreadRequest, ThreadResponse } from "./types";
import { checkForBadResponse, getApiKeyOrError } from "./utils";

export async function createOrUpdateThread(
  createThreadRequest: CreateThreadRequest,
  apiKey?: string
): Promise<ThreadResponse> {
  const key = getApiKeyOrError(apiKey);

  const response = await fetch(
    `https://app.melodi.fyi/api/external/projects?apiKey=${key}`,
    {
      method: "POST",
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
