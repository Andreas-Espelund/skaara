<template>
    <div
        v-if="images.length > 0"
        class="relative flex items-center justify-center h-screen w-full overflow-hidden"
    >
        <button
            @click="prevSlide"
            class="absolute left-0 text-white/40 text-6xl m-6 z-10 cursor-pointer"
        >
            <span>&#10094;</span>
            <!-- Chevron left -->
        </button>
        <div
            v-for="(image, index) in images"
            :key="index"
            :class="
                index === current
                    ? 'opacity-1 duration-1000 transition-opacity w-full h-full'
                    : 'opacity-0 duration-1000 transition-opacity'
            "
        >
            <img
                v-if="index === current"
                :src="image"
                alt="cabin view"
                class="object-cover w-full h-full"
            />
        </div>
        <button
            @click="nextSlide"
            class="absolute right-0 text-white/40 text-6xl m-6 z-10 cursor-pointer"
        >
            <span>&#10095;</span>
            <!-- Chevron right -->
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Gallery",
    props: {
        images: {
            type: Array<string>,
            default: () => [],
        },
    },
    data() {
        return {
            current: 0,
            timer: undefined as number | undefined,
        };
    },
    methods: {
        nextSlide() {
            this.current =
                this.current === this.images.length - 1 ? 0 : this.current + 1;
        },
        prevSlide() {
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
