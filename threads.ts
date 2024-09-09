import { CreateThreadRequest, ThreadResponse } from "./types";
import { put } from "./utils";

export async function createOrUpdateThread(
  createThreadRequest: CreateThreadRequest,
  apiKey?: string
): Promise<ThreadResponse> {
  const thread: ThreadResponse = await put(
    "threads",
    createThreadRequest,
    apiKey
  );
  return thread;
}
