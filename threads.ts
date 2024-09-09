import { CreateThreadRequest, ThreadResponse } from "./types";
import { post } from "./utils";

export async function createOrUpdateThread(
  createThreadRequest: CreateThreadRequest,
  apiKey?: string
): Promise<ThreadResponse> {
  const thread: ThreadResponse = await post(
    "threads",
    createThreadRequest,
    apiKey
  );
  return thread;
}
