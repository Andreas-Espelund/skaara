<template>
    <div class="p-4 md:p-10 flex flex-col gap-10 max-w-screen-2xl mx-auto">
        <RouterLink to="/">
            <div class="bg-primary w-fit p-4 rounded-full">
                <ChevronLeftIcon class="h-6 w-6 stroke-5" />
            </div>
        </RouterLink>

        <h1 class="text-4xl font-medium text-white playfair">Booking</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div v-for="cabin in cabins" :key="cabin.id">
                <Card :cabin="cabin" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import type { Cabin } from "../types";
import { RouterLink } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import cabins from "@/data/cabins.json";

export default {
    name: "BookingPage",
    components: { Card, ChevronLeftIcon },
    data() {
        return {
            cabins: cabins as Cabin[],
        };
    },
};
</script>
