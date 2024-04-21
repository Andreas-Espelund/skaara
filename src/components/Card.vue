<template>
    <a
        class="text-lg md:text-2xl lg:text-4xl flex text-white hover:text-primary hover:scale-[102%] transition-all duration-300 aspect-square md:aspect-[4/3]"
        :href="cabin.href"
        target="_blank"
        rel="noreferrer"
    >
        <div class="relative w-full h-full">
            <img
                :src="cabin.img"
                :alt="cabin.name"
                class="rounded-xl object-cover w-full h-full"
            />
            <p
                class="rounded-xl text-lg md:text-2xl lg:text-4xl font-bold absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-20"
            >
                {{ cabin.name }}
            </p>
        </div>
    </a>
</template>

<script lang="ts">
import type { Cabin } from "../types";
export default {
    name: "Card",
    props: {
        cabin: {
            type: Object as () => Cabin,
            required: true,
        },
    },
};
</script>
