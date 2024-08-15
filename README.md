# melodi-sdk-typescript

Thin sdk for getting your data into Melodi

## Install

`npm i @melodi/melodi-sdk-typescript`

## Create logs in Melodi

Log an llm response to Melodi.

```
import {
  createLog,
  CreateLogInputRequest,
  CreateLogOutputRequest,
  CreateLogRequest,
  LogInputType,
  LogOutputType,
} from "@melodi/melodi-sdk-typescript";

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

createLog(createLogRequest, "<YOUR API KEY>");
```

Alternatively if your api key is specified in the environment variable MELODI_API_KEY, then you do not need to pass it with each request.

You can view created logs in the Melodi app at https://app.melodi.fyi/admin/logs
