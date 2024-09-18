import { CreateFeedbackRequest } from "./types";
import { post } from "./utils";

export async function createFeedback(
  createFeedbackRequest: CreateFeedbackRequest,
  apiKey?: string
) {
  const feedback = await post("feedback", createFeedbackRequest, apiKey);
  return feedback;
}
