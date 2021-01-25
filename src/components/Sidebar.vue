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
export default {
  data() {
    return {
      expandOnHover: false,
      mobile: "reduce",
      reduce: false,
    };
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