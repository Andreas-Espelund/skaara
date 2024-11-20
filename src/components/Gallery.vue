<template>
    <div
        v-if="images.length > 0"
        class="relative flex items-center justify-center h-screen w-full overflow-hidden"
    >
        <button
            @click="prevSlide"
            class="absolute left-0 text-white/40 text-6xl m-6 z-10 cursor-pointer"
        >
            <ChevronLeftIcon class="w-16 h-16 stroke-5" />
        </button>

        <!-- Render all images and control visibility through class bindings -->
        <div
            v-for="(image, index) in images"
            :key="index"
            class="absolute w-full h-full transition-opacity duration-1000"
            :class="{
                'opacity-0': index !== current && index !== nextIndex,
                'opacity-100': index === current || index === nextIndex,
            }"
        >
            <img
                :src="image"
                alt="Image view"
                class="object-cover w-full h-full"
            />
        </div>

        <button
            @click="nextSlide"
            class="absolute right-0 text-white/40 text-6xl m-6 z-10 cursor-pointer"
        >
            <ChevronRightIcon class="w-16 h-16 stroke-5" />
        </button>

        <Socials/>
    </div>
</template>

<script lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
import images from "@/data/imagePaths.json";
import Socials from "@/components/Socials.vue";

export default {
    name: "Gallery",
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
        Socials
    },
    data() {
        return {
            current: 0,
            nextIndex: 1, // Track the next image index for transitions
            timer: undefined as number | undefined,
            images: images as string[],
        };
    },
    methods: {
        nextSlide() {
            this.current = this.nextIndex;
            this.nextIndex =
                this.current === this.images.length - 1 ? 0 : this.current + 1;
        },
        prevSlide() {
            this.nextIndex = this.current;
            this.current =
                this.current === 0 ? this.images.length - 1 : this.current - 1;
        },
        startTimer() {
            this.timer = setInterval(this.nextSlide, 5000);
        },
        stopTimer() {
            if (this.timer !== undefined) {
                clearInterval(this.timer);
            }
        },
        restartTimer() {
            this.stopTimer();
            this.startTimer();
        },
    },
    mounted() {
        this.startTimer();
    },
    beforeUnmount() {
        this.stopTimer();
    },
    watch: {
        current() {
            this.restartTimer();
        },
    },
};
</script>

<style scoped></style>
