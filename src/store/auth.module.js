import ApiService from '@/services/common/api.service'
import JwtService from '@/services/common/jwt.service'
import router from '@/router'

const auth = {
  namespaced: true,
  state: () => ({
    errors: null,
    message: null,
    user: {},
    loggedIn: !!JwtService.getToken(),
  }),
  getters: {
    currentUser(state) {
      return state.user
    },
    isLoggedIn(state) {
      return state.loggedIn
    },
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        ApiService.init()
        ApiService.post('/api/oauth/token', {
          grant_type: 'password',
          client_id: process.env.VUE_APP_CLIENT_ID,
          client_secret: process.env.VUE_APP_CLIENT_SECRET,
          username: credentials.nis,
          password: credentials.password,
        }).then(
          response => {
            if (response.status === 200) {
              context.commit('setAccessToken', response.data.accessToken)
              context.commit('setAuth', {
                user: response.data.user,
              })
              router.push({ path: credentials.redirect })

              resolve(response)
            }
          },
          error => {
            reject(error)
          }
        )
      })
    },
    logout(context) {
      context.commit('purgeAuth')
    },
    register(context, credentials) {
      return new Promise((resolve, reject) => {
        ApiService.init()
        ApiService.post('/user/register', {
          email: credentials.email,
          first_name: credentials.first_name,
        }).then(
          response => {
            //*route register belum dibuat
            // router.push({ path: '/signin' })
            resolve(response)
          },
          error => {
            reject(error)
          }
        )
      })
    },
  },
  mutations: {
    setError(state, error) {
      state.errors = error
    },
    setAuth(state, user) {
      state.loggedIn = true
      state.user = user
      state.errors = {}
    },
    setAccessToken(state, data) {
      JwtService.saveToken(data)
    },
    purgeAuth(state) {
      state.loggedIn = false
      state.user = {}
      state.errors = {}
      JwtService.destroyToken()
    },
  },
}

export default auth
