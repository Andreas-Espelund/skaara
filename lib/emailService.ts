'use server'
// lib/emailService.ts
import emailjs from '@emailjs/browser';

export const sendEmail = async (formElement: HTMLFormElement): Promise<void> => {
    try {
        await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID as string,
            formElement,
            process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY as string
        );
        console.log('SUCCESS!');
        alert('Message sent successfully');
    } catch (error) {
        console.error('FAILED...', error);
        alert('Message failed to send');
    }
};
