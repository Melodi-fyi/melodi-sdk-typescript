export function getApiKeyOrError(apiKey?: string): string {
  const key = apiKey || process.env.MELODI_API_KEY;

  if (!key) {
    throw new Error(
      "Either pass apiKey as an argument or set MELODI_API_KEY in your environment variables"
    );
  }

  return key;
}

export async function checkForBadResponse(response: Response) {
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
