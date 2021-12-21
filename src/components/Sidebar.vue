<template>
  <div>
    <section>
      <b-sidebar
        position="fixed"
        :mobile="mobile"
        :reduce="false"
        type="is-sidebar"
        open
      >
        <div class="p-1">
          <b-menu class="is-custom-mobile">
            <b-menu-list class="sidebar-list">
              <template v-if="user.role == 'superadmin'">
                <!-- For Profile -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/profile"
                  target="_self"
                  :active="this.$route.path === '/profile'"
                >
                  <template slot="label">
                    <b-icon icon="user"></b-icon>
                    <span class="sidebar-item__text"> Profile </span>
                  </template>
                </b-menu-item>
                <!-- End For Profile -->

                <!-- For Teacher -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/teacher"
                  target="_self"
                  :active="this.$route.path.includes('/teacher')"
                >
                  <template slot="label">
                    <b-icon icon="users"></b-icon>
                    <span class="sidebar-item__text"> Teacher </span>
                  </template>
                </b-menu-item>
                <!-- End For Teacher -->

                <!-- For Student -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/student"
                  target="_self"
                  :active="this.$route.path.includes('/student')"
                >
                  <template slot="label">
                    <b-icon icon="users"></b-icon>
                    <span class="sidebar-item__text"> Student </span>
                  </template>
                </b-menu-item>
                <!-- End For Student -->

                <!-- For Course -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/course"
                  target="_self"
                  :active="this.$route.path.includes('/course')"
                >
                  <template slot="label">
                    <b-icon icon="book"></b-icon>
                    <span class="sidebar-item__text"> Course </span>
                  </template>
                </b-menu-item>
                <!-- End For Course -->

                <!-- For Class -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/class"
                  target="_self"
                  :active="this.$route.path.includes('/class')"
                >
                  <template slot="label">
                    <b-icon icon="graduation-cap"></b-icon>
                    <span class="sidebar-item__text"> Class </span>
                  </template>
                </b-menu-item>
                <!-- End For Class -->

                <!-- For School Year -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/school-year"
                  target="_self"
                  :active="this.$route.path.includes('/school-year')"
                >
                  <template slot="label">
                    <b-icon icon="calendar-alt"></b-icon>
                    <span class="sidebar-item__text"> School Year </span>
                  </template>
                </b-menu-item>
                <!-- End For School Year -->

                <!-- For Schedule -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/schedule"
                  target="_self"
                  :active="this.$route.path.includes('/schedule')"
                >
                  <template slot="label">
                    <b-icon icon="calendar-alt"></b-icon>
                    <span class="sidebar-item__text"> Schedule </span>
                  </template>
                </b-menu-item>
                <!-- End For Schedule -->
              </template>
              <template v-else-if="user.role == 'teacher'">
                <!-- For Profile -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/profile"
                  target="_self"
                  :active="this.$route.path === '/profile'"
                >
                  <template slot="label">
                    <b-icon icon="user"></b-icon>
                    <span class="sidebar-item__text"> Profile </span>
                  </template>
                </b-menu-item>
                <!-- End For Profile -->

                <!-- For Schedule -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  :to="'/schedule/teacher'"
                  target="_self"
                  :active="this.$route.path.includes('/schedule')"
                >
                  <template slot="label">
                    <b-icon icon="calendar-alt"></b-icon>
                    <span class="sidebar-item__text"> Schedule </span>
                  </template>
                </b-menu-item>
                <!-- End For Schedule -->
              </template>
              <template v-else-if="user.role == 'student'">
                <!-- For Profile -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  to="/profile"
                  target="_self"
                  :active="this.$route.path === '/profile'"
                >
                  <template slot="label">
                    <b-icon icon="user"></b-icon>
                    <span class="sidebar-item__text"> Profile </span>
                  </template>
                </b-menu-item>
                <!-- End For Profile -->
                
                <!-- For Class -->
                <b-menu-item
                  class="sidebar-item"
                  tag="router-link"
                  :to="'/class/student'"
                  target="_self"
                  :active="this.$route.path.includes('/class/student')"
                >
                  <template slot="label">
                    <b-icon icon="calendar-alt"></b-icon>
                    <span class="sidebar-item__text"> Class </span>
                  </template>
                </b-menu-item>
                <!-- End For Class -->
              </template>

              <!-- For Map -->
              <b-menu-item
                class="sidebar-item"
                tag="router-link"
                :to="'/map'"
                target="_self"
                :active="this.$route.path.includes('/map')"
              >
                <template slot="label">
                  <b-icon icon="calendar-alt"></b-icon>
                  <span class="sidebar-item__text"> Map </span>
                </template>
              </b-menu-item>
              <!-- End For Map -->

              <b-menu-item
                class="sidebar-item sidebar-logout"
                @click="logoutPopup"
              >
                <template slot="label">
                  <b-icon icon="power-off"></b-icon>
                  <span class="sidebar-item__text"> Logout </span>
                </template>
              </b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      expandOnHover: false,
      mobile: "reduce",
      reduce: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "user/getUserInfo",
    }),
  },
  methods: {
    logoutPopup() {
      this.$buefy.dialog.confirm({
        title: "Logout",
        message: `Are you sure want to logout?`,
        cancelText: "No!",
        confirmText: "Yes!",
        type: "is-danger",
        onConfirm: () => this.doLogout(),
      });
    },
    doLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  // min-height: 100vh;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    // min-height: 100vh;
  }
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>