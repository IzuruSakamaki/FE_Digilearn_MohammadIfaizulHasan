<template>
  <div class="bg-gray-100 flex tracking-wide">
    <LeftMenu />
    <div class="w-full m-6">
      <NavigationBar class="mb-5" />
      <BreadCrumbs class="mb-5" />
      <CardTable class="mb-5" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import LeftMenu from '../components/LeftMenu.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import CardTable from '../components/CardTable.vue';
export default {
    name: "IndexPage",
    components: { LeftMenu, NavigationBar, BreadCrumbs, CardTable }
}
</script>
