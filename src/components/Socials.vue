<template>
  <div>
    <a v-for="so in socials" :href="so.url" target="_blank" :key="so.alt">
      <img :src="so.icon" :alt="so.alt">
    </a>
  </div>
</template>

<script lang="ts">
import socials from '@/data/socials.json'
import type {Social} from "@/types"

export default {
  name: "Socials",
  data() {
    return {
      socials: socials as Social[]
    };
  }
};
</script>

<style scoped>

  div {
    @apply z-50 absolute bottom-0 grid grid-cols-3 gap-12 p-8
  }
  a {
    @apply w-10 h-10;
  }

</style>