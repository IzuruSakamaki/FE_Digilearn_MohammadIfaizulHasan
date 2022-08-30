<template>
  <div class="container font-montserrat h-fit bg-white shadow-lg rounded-md">
    <div class="flex py-4 px-6 justify-between">
      <div class="flex">
        <h2 class="my-auto w-52 text-nav-black">Course List</h2>
        <img class="my-auto mr-6" src="/img/mainicon/filter.png" alt="Filter Data">
        <img class="my-auto" src="/img/mainicon/search.png" alt="Search Data">
      </div>
      <button class="border-2 rounded-lg w-40 py-2 border-nav-red flex justify-center gap-2">
        <img class="my-auto px-0 mx-0" src="/img/mainicon/add.png" alt="Add Data">
        <p class="text-nav-red text-sm">Add Course</p>
      </button>
    </div>
    <table class="w-full text-sm text-nav-black">
      <thead>
        <tr class="bg-slate-200">
          <th class="py-3 px-2 font-medium">#</th>
          <th class="text-start w-1/4 font-medium">TITLE</th>
          <th class="text-start font-medium">ORGANIZATION</th>
          <th class="font-medium">STATUS</th>
          <th class="text-start font-medium">LAST UPDATE</th>
          <th class=" font-medium">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, index) in $store.state.courses" :key="course.id" class="divide-y divide-solid">
          <td class="text-center py-3 px-2" v-html="index + 1"></td>
          <td v-html="course.title"></td>
          <td v-html="course.organization"></td>
          <td>
            <div v-if="course.status === 'Publish'" class="mx-auto bg-menu-green text-item-green rounded-full w-20 py-0.5 font-semibold">
              <p class="text-center">{{ course.status }}</p>
            </div>
            <div v-if="course.status === 'Draft'" class="mx-auto bg-menu-red text-nav-red rounded-full w-20 py-0.5 font-semibold">
              <p class="text-center">{{ course.status }}</p>
            </div>
          </td>
          <td v-html="course.update"></td>
          <td class="text-center">
            <button>
              <img src="/img/mainicon/setting.png" alt="Setting">
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <img class="h-full my-auto" src="/img/navicon/search.png" alt="Search..">
    <div class="flex gap-5 text-end">
      <div class="my-auto relative">
        <img class="h-full" src="/img/navicon/notification.png" alt="Notification">
        <div class="bg-nav-red w-4 h-4 rounded-full -right-1.5 -top-1.5 absolute">
          <p class="text-xs text-center text-white">{{ notification }}</p>
        </div>
      </div>
      <div class="ml-10">
        <p class="text-nav-black">John Doe</p>
        <p class="text-nav-blue">Admin</p>
      </div>
      <div class="my-auto relative">
        <img class="h-full" src="/img/navicon/person.png" alt="John Doe">
        <div class="bg-mode-active w-2 h-2 rounded-full ring-2 ring-white right-0 bottom-0.5 absolute"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>