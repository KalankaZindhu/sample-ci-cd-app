const fs = require('fs')
const jwt = require('jsonwebtoken')
const express = require('express')
const path = require('path')
const router = express.Router()

// loading the private key which generated from openssl
const privateKey = fs.readFileSync(
  path.resolve('I:/Zindhu/StarMarket/certs/private.pem'),
  'utf-8'
)
//loading the public key which generated from openssl
const publicKey = fs.readFileSync(
  path.resolve('I:/Zindhu/StarMarket/certs/public.pem'),
  'utf-8'
)

let { accessToken } = {}
router.post('/verifyToken', (req, res) => {
  res.json(privateKey)
})

// generate jwt token with private key
router.post('/generateToken', (req, res) => {
  const payload = req.body

  const token = jwt.sign(payload, privateKey, {
    algorithm: 'ES256'
    // expiresIn: '1h'
  })
  accessToken = token
  res.status(201).json({ token })
})

router.post('/verify', (req, res) => {
  const token = req.body
  try {
    const decodedToken = jwt.verify(token.token, publicKey, {
      algorithms: ['ES256'],
      ignoreExpiration: false
    })
    res.status(200).json({ valid: true, decodedToken })
  } catch (err) {
    res.status(401).json({ valid: false, error: err.message })
  }
})

router.post('/login', (req, res) => {
  // req.headers.authorization = `Bearer ${accessToken} `
  // req.headers.accept = 'application/json'

  res.status(200).json({ accessToken: '23423' })
})

module.exports = router
