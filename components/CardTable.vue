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
    <div class="flex py-4 px-6 justify-between">
      <div class="flex">
        <p class="my-auto text-nav-blue text-sm">
          Showing 1 to<span class="bg-slate-200 text-nav-black py-1 px-3 mx-1 font-medium rounded-md">
            10
          </span>of 100 entries
        </p>
      </div>
      <div class="flex items-center">
        <button class="rounded-full w-8 h-8 bg-menu-red text-nav-red">
          &lt;
        </button>
        <div class="rounded-full mx-2 px-3 w-fit h-8 bg-menu-red text-nav-red relative">
          <button :class="page === 4 ? 'rounded-full bg-nav-red w-8 h-8 text-white px-2 font-medium' : 'px-2'" v-for="page in 7" :key="page">
            <span class="">{{ page }}</span>
          </button>
        </div>
        <button class="rounded-full w-8 h-8 bg-menu-red text-nav-red font-medium">
          >
        </button>
      </div>
    </div>
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