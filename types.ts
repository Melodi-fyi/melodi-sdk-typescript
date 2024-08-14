type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

export type Metadata = {
  [key: string]: string | number;
};

export type CreateMessageRequest = {
  externalId?: string;

  role: string;
  content: string;
  metadata: Metadata;
};

export enum LogInputType {
  json = "json",
  markdown = "markdown",
  messages = "messages",
}

export type CreateLogInputRequest = {
  type: LogInputType;
  json?: JSONObject;
  mardown?: string;
  messages?: CreateMessageRequest[];
};

export enum LogOutputType {
  json = "json",
  markdown = "markdown",
  messages = "message",
}

export type CreateLogOutputRequest = {
  type: LogOutputType;
  json?: JSONObject;
  mardown?: string;
  message?: CreateMessageRequest;
};

export type CreateExternalUserRequest = {
  externalId: string;
  email?: string;
  name?: string;
};

export type CreateLogRequest = {
  projectId: number;

  externalId?: string;
  externalThreadId?: string;

  input: CreateLogInputRequest;
  output: CreateLogOutputRequest;

  metadata: Metadata;
  externalUser?: CreateExternalUserRequest;
};
