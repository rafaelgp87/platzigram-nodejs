const config = {
  client: {
    pictures: 'http://api.platzigram.com/picture',
    users: 'http://api.platzigram.com/user',
    auth: 'http://api.platzigram.com/auth'
  },
  auth: {
    facebook: {
      clientID: '1493408927399489',
      clientSecret: 'd7d2e1161b530b1d3f9a4cc67ba91752',
      callbackURL: 'http://platzigram.com/auth/facebook/callback'
    }
  },
  secret: process.env.PLATZIGRAM_SECRET || 'pl4tzi'
}

if (process.env.NODE_ENV !== 'production') {
  config.client.endpoints = {
    pictures: 'http://localhost:5000',
    users: 'http://localhost:5001',
    auth: 'http://localhost:5002'
  }

  config.auth.facebook.callbackURL = 'http://platzigram.test:5050/auth/facebook/callback'
}

module.exports = config
