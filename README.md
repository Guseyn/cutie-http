# cutie-http

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for http module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-http/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@guseyn/cutie-http');
```

## agent

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| CreatedAgentConnection | `agent.createConnection` | agent, options | stream/socket |
| DestroyedAgent | `agent.destroy` | agent | agent |
| KeptSocketAliveOfAgent | `agent.keepSocketAlive` | agent, socket | socket |
| MaxFreeSocketsOfAgent | `agent.maxFreeSockets` | agent | number |
| MaxSocketsOfAgent | `agent.maxSockets` | agent | number |
| NameOfAgent | `agent.getName` | agent, options | string |
| RequestsOfAgent | `agent.requests` | agent | object |
| ReusedSocketOfAgent | `agent.reuseSocket` | agent, socket | stream/socket |
| SocketsOfAgent | `agent.sockets` | agent | object |

## http

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| CreatedHttpServer | `http.createServer` | requestListener( Event with definedBody(request, response) ) | server |
| HttpGetRequest | `http.get` | options, listener( Event(one time) with definedBody(incomingMessage) ) | request |
| HttpRequest | `http.request` | options, listener( Event(one time) with definedBody(incomingMessage) ) | request |

## request

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| AbortedReqest |  |||


[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-http.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-http
