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

For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/).

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
| CreatedHttpServer | `http.createServer` | requestListener( Event with `definedBody(request, response)` ) | server |
| HttpGetRequest | `http.get` | options, listener( Event(one time) with `definedBody(incomingMessage)` ) | request |
| HttpRequest | `http.request` | options, listener( Event(one time) with `definedBody(incomingMessage)` ) | request |

## request

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| AbortedReqest | `request.abort` | request | request |
| EndedReqest | `request.end` | request, data, encoding | request |
| RequestAbortedTime | `request.aborted` | request | number |
| RequestHeader | `request.header` | request, name | string |
| RequestWithAbortEvent | `request.on('abort', event)` | request, event( Event with `definedBody()` ) | request |
| RequestWithConnectEvent | `request.on('connect', event)` |request, event( Event with definedBody(incomingMessage, socket, head) )| request |
| RequestWithContinueEvent | `request.on('continue', event)` | request, event( Event with `definedBody()` ) | request |
| RequestWithDataEvent | `request.on('data', event)` | request, event ( Event with `definedBody(chunk)` ) | request |
| RequestWithEndEvent | `request.on('end', event)` | request, event ( Event with `definedBody()` ) | request |
| RequestWithErrorEvent | `request.on('error', event)` | request, event ( Event with `definedBody(error)` ) | request |
| RequestWithFlushedHeaders | `request.flushHeaders` | request | request |
| RequestWithHeader | `request.setHeader` | request, name, value | request |
| RequestWithNoDelay | `request.setNoDelay` | request, noDelay | request |
| RequestWithRemovedHeader | `request.removeHeader` | request, name | request |
| RequestWithResponseEvent | `request.on('response', event)` | request, event( Event with `definedBody(response)` ) | request |
| RequestWithSocketEvent | `request.on('socket', event)` | request, event( Event with `definedBody(socket)` ) | request |
| RequestWithSockedKeepAlive | `request.setSocketKeepAlive` | request, enable, initialDelay | request |
| RequestWithTimeout | `request.setTimeout` | request, timeout | request |
| RequestWithTimeoutEvent | `request.on('timeout', event)` | request, event( Event with `definedBody()` ) | request |
| RequestWithUpgradeEvent | `request.on('upgrade', event)` | request, event( Event with `definedBody(req, socket, head)` ) | request |
| SocketOfRequest | `request.socket` | request | socket |
| WrittenRequest | `request.write` | request, chunk, encoding('utf8') | request |

[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-http.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-http
