import { CreateFeedbackRequest, FeedbackResponse } from "./types";
import { post } from "./utils";

export async function createFeedback(
  createFeedbackRequest: CreateFeedbackRequest,
  apiKey?: string
): Promise<FeedbackResponse> {
  const feedback: FeedbackResponse = await post(
    "feedback",
    createFeedbackRequest,
    apiKey
  );
  return feedback;
}
