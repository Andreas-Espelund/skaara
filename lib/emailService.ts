'use server'

import {ContactFormData} from "@/components/ContactForm";
import axios from "axios";

const emailjsClient = axios.create({
    baseURL: 'https://api.emailjs.com/api/v1.0/email'
})


export const sendEmail = async (data: ContactFormData): Promise<void> => {

    const payload = {
        service_id: process.env.NEXT_PUBLIC_EJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY,
        template_params: {
            ...data
        }
    }

    console.log(payload)

    return await emailjsClient.post('/send',payload)
};
