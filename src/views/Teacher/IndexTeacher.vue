<template>
  <div class="content">
    <b-field grouped position="is-left">
      <b-icon icon="users" custom-size="3x" class="content-icon"></b-icon>
      <h1 class="content-title">Teachers</h1>
    </b-field>

    <template v-if="!isLoading">
      <div class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <router-link to="/teacher/create">
            <b-button type="is-primary" class="btn-create">
              Create New
            </b-button>
          </router-link>
        </div>
      </div>

      <div class="level table-search">
        <div class="level-left">
          <b-field>
            <b-input
              v-model="search"
              placeholder="Search..."
              type="search"
              icon="search"
            ></b-input>
          </b-field>
        </div>
        <div class="level-right">
          <b-select v-model="perPage" @input="onPerPageChange">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </b-select>
        </div>
      </div>

      <b-table
        v-if="!isLoading"
        :data="teachers && teachers.data ? teachers.data : []"
        :current-page.sync="currentPage"
        paginated
        backend-pagination
        :total="teachers.meta && teachers.meta.total ? teachers.meta.total : 0"
        :per-page="perPage"
        @page-change="onPageChange"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        backend-sorting
        :default-sort-direction="defaultSortOrder"
        :default-sort="[sortField, sortOrder]"
        @sort="onSort"
        detail-key="id"
      >
        <!-- For NIG -->
        <b-table-column
          field="no"
          label="No"
          sortable
          v-slot="props"
          width="5%"
        >
          <span class="table-full-name">
            {{ props.index + teachers.meta.from }}
          </span>
        </b-table-column>

        <!-- For NIG -->
        <b-table-column
          field="nig"
          label="NIG"
          sortable
          v-slot="props"
          width="10%"
        >
          <span class="table-full-name">
            {{ props.row.nig }}
          </span>
        </b-table-column>

        <!-- For full name -->
        <b-table-column
          field="first_name"
          label="Full Name"
          sortable
          v-slot="props"
          width="10%"
        >
          {{ props.row.fullName }}
        </b-table-column>

        <!-- For email -->
        <b-table-column
          field="email"
          label="Email"
          sortable
          v-slot="props"
          width="10%"
        >
          {{ props.row.email }}
        </b-table-column>

        <!-- For phone number -->
        <b-table-column
          field="phone_number"
          label="Phone Number"
          sortable
          v-slot="props"
          width="10%"
        >
          {{ props.row.phoneNumber }}
        </b-table-column>

        <!-- For phone number -->
        <b-table-column
          field="date_of_birth"
          label="Date of Birth"
          sortable
          v-slot="props"
          width="10%"
        >
          {{ props.row.placeOfBirth }}, {{ props.row.dateOfBirth }}
        </b-table-column>

        <!-- For action -->
        <b-table-column label="Action" v-slot="props" width="10%">
          <router-link :to="'/teacher/edit/' + props.row.id">
            <b-button
              type="is-primary is-small has-text-weight-bold"
              icon-left="edit"
            ></b-button>
          </router-link>
          <b-button
            style="margin-left: 10px"
            type="is-danger is-small has-text-weight-bold"
            @click="deletePopup(props.row.id)"
            icon-left="trash"
          ></b-button>
        </b-table-column>
      </b-table>
    </template>
    <template v-else>
      <Loading :is-loading="isLoading" />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { showToast } from "@/services/util";
import Loading from "@/components/Loading";
import debounce from 'lodash/debounce'

export default {
  name: "teacher",
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,

      // isLoadingTable: false,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      defaultSortOrder: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 10,
      activeTab: 0,
      sortField: "id",
      sortOrder: "desc",
      page: 1,
      search: null,
    };
  },
  computed: {
    ...mapGetters({
      teachers: "teacher/getTeachers",
    }),
  },
  async created() {
    await this.loadTeachers(
      this.perPage,
      this.page,
      this.sortField,
      this.sortOrder,
      this.search,
      this.status
    );
  },
  methods: {
    ...mapActions({
      fetchTeachers: "teacher/fetchTeachers",
      deleteTeacherData: "teacher/deleteTeacher",
    }),

    // For search teacher
    searchTeacher: debounce(function(value) {
      if (value) {
        this.search = value
        this.loadTeachers(
          this.perPage,
          this.page,
          this.sortField,
          this.sortOrder,
          this.search
        )
      } else {
        this.search = null
        this.loadTeachers(
          this.perPage,
          this.page,
          this.sortField,
          this.sortOrder,
          this.search
        )
      }
    }, 500),

    // For load teachers
    async loadTeachers(perPage, page, sortField, sortOrder, search, status) {
      let data = {
        perPage: perPage,
        page: page,
        sortField: sortField,
        sortOrder: sortOrder,
        search: search,
        status: status,
      };

      this.isLoading = true;
      try {
        await this.fetchTeachers(data);
      } catch (err) {
        showToast(err, "is-danger", "is-bottom");
      }
      this.isLoading = false;
    },

    // For delete popup
    deletePopup(id) {
      this.$buefy.dialog.confirm({
        title: "Delete Teacher",
        message: `Are you sure want to delete this teacher?`,
        cancelText: "No, cancel it!",
        confirmText: "Yes, delete it!",
        type: "is-primary",
        onConfirm: () => this.deleteTeacher(id),
      });
    },

    // For delete teacher
    async deleteTeacher(id) {
      this.isLoading = true;

      try {
        await this.deleteTeacherData(id);

        showToast("Delete Teacher Success", "is-success", "is-bottom");
      } catch (err) {
        showToast(err, "is-danger", "is-bottom");
      }

      this.loadTeachers(
        this.perPage,
        this.page,
        this.sortField,
        this.sortOrder,
        this.search,
        this.status
      );

      this.isLoading = false;
    },

    // For Page Change
    onPageChange(page) {
      this.currentPage = page;
      this.page = page;
      this.loadTeachers(
        this.perPage,
        this.page,
        this.sortField,
        this.sortOrder,
        this.search,
        this.status
      );
    },

    // For Sorting Data
    onSort(field, order) {
      this.sortField = field;
      this.sortOrder = order;
      this.loadTeachers(
        this.perPage,
        this.page,
        this.sortField,
        this.sortOrder,
        this.search,
        this.status
      );
    },

    // For per page change
    onPerPageChange(value) {
      this.perPage = value;
      this.loadTeachers(
        this.perPage,
        this.page,
        this.sortField,
        this.sortOrder,
        this.search,
        this.status
      );
    },
  },
  watch: {
    search: function(val) {
      this.searchTeacher(val)
    },
  },
};
</script>
