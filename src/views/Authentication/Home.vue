<template>
  <div>
    <nav class="has-shadow">
      <Navbar />
    </nav>
    <section class="documentation">
      <div class="sidebar-bg"></div>
      <div class="container is-fullhd docs-template-horizontal">
        <div class="columns body-content">
          <div class="column is-one-fifth sidebar-content">
            <Sidebar />
          </div>
          <div class="column content-view is-mobile">
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Navbar,
    Sidebar,
  }
}
</script>