import ApiService from '@/services/common/api.service'

const student = {
  namespaced: true,
  state: () => ({
    errors: null,
    students: null,
    isLoading: false,
  }),
  getters: {
    // For get students
    getStudents(state) {
      return state.students
    }
  },
  actions: {
    // For get student
    fetchStudents(context, content) {
      return new Promise((resolve, reject) => {
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        context.commit('setLoading', true)
        ApiService.get(`/api/student`, {
          perPage: content.perPage,
          page: content.page,
          sortField: content.sortField,
          sortOrder: content.sortOrder,
          search: content.search,
          status: content.status,
        }).then(
          response => {
            if (response.status === 200) {
              context.commit('setStudents', response.data)
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

    // For fetch student by id
    fetchStudent(context, id) {
      return new Promise((resolve, reject) => {
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.get(`/api/student/${id}/show`, {}).then(
          response => {
            resolve(response)
          },
          error => {
            reject(error)
          }
        )
      })
    },

    // For create student
    createStudent(context, form) {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true)
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.post(`/api/student`, form, true).then(
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

    // For update student
    updateStudent(context, form) {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true)
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.put(`/api/student/${form.id}/update`, form, true).then(
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

    // For delete student
    deleteStudent(context, id) {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true)
        ApiService.init()
        ApiService.setHeaderMultipartFormData()
        ApiService.delete(`/api/student/${id}/delete`, {}, true).then(
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

    // For set students
    setStudents(state, data) {
      state.students = data
    },
  }
}

export default student