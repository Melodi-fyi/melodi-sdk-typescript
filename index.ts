import { CreateLogRequest, Log } from "./types";

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

  let data;
  if (typeof createLogRequest.data == "string") {
    data = { response: createLogRequest.data };
  } else {
    data = JSON.stringify(createLogRequest.data);
  }

  const response = await fetch(
    `https://app.melodi.fyi/api/external/logs?apiKey=${key}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        projectName: createLogRequest.projectName,
        versionName: createLogRequest.versionName,
      }),
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

  const log: Log = await response.json();

  return log;
}
