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

    // For fetch teacher by id
    fetchTeacher(context, id) {
      return new Promise((resolve, reject) => {
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.get(`/api/teacher/${id}/show`, {}).then(
          response => {
            resolve(response)
          },
          error => {
            reject(error)
          }
        )
      })
    },

    // For create teacher
    createTeacher(context, form) {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true)
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.post(`/api/teacher`, form, true).then(
          response => {
            context.commit('setLoading', false)
            resolve(response)
          },
          error => {
            reject(error)
          }
        )
      })
    },

    // For update teacher
    updateTeacher(context, form) {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true)
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.put(`/api/teacher/${form.id}/update`, form, true).then(
          response => {
            context.commit('setLoading', false)
            resolve(response)
          },
          error => {
            reject(error)
          }
        )
      })
    },

    // For delete teacher
    deleteTeacher(context, id) {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true)
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.delete(`/api/teacher/${id}/delete`, {}, true).then(
          response => {
            context.commit('setLoading', false)
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