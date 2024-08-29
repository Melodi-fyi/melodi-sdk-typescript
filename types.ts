type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

export type Metadata = {
  [key: string]: string | number;
};

export type CreateMessageRequest = {
  externalId: string;

  role: string;
  content: string;
  metadata?: Metadata;
};

export type CreateExternalUserRequest = {
  externalId: string;
  email?: string;
  name?: string;
};

export type CreateThreadRequest = {
  externalId?: string;
  projectId: number;
  messages: CreateMessageRequest[];
  metadata: Metadata;
};

export type CreateFeedbackRequest = {
  feedbackType: "positive" | "negative";
  feedbackText?: string;
  externalUser?: CreateExternalUserRequest;
  thread?: CreateThreadRequest;
  externalThreadId?: string;
  externalMessageId: string;
};
