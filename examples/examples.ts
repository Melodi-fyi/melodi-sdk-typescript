import { CreateLogInputRequest, LogInputType } from "../types";

const createLogInputRequest: CreateLogInputRequest = {
  type: LogInputType.messages,
  messages: [
    {
      role: "user",
      content: "Hello!",
    },
  ],
};

console.log(createLogInputRequest);
