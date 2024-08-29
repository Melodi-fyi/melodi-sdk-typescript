import { CreateProjectRequest, CreateProjectResponse, ProjectResponse } from "./types";

export async function listProjects(apiKey?: string): Promise<ProjectResponse[]> {
  const key = apiKey || process.env.MELODI_API_KEY;

  if (!key) {
    throw new Error(
      "Either pass apiKey as an argument or set MELODI_API_KEY in your environment variables"
    );
  }

  const response = await fetch(
    `https://app.melodi.fyi/api/external/projects?apiKey=${key}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
      `An error occurred fetching the projects: status ${
        response.status
      }, response body: ${JSON.stringify(body)}`
    );
  }

  const projects: ProjectResponse[] = await response.json();
  return projects;
}

export async function createProject(
  createProjectRequest: CreateProjectRequest,
  apiKey?: string
): Promise<CreateProjectResponse> {
  const key = apiKey || process.env.MELODI_API_KEY;

  if (!key) {
    throw new Error(
      "Either pass apiKey as an argument or set MELODI_API_KEY in your environment variables"
    );
  }

  const response = await fetch(
    `https://app.melodi.fyi/api/external/projects?apiKey=${key}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createProjectRequest),
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
      `An error occurred creating the project: status ${
        response.status
      }, response body: ${JSON.stringify(body)}`
    );
  }

  const project: CreateProjectResponse = await response.json();
  return project;
}
