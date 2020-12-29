<template>
  <div class="login">
    <div class="login-card">
      <div class="columns">
        <div class="column is-6">
          <div class="login-card__company">
            <img class="login-card__company_image" src="@/assets/images/logo-white.png" alt="Logo">
            <div class="login-card__company_paragraph">
              Untuk Siswa, silahkan log in menggunakan NIS dan password seperti yang telah diberikan di email
            </div>
            <div class="login-card__company_paragraph">
              Untuk Guru, silahkan log in menggunakan akun email sekolah dengan mengklik tombol Log in Guru menggunakan email sekolah yang berada di bawah form Log in.
            </div>
          </div>
        </div>
        <div class="column is-6">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(doLogin)" class="login-card__form">
              <h1 class="login-card__form_title">Siswa Login</h1>
              <p class="login-card__form_subtitle">Masukan NIS dan Password Anda.</p>

              <ValidationProvider name="nis" rules="required" v-slot="{ errors }">
                <b-field :type="errors.length > 0 ? 'is-danger' : null">
                  <b-input
                    type="text"
                    v-model="form.nis"
                    placeholder="NIS"
                    class="login-card__form_input"
                  ></b-input>
                </b-field>
                <div class="required">{{ errors[0] }}</div>
              </ValidationProvider>

              <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                <b-field :type="errors.length > 0 ? 'is-danger' : null">
                  <b-input
                    type="password"
                    v-model="form.password"
                    placeholder="Password"
                    class="login-card__form_input"
                  ></b-input>
                </b-field>
                <div class="required">{{ errors[0] }}</div>
              </ValidationProvider>

              <b-button
                type="is-success"
                class="login-card__form_button"
                :loading="isLoading"
                native-type="submit"
              >
                Sign in
              </b-button>

              <div class="login-card__form_forgot">
                <a href="#">Forgot Password</a>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showToast } from '@/services/util'

export default {
  name: 'login',
  data() {
    return {
      form: {
        nis: null,
        password: null,
      },
      isLoading: false,
    }
  },
  methods: {
    async doLogin() {
      this.isLoading = true

      let credential = {
        nis: this.form.nis,
        password: this.form.password,
        redirect: '/',
      }
      try {
        this.isLoading = true
        await this.$store.dispatch('auth/login', credential)
      } catch (err) {
        this.message = 'Login Failed'
        showToast('Login Failed', 'is-danger', 'is-bottom')
      }
      this.isLoading = false
    },
  },
}
</script>