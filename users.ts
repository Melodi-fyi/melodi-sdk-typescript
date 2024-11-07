import { CreateExternalUserRequest, UserResponse } from "./types";
import { put } from "./utils";

export async function createOrUpdateUser(
  createUserRequest: CreateExternalUserRequest,
  apiKey?: string
): Promise<UserResponse> {
  const user: UserResponse = await put("users", createUserRequest, apiKey);
  return user;
}
