<template>
    <header
        class="p-4 md:p-8 flex justify-between items-center text-white bg-gradient-to-b from-zinc-900/70 to-transparent"
    >
        <a href="" class="playfair text-xl md:text-3xl tracking-wide"
            >SKAARA LIVING</a
        >
        <div class="hidden md:flex gap-8 items-center playfair text-2xl">
            <a href="#contact">Contact</a>
            <a href="#location">Location</a>
            <a
                href="https://shop.skaaraliving.com/"
                target="_blank"
                rel="noreferrer"
            >
                Giftcard
            </a>
            <RouterLink
                to="/booking"
                class="bg-primary text-lg text-black py-3 px-8 rounded-full font-medium font-sans"
                >Book now</RouterLink
            >
        </div>

        <RouterLink
            to="/booking"
            class="md:hidden bg-primary text-black py-2 px-6 rounded-full font-medium font-sans"
            >Book now</RouterLink
        >
    </header>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
    name: "AppHeader",
};
</script>
