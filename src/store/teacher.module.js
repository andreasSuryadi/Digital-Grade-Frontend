import ApiService from '@/services/common/api.service'

const teacher = {
  namespaced: true,
  state: () => ({
    errors: null,
    teachers: null,
    isLoading: false,
  }),
  getters: {
    // For get teachers
    getTeachers(state) {
      return state.teachers
    }
  },
  actions: {
    // For get teacher
    fetchTeachers(context, content) {
      return new Promise((resolve, reject) => {
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        context.commit('setLoading', true)
        ApiService.get(`/api/teacher`, {
          perPage: content.perPage,
          page: content.page,
          sortField: content.sortField,
          sortOrder: content.sortOrder,
          search: content.search,
          status: content.status,
        }).then(
          response => {
            if (response.status === 200) {
              context.commit('setTeachers', response.data)
              context.commit('setLoading', false)
              resolve(response)
            }
          },
          error => {
            context.commit('setLoading', false)
            reject(error)
          }
        )
      })
    },
  },
  mutations: {
    // For set loading
    setLoading(state, data) {
      state.isLoading = data
    },

    // For set teachers
    setTeachers(state, data) {
      state.teachers = data
    },
  }
}

export default teacher