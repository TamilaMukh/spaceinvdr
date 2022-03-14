<template>
  <div class="home">
    <spaceship />
  </div>
</template>

<script>
// @ is an alias to /src
import spaceship from '@/components/spaceship.vue'

export default {
  name: 'Home',
  components: {
    spaceship
  }
}
</script>
