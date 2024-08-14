import {
  createLog,
  CreateLogInputRequest,
  CreateLogOutputRequest,
  CreateLogRequest,
  LogInputType,
  LogOutputType,
} from "@melodi/melodi-sdk-typescript";
import "dotenv/config";

const createLogInputRequest: CreateLogInputRequest = {
  type: LogInputType.messages,
  messages: [
    {
      role: "user",
      content: "Hello!",
    },
  ],
};

const createLogOutputRequest: CreateLogOutputRequest = {
  type: LogOutputType.messages,
  message: {
    role: "assistant",
    content: "Hi!",
  },
};

const createLogRequest: CreateLogRequest = {
  projectId: 64,
  input: createLogInputRequest,
  output: createLogOutputRequest,
};

createLog(createLogRequest);
