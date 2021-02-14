<template>
  <div class="content">

    <b-field grouped position="is-left">
      <b-icon icon="user-circle" custom-size="3x" class="content-icon"></b-icon>
      <h1 class="content-title">Profile</h1>
    </b-field>

    <div class="tile is-ancestor">
      <div class="tile is-3 is-vertical is-parent">

          <b-image
            src=""
            placeholder="/static/img/icons/favicon-96x96.png"
            ratio="2by1"
        ></b-image>

      </div>
      <div class="tile is-parent">
        <div class="tile is-child box" style="padding-top: 0px; padding-left: 0px">
          <section>
            <b-tabs type="is-boxed" position="is-left" v-model="activeTab">
              <!-- Tab Akademik -->
              <b-tab-item label="Akademik" icon="book-reader">
                <div class="columns is-multiline" style="padding-left: 16px">
                  <!-- For Program Studi -->
                  <div class="column is-3 key" style="text-align: left">
                    Program Studi
                  </div>
                  <div class="column is-9" style="text-align: left">
                    TEKNIK INFORMATIKA
                  </div>
                  <!-- End for Program Studi -->

                  <!-- For Jenjang -->
                  <div class="column is-3 key" style="text-align: left">
                    Jenjang
                  </div>
                  <div class="column is-9" style="text-align: left">
                    S1
                  </div>
                  <!-- End for Jenjang -->

                  <!-- For Kelas/Tahun Akademik -->
                  <div class="column is-3 key" style="text-align: left">
                    Kelas/Tahun Masuk
                  </div>
                  <div class="column is-9" style="text-align: left">
                    IF-10/2019
                  </div>
                  <!-- End for Kelas/Tahun Akademik -->

                  <!-- For Semester -->
                  <div class="column is-3 key" style="text-align: left">
                    Semester
                  </div>
                  <div class="column is-9" style="text-align: left">
                    III
                  </div>
                  <!-- End for Semester -->

                  <!-- For Dosen Wali -->
                  <div class="column is-3 key" style="text-align: left">
                    Dosen Wali
                  </div>
                  <div class="column is-9" style="text-align: left">
                    Richi Dwi Agustia, S.Kom, M.Kom
                  </div>
                  <!-- End for Dosen Wali -->
                </div>
              </b-tab-item>
              <!-- End Tab Akademik -->

              <!-- Tab Biodata -->
              <b-tab-item label="Biodata" icon="id-card">
                <div class="columns is-multiline" style="padding-left: 16px">
                  <!-- For Nama Lengkap -->
                  <div class="column is-3 key" style="text-align: left">
                    Nama Lengkap
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.firstName}} {{data.lastName}}
                  </div>
                  <!-- End for Nama Lengkap -->

                  <!-- For Tempat Lahir -->
                  <div class="column is-3 key" style="text-align: left">
                    Tempat Lahir
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.placeOfBirth}}
                  </div>
                  <!-- End for Tempat Lahir -->

                  <!-- For Tanggal Lahir -->
                  <div class="column is-3 key" style="text-align: left">
                    Tanggal Lahir
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.dateOfBirth}}
                  </div>
                  <!-- End for Tanggal Lahir -->

                  <!-- For Jenis Kelamin -->
                  <div class="column is-3 key" style="text-align: left">
                    Jenis Kelamin
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.gender}}
                  </div>
                  <!-- End for Jenis Kelamin -->

                  <!-- For Kewarganegaraan -->
                  <div class="column is-3 key" style="text-align: left">
                    Kewarganegaraan
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.nationality}}
                  </div>
                  <!-- End Kewarganegaraan -->

                  <!-- For NIK/Passport -->
                  <div class="column is-3 key" style="text-align: left">
                    NIK/Passport
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.nik}}
                  </div>
                  <!-- End for NIK/Passport -->

                  <!-- For Alamat Lengkap -->
                  <div class="column is-3 key" style="text-align: left">
                    Alamat Lengkap
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.address}}
                  </div>
                  <!-- End for Alamat Lengkap -->

                  <!-- For Desa -->
                  <div class="column is-3 key" style="text-align: left">
                    Desa
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.desa}}
                  </div>
                  <!-- End for Desa -->

                  <!-- For Kecamatan -->
                  <div class="column is-3 key" style="text-align: left">
                    Kecamatan
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.kecamatan}}
                  </div>
                  <!-- End for Kecamatan -->

                  <!-- For Kabupaten -->
                  <div class="column is-3 key" style="text-align: left">
                    Kabupaten
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.kabupaten}}
                  </div>
                  <!-- End Kabupaten -->

                  <!-- For Provinsi -->
                  <div class="column is-3 key" style="text-align: left">
                    Provinsi
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.provinsi}}
                  </div>
                  <!-- End Provinsi -->

                  <!-- For RT -->
                  <div class="column is-3 key" style="text-align: left">
                    RT
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{data.rt}}
                  </div>
                  <!-- End RT -->
                </div>
              </b-tab-item>
              <!-- End Tab Biodata -->

              <!-- Tab Akun -->
              <b-tab-item label="Akun" icon="user">
                <!-- For E-mail -->
                <div class="column is-3 key" style="text-align: left">
                  E-mail
                </div>
                <div class="column is-9" style="text-align: left">
                  {{data.email}}
                </div>
                <!-- End for E-mail -->

                <!-- For No Telpon -->
                <div class="column is-3 key" style="text-align: left">
                  No. Telpon
                </div>
                <div class="column is-9" style="text-align: left">
                  {{data.phoneNumber}}
                </div>
                <!-- End for No. Telpon -->

                <!-- For Telpon Rumah -->
                <div class="column is-3 key" style="text-align: left">
                  Telpon Rumah
                </div>
                <div class="column is-9" style="text-align: left">
                  {{data.telpon_rumah}}
                </div>
                <!-- End for Telpon Rumah -->

                <!-- For E-mail Sekolah -->
                <div class="column is-3 key" style="text-align: left">
                  E-mail Sekolah
                </div>
                <div class="column is-9" style="text-align: left">
                  {{data.school_email}}
                </div>
                <!-- End for E-mail Sekolah -->
              </b-tab-item>
              <!-- End Tab Akun -->
            </b-tabs>
          </section>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { formatDate, showToast } from '@/services/util'
// import debounce from 'lodash/debounce';

export default {
  name: "form-student",
  data() {
    return {
      data: {
        id: null,
        nis: null,
        nisn: null,
        firstName: null,
        lastName: null,
        class: [],
        email: null,
        password: null,
        confirmPassword: null,
        phoneNumber: null,
        address: null,
        bloodType: null,
        placeOfBirth: null,
        dateOfBirth: null,
        gender: null,
        profilePictureUrl: null,
      },
      activeTab: 0,
      classList: [],
      isFetchingClass: false,
    };
  },
  async created() {
    if (this.$route.name == 'Student.Edit') {
      const response = await this.fetchStudent(this.$route.params.studentId)

      response.data.dateOfBirth = new Date(response.data.dateOfBirth)

      response.data.class = [response.data.class]

      this.data = response.data
    }
  },
  methods: {
    ...mapActions({
      fetchStudent: 'student/fetchStudent',
      createStudent: 'student/createStudent',
      updateStudent: 'student/updateStudent',
      searchClassByName: 'classes/searchClassByName',
    }),

    async onSaveClicked() {
      let data = {
        id: this.data.id,
        nis: this.data.nis,
        nisn: this.data.nisn,
        first_name: this.data.firstName,
        last_name: this.data.lastName,
        class: this.data.class,
        email: this.data.email,
        password: this.data.password,
        confirm_password: this.data.confirmPassword,
        phone_number: this.data.phoneNumber,
        address: this.data.address,
        blood_type: this.data.bloodType,
        place_of_birth: this.data.placeOfBirth,
        date_of_birth: this.data.dateOfBirth != null ? formatDate(this.data.dateOfBirth) : null,
        gender: this.data.gender,
        profile_picture_url: this.data.profilePictureUrl,
      }

      try {
        if (this.$route.name == "Student.Create") {
          await this.createStudent(data)
        } else {
          await this.updateStudent(data)
        }

        showToast('Create Student Success', 'is-success', 'is-bottom')

        this.$router.push("/student")
      } catch (err) {
        showToast(err.response.data.message, 'is-danger', 'is-bottom')
      }
    },

    async filterClassByName (event) {
      let data = {
        search: event
      }

      this.classList = []

      const response = await this.searchClassByName(data)

      this.classList = response.data
    }
  },
};
</script>
