'use strict'

const http = require('http')

// err, {statusCode, headers, body} in callback
const responseFromHttpGetRequest = (options, callback) => {
  http.get(options, (res) => {
    let resObj = {}
    resObj.statusCode = res.statusCode
    resObj.headers = res.headers
    let body = []
    res.on('data', (chunk) => {
      body.push(chunk)
    })
    res.on('end', () => {
      resObj.body = Buffer.concat(body)
      callback(null, resObj)
    })
  }).on('error', (err) => {
    callback(err)
  })
}

module.exports = responseFromHttpGetRequest
