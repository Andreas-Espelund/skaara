<script setup lang="ts">
import { RouterView } from "vue-router";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
    <main class="flex flex-col min-h-screen justify-between">
        <RouterView />
        <AppFooter />
    </main>
</template>

<style scoped></style>
