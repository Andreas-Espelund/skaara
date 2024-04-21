<template>
    <div class="p-4 md:p-10 flex flex-col gap-10 max-w-screen-2xl mx-auto">
        <RouterLink to="/">
            <div class="bg-primary w-fit p-4 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
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
export default {
    name: "BookingPage",
    components: { Card },
    data() {
        return {
            cabins: [
                {
                    id: 0,
                    href: "https://www.airbnb.no/rooms/918645205013496461",
                    img: "images/lotsberg.webp",
                    name: "Lotsbergskaara",
                },
                {
                    id: 1,
                    href: "https://www.airbnb.no/rooms/934184710629468152",
                    img: "/images/hjelle.webp",
                    name: "Hjellaakeren",
                },
            ] as Cabin[],
        };
    },
};
</script>
