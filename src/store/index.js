import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.module'
import teacher from './teacher.module'
import student from './student.module'
import course from './course.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    teacher,
    student,
    course,
  },
})
