<template>
    <div>
        <div class="absolute top-0 left-0 z-50 w-full">
            <AppHeader />
        </div>

        <Gallery :images="images" />

        <section id="contact" class="sectionWrapper">
            <h1 class="stickyHeader">Contact</h1>
            <ContactForm />
        </section>

        <section id="location" class="sectionWrapper">
            <h1 class="stickyHeader">Location</h1>
            <Map />
        </section>

        <button
            @click="scrollToTop"
            class="fixed bottom-0 right-0 z-50 p-4 m-4 bg-primary transition-all duration-300 ease-in-out rounded-full shadow-xl"
            :class="{
                'opacity-100': buttonVisible,
                'opacity-0': !buttonVisible,
            }"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import AppHeader from "@/components/AppHeader.vue";
import Gallery from "@/components/Gallery.vue";
import ContactForm from "@/components/ContactForm.vue";
import Map from "@/components/Map.vue";
export default {
    components: { Card, AppHeader, Gallery, ContactForm, Map },
    name: "HomePage",
    data() {
        return {
            buttonVisible: false,
            images: [
                "/images/dag/DSC08803.jpg",
                "/images/dag/DSC08778.jpg",
                "/images/kveld/DSC08663-3.jpg",
                "/images/kveld/DSC08623-2.jpg",
                "/images/kveld/DSC08704-3.jpg",
            ] as string[],
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        handleScroll() {
            this.buttonVisible = window.scrollY > 200;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style scoped>
.stickyHeader {
    @apply text-3xl text-white z-40 lg:text-4xl py-2 lg:py-10  sticky top-0 bg-gradient-to-b from-zinc-900 to-transparent;
    font-family: "Playfair Display", serif;
}

.sectionWrapper {
    @apply flex flex-col p-4 md:p-20 max-w-screen-2xl mx-auto;
}
</style>
