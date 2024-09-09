function getBaseUrl() {
  return process.env.MELODI_BASE_URL_OVERRIDE || "https://app.melodi.fyi";
}

function getApiKeyOrError(apiKey?: string): string {
  const key = apiKey || process.env.MELODI_API_KEY;

  if (!key) {
    throw new Error(
      "Either pass apiKey as an argument or set MELODI_API_KEY in your environment variables"
    );
  }

  return key;
}

async function checkForBadResponse(response: Response) {
  if (response.status !== 200) {
    let body = "";
    try {
      body = await response.json();
    } catch (e) {
      // pass
    }
    throw new Error(
      `An error occurred with the Melodi api: status ${
        response.status
      }, response body: ${JSON.stringify(body)}`
    );
  }
}

async function request(
  route: string,
  method: string,
  body: any,
  apiKey?: string
) {
  const key = getApiKeyOrError(apiKey);

  const response = await fetch(
    `${getBaseUrl()}/api/external/${route}?apiKey=${key}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    }
  );

  await checkForBadResponse(response);

  return response.json();
}

export async function post(route: string, body: any, apiKey?: string) {
  return request(route, "POST", body, apiKey);
}

export async function get(route: string, apiKey?: string) {
  return request(route, "GET", undefined, apiKey);
}
