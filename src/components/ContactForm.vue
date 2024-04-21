<template>
    <form
        ref="form"
        className="grid gap-4 lg:gap-6 text-xl text-white relative grid-cols-2"
        @submit.prevent="handleSubmit"
    >
        <label class="label" for="firstname">
            First name
            <input
                class="input"
                type="text"
                id="firstname"
                v-model="form.firstname"
                required
            />
        </label>

        <label class="label" for="lastname">
            Last name

            <input
                class="input"
                type="text"
                id="lastname"
                v-model="form.lastname"
                required
            />
        </label>

        <label class="label" for="email">
            Email

            <input
                class="input"
                type="email"
                id="email"
                v-model="form.email"
                required
            />
        </label>

        <label class="label" for="phone"
            >Phone
            <input
                class="input"
                type="phone"
                id="phone"
                v-model="form.phone"
                required
            />
        </label>

        <label class="col-span-2 grid grid-flow-row gap-2">
            Message
            <textarea
                class="input resize-none p-4 outline-none"
                rows="5"
                id="message"
                v-model="form.message"
                required
            />
        </label>
        <button
            class="col-span-2 text-center text-black w-full outline-none active:scale-[98%] transition-all rounded-full font-semibold p-4 bg-primary"
            type="submit"
        >
            Send
        </button>
        <p :class="{ hidden: !loading }">Please wait ...</p>

        <div class="col-span-2 text-center text-sm">
            <p>Or contact directly at:</p>
            <a class="text-primary" href="mailto:post@skaaraliving.com"
                >post@skaaraliving.com</a
            >
        </div>
    </form>
</template>

<script lang="ts">
import emailjs from "@emailjs/browser";

export default {
    name: "Contact",
    data() {
        return {
            form: {
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                message: "",
            },
            loading: false,
        };
    },
    methods: {
        handleSubmit() {
            const formElement = this.$refs.form as HTMLFormElement;

            emailjs
                .sendForm(
                    import.meta.env.VITE_EJS_SERVICE_ID,
                    import.meta.env.VITE_EJS_TEMPLATE_ID,
                    formElement,
                    import.meta.env.VITE_EJS_PUBLIC_KEY,
                )
                .then(
                    () => {
                        console.log("SUCCESS!");
                        alert("Message sent successfully");
                    },
                    (error) => {
                        console.log("FAILED...", error);
                        alert("Message failed to send");
                    },
                );
        },
    },
};
</script>

<style>
.input {
    @apply p-4 bg-zinc-800 rounded-lg text-white outline-none focus:outline-primary;
}

.label {
    @apply grid gap-2 col-span-2 md:col-span-1;
}
</style>
