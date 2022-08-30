<template>
  <div class="container pl-5 pr-6 py-4 font-montserrat h-fit bg-white shadow-lg rounded-md flex justify-between">
    <img class="h-full my-auto" src="/img/navicon/search.png" alt="Search..">
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notification: 4
    }
  }
}
</script>