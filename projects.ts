import {
  CreateProjectRequest,
  CreateProjectResponse,
  ProjectResponse,
} from "./types";
import { checkForBadResponse, getApiKeyOrError } from "./utils";

export async function listProjects(
  apiKey?: string
): Promise<ProjectResponse[]> {
  const key = getApiKeyOrError(apiKey);

  const response = await fetch(
    `https://app.melodi.fyi/api/external/projects?apiKey=${key}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  await checkForBadResponse(response);

  const projects: ProjectResponse[] = await response.json();
  return projects;
}

export async function createProject(
  createProjectRequest: CreateProjectRequest,
  apiKey?: string
): Promise<CreateProjectResponse> {
  const key = getApiKeyOrError(apiKey);

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

  await checkForBadResponse(response);

  const project: CreateProjectResponse = await response.json();
  return project;
}
