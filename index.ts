import { CreateLogRequest } from "./types";

export async function createLog(
  createLogRequest: CreateLogRequest,
  apiKey?: string
) {
  const key = apiKey || process.env.MELODI_API_KEY;

  if (!key) {
    throw new Error(
      "Either pass apiKey as an argument or set MELODI_API_KEY in your environment variables"
    );
  }

  const response = await fetch(
    `https://app.melodi.fyi/api/external/logs?apiKey=${key}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createLogRequest),
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
      `An error occurred creating the log: status ${response.status}, response body: ${body}`
    );
  }

  const log = await response.json();

  return log;
}
