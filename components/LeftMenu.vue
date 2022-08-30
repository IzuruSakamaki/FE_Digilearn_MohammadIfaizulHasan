<template>
  <div class="container py-7 font-montserrat bg-white w-96 h-full shadow-lg rounded-md">
    <img class="mx-auto" src="/img/logo.png" alt="DigiLearn">
    <div class=" mx-5">
      <div class="flex justify-between mx-3">
        <div class="flex gap-3 py-7">
          <img src="/img/navicon/dashboard.png" alt="Dashboard_Icon">
          <a class="text-nav-black" href="#">Dashboard</a>
        </div>
        <img  class="h-full my-auto" src="/img/navicon/arrow.png" alt="Go">
      </div>
      <p class="mb-2 text-xs text-nav-blue">CLONE MANAGEMENT</p>
      <ul v-for="i in menu" :key="i">
        <li :class="i === 'Content' ? 'bg-slate-200 flex justify-between px-3 py-2 rounded-lg' : 'flex justify-between mx-3 py-2'">
          <div class="flex gap-3">
            <img :src="`/img/navicon/` + i.toLowerCase() + `.png`" :alt="i + `_Icon`">
            <a :class="i === 'Content' ? 'text-nav-blue' : 'text-nav-black'" href="#">{{ i }}</a>
          </div>
          <img :src="i === 'Content' ? '/img/navicon/arrow-content.png' : '/img/navicon/arrow.png'" alt="Go">
        </li>
        <template v-if="i === 'Content'">
          <ul v-for="j in content" :key="j">
            <li :class="j === 'Course' ? 'bg-nav-red ring-2 ring-offset-0 ring-nav-red/50 flex justify-between pl-5 pr-3 py-2 rounded-lg' : 'flex justify-between mx-5 my-2'">
              <div class="flex gap-3">
                <div :class="j=== 'Course' ? 'my-auto rounded-full border-2 w-4 h-4' : 'my-auto rounded-full border-2 w-4 h-4 border-nav-blue'"></div>
                <a :class="j === 'Course' ? 'text-white' : 'text-nav-blue'" href="#">{{ j }}</a>
              </div>
            </li>
          </ul>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        'Content',
        'Account',
        'Setting',
        'Analytic',
        'Branding',
        'Integrasi',
      ],
      content: [
        'Assignment',
        'Webinar',
        'Video',
        'Podcast',
        'Files',
        'Certificate',
        'Course',
        'Pathways',
        'Voucher',
        'Quiz',
        'Category',
        'Competencies',
      ]
    }
  }
}
</script>