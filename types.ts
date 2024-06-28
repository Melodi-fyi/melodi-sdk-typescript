type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

export type CreateLogRequest = {
  data: string | JSONObject;
  projectName?: string;
  versionName?: string;
};

export type Log = {
  id: number;
  data: JSONObject;
  organizationId: number;
  projectId: number;
  projectVersionId: number;
  createdAt: Date;
  updatedAt: Date;
};
