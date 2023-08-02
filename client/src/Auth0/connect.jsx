import auth0 from 'auth0-js'
require('dotenv').config()

class Auth {
  constructor () {
    this.auth0 = new auth0.WebAuth({
      // Update Lines 7-9 with data from the Auth0 Dashboard of your Application
      domain: 'dev-cggj778i.us.auth0.com',
      audience: 'https://dev-cggj778i.us.auth0.com/userinfo',
      clientID: 'GcBaOHR6zUhQgVF6haTeLppgRhpcwJ2L',
      redirectUri: 'https://fairline-defense.highpowerdata.com/callback/',
      responseType: 'id_token',
      scope: 'openid profile'
    })

    this.getProfile = this.getProfile.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  getProfile () {
    return this.profile
  }

  getIdToken () {
    return this.idToken
  }

  isAuthenticated () {
    return new Date().getTime() < this.expiresAt
  }

  signIn () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err)
        if (!authResult || !authResult.idToken) {
          return reject(err)
        }
        this.idToken = authResult.idToken
        this.profile = authResult.idTokenPayload
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000
        resolve()
      })
    })
  }

  signOut () {
    // clear id token, profile, and expiration
    this.idToken = null
    this.profile = null
    this.expiresAt = null

    this.auth0.logout({
      returnTo: 'https://fairline-defense.highpowerdata.com',
      clientID: 'GcBaOHR6zUhQgVF6haTeLppgRhpcwJ2L'
    })
  }
}

const auth0Client = new Auth()

export default auth0Client
