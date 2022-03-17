<template>
  <div class="home">
    <Main-Home/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHome from '@/components/MainHome.vue'

export default {
  name: 'Home',
  components: {
    MainHome
  }
}
</script>
