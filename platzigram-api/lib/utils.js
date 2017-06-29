'use strict'

const jwt = require('jsonwebtoken')
const bearer = require('token-extractor')

module.exports = {
  async singToken (payload, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) return reject(err)

        resolve(token)
      })
    })
  },

  async verifyToken (token, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, options, (err, decoded) => {
        if (err) return reject(err)

        resolve(decoded)
      })
    })
  },

  async extractToken (req) {
    return new Promise((resolve, reject) => {
      bearer(req, (err, token) => {
        if (err) return reject(err)

        resolve(token)
      })
    })
  }
}
