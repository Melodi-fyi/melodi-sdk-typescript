import { CreateFeedbackRequest } from "./types";

export async function createFeedback(
  createFeedbackRequest: CreateFeedbackRequest,
  apiKey?: string
) {
  const key = apiKey || process.env.MELODI_API_KEY;

  if (!key) {
    throw new Error(
      "Either pass apiKey as an argument or set MELODI_API_KEY in your environment variables"
    );
  }

  const response = await fetch(
    `https://app.melodi.fyi/api/external/feedback?apiKey=${key}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createFeedbackRequest),
    }
  );

  if (response.status !== 200) {
    let body = "";
    try {
      body = await response.json();
    } catch (e) {
      // pass
    }
    throw new Error(
      `An error occurred creating the feedback: status ${
        response.status
      }, response body: ${JSON.stringify(body)}`
    );
  }

  const log = await response.json();

  return log;
}
