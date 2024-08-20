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
  metadata?: Metadata;
};

export type CreateLogInputRequest = {
  type: "json" | "markdown" | "messages";
  json?: JSONObject;
  mardown?: string;
  messages?: CreateMessageRequest[];
};

export type CreateLogOutputRequest = {
  type: "json" | "markdown" | "message";
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

  input?: CreateLogInputRequest;
  output: CreateLogOutputRequest;

  metadata?: Metadata;
  externalUser?: CreateExternalUserRequest;
};

export type CreateFeedbackRequest = {
  feedbackType: "positive" | "negative";
  feedbackText?: string;
  externalUser?: CreateExternalUserRequest;
  log?: CreateLogRequest;
  logId?: number;
  externalLogId?: string;
  externalThreadId?: string;
  externalMessageId?: string;
};
