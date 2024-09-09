import {
  CreateProjectRequest,
  CreateProjectResponse,
  ProjectResponse,
} from "./types";
import { get, post } from "./utils";

export async function listProjects(
  apiKey?: string
): Promise<ProjectResponse[]> {
  const projects: ProjectResponse[] = await get("projects", apiKey);
  return projects;
}

export async function createProject(
  createProjectRequest: CreateProjectRequest,
  apiKey?: string
): Promise<CreateProjectResponse> {
  const project: CreateProjectResponse = await post(
    "projects",
    createProjectRequest,
    apiKey
  );
  return project;
}
