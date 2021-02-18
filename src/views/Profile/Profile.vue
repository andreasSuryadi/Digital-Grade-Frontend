<template>
  <div class="content">
    <b-field grouped position="is-left">
      <b-icon icon="user-circle" custom-size="3x" class="content-icon"></b-icon>
      <h1 class="content-title">Profile</h1>
    </b-field>

    <div class="tile is-ancestor">
      <div class="tile is-3 is-vertical is-parent">
        <template v-if="user.profilePictureUrl == null">
          <b-image
            :src="require('@/assets/images/photo-profile-empty.png')"
            alt="Profile"
            ratio="2by1"
            :responsive="true"
          ></b-image>
        </template>
        <template v-else>
          <b-image
            :src="getUrlPhoto(user.profilePictureUrl)"
            alt="Profile"
            ratio="2by1"
            :responsive="true"
          ></b-image>
        </template>
      </div>
      <div class="tile is-parent">
        <div
          class="tile is-child box"
          style="padding-top: 0px; padding-left: 0px"
        >
          <section>
            <b-tabs type="is-boxed" position="is-left" v-model="activeTab">
              <!-- Tab Biodata -->
              <b-tab-item label="Biodata" icon="id-card">
                <div class="columns is-multiline" style="padding-left: 16px">
                  <template v-if="user.role == 'student'">
                    <!-- For NISN -->
                    <div class="column is-3 key" style="text-align: left">
                      NISN
                    </div>
                    <div class="column is-9" style="text-align: left">
                      {{ user.nisn }}
                    </div>
                    <!-- End for NISN -->

                    <!-- For NIS -->
                    <div class="column is-3 key" style="text-align: left">
                      NIS
                    </div>
                    <div class="column is-9" style="text-align: left">
                      {{ user.nis }}
                    </div>
                    <!-- End for NIS -->
                  </template>
                  <template v-else-if="user.role == 'teacher'">
                    <!-- For NIP -->
                    <div class="column is-3 key" style="text-align: left">
                      NIP
                    </div>
                    <div class="column is-9" style="text-align: left">
                      {{ user.nip }}
                    </div>
                    <!-- End for NIP -->
                  </template>

                  <!-- For Nama Lengkap -->
                  <div class="column is-3 key" style="text-align: left">
                    Nama Lengkap
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{ user.firstName }} {{ user.lastName }}
                  </div>
                  <!-- End for Nama Lengkap -->

                  <!-- For Tempat Lahir -->
                  <div class="column is-3 key" style="text-align: left">
                    Tempat Lahir
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{ user.placeOfBirth }}
                  </div>
                  <!-- End for Tempat Lahir -->

                  <!-- For Tanggal Lahir -->
                  <div class="column is-3 key" style="text-align: left">
                    Tanggal Lahir
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{ user.dateOfBirth }}
                  </div>
                  <!-- End for Tanggal Lahir -->

                  <!-- For Jenis Kelamin -->
                  <div class="column is-3 key" style="text-align: left">
                    Jenis Kelamin
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{ user.gender }}
                  </div>
                  <!-- End for Jenis Kelamin -->

                  <!-- For Alamat Lengkap -->
                  <div class="column is-3 key" style="text-align: left">
                    Alamat Lengkap
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{ user.address }}
                  </div>
                  <!-- End for Alamat Lengkap -->

                  <!-- For Golongan Darah -->
                  <div class="column is-3 key" style="text-align: left">
                    Golongan Darah
                  </div>
                  <div class="column is-9" style="text-align: left">
                    {{ user.bloodType }}
                  </div>
                  <!-- End for Golongan Darah -->
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
                  {{ user.email }}
                </div>
                <!-- End for E-mail -->

                <!-- For No Telpon -->
                <div class="column is-3 key" style="text-align: left">
                  No. Telepon
                </div>
                <div class="column is-9" style="text-align: left">
                  {{ user.phoneNumber }}
                </div>
                <!-- End for No. Telpon -->
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
import { mapGetters } from "vuex";

export default {
  name: "profile",
  data() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    ...mapGetters({
      user: "user/getUserInfo",
    }),
  },
  methods: {
    getUrlPhoto(photo) {
      return process.env.VUE_APP_API_URL + photo;
    },
  },
};
</script>
