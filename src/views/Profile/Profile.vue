<template>
  <div class="content">

    <b-field grouped position="is-left">
      <b-icon icon="user-circle" custom-size="3x" class="content-icon"></b-icon>
      <h1 class="content-title">Profile</h1>
    </b-field>

    <div class="tile is-ancestor">
      <div class="tile is-3 is-vertical is-parent">
        <div class="box">
          <b-image
            src=""
            placeholder="/static/img/icons/favicon-96x96.png"
            ratio="2by1"
        ></b-image>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <section>
            <b-tabs type="is-boxed" position="is-centered">
              <!-- Tab Akademik -->
              <b-tab-item label="Akademik" icon="book-reader">
                <div class="columns is-multiline">
                  <!-- For nis -->
                  <div class="column is-3 key">
                    Program Studi
                  </div>
                  <div class="column is-9">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="NIS"
                        v-model="data.nis"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for nis -->

                  <!-- For nisn -->
                  <div class="column is-3 key">
                    NISN </div>
                  <div class="column is-9">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="NISN"
                        v-model="data.nisn"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for nis -->

                  <!-- For first name -->
                  <div class="column is-3 key">
                    First Name
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="firstName" rules="required" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="First Name"
                        v-model="data.firstName"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for first name -->

                  <!-- For last name -->
                  <div class="column is-3 key">
                    Last Name
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="lastName" rules="required" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="Last Name"
                        v-model="data.lastName"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for last name -->

                  <!-- For class -->
                  <div class="column is-3 key">
                    Class
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="class" rules="required" v-slot="{ errors }">
                      <b-taginput
                        :data="classList"
                        :loading="isFetchingClass"
                        maxtags="1"
                        autocomplete
                        field="name"
                        placeholder="Type and select class..."
                        v-model="data.class"
                        style="width: 90%"
                        expanded
                        @typing="filterClassByName"
                      ></b-taginput>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for class -->

                  <!-- For phone number -->
                  <div class="column is-3 key">
                    Phone Number
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="phoneNumber" rules="required" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="Phone Number"
                        v-model="data.phoneNumber"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for phone number -->

                  <!-- For place of birth -->
                  <div class="column is-3 key">
                    Place Of Birth
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="placeOfBirth" rules="required" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="Place Of Birth"
                        v-model="data.placeOfBirth"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for place of birth -->

                  <!-- For date of birth -->
                  <div class="column is-3 key">
                    Date Of Birth
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="dateOfBirth" rules="required" v-slot="{ errors }">
                      <b-datepicker
                        placeholder="Date Of Birth"
                        v-model="data.dateOfBirth"
                        style="width: 90%"
                        expanded
                      ></b-datepicker>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for date of birth -->

                  <!-- For gender -->
                  <div class="column is-3 key">
                    Gender
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="gender" rules="required" v-slot="{ errors }">
                      <b-select
                        placeholder="Gender"
                        v-model="data.gender"
                        style="width: 90%"
                        expanded
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </b-select>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for gender -->

                  <!-- For address -->
                  <div class="column is-3 key">
                    Address
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                      <b-input
                        type="textarea"
                        placeholder="Address"
                        v-model="data.address"
                        style="width: 90%"
                        expanded
                        rows="3"
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for address -->

                  <!-- For blood type -->
                  <div class="column is-3 key">
                    Blood Type
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="bloodType" rules="required" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="Blood Type"
                        v-model="data.bloodType"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for blood type -->

                  <!-- For email -->
                  <div class="column is-3 key">
                    Email
                  </div>
                  <div class="column is-9">
                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                      <b-input
                        type="text"
                        placeholder="Email"
                        v-model="data.email"
                        style="width: 90%"
                        expanded
                      ></b-input>

                      <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <!-- End for email -->

                  <template v-if="$route.name == 'Student.Create'">
                    <!-- For password -->
                    <div class="column is-3 key">
                      Password 
                    </div>
                    <div class="column is-9">
                      <ValidationProvider
                        name="password"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <b-input
                          type="password"
                          placeholder="Password"
                          v-model="data.password"
                          style="width: 90%"
                          expanded
                        ></b-input>

                        <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                    <!-- End for password -->

                    <!-- For password -->
                    <div class="column is-3 key">
                      Confirm Password
                    </div>
                    <div class="column is-9">
                      <ValidationProvider
                        name="confirmPassword"
                        rules="required|password:password"
                        v-slot="{ errors }"
                      >
                        <b-input
                          type="password"
                          placeholder="Confirm Password"
                          v-model="data.confirmPassword"
                          style="width: 90%"
                          expanded
                        ></b-input>

                        <div class="notif notif-required has-text-danger">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                    <!-- End for password -->
                  </template>

                  <div class="column" style="text-align: right; padding-right: 100px">
                    <b-button
                      type="is-primary"
                      native-type="submit"
                      icon-left="save"
                    >
                      Save
                    </b-button>
                  </div>
                </div>
              </b-tab-item>
              <!-- End Tab Akademik -->

              <!-- Tab Biodata -->
              <b-tab-item label="Biodata" icon="id-card">

              </b-tab-item>
              <!-- End Tab Biodata -->

              <!-- Tab Akun -->
              <b-tab-item label="Akun" icon="user">

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
