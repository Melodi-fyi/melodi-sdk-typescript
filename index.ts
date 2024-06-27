export function createLog(apiKey: string, response: string) {
  console.log("Will create log in Melodi");
  fetch(`https://app.melodi.fyi/api/external/logs?apiKey=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: { response },
    }),
  });
}
