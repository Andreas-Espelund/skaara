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
            images: [
                "/images/dag/DSC08803.jpg",
                "/images/dag/DSC08778.jpg",
                "/images/kveld/DSC08663-3.jpg",
                "/images/kveld/DSC08623-2.jpg",
                "/images/kveld/DSC08704-3.jpg",
            ] as string[],
        };
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
