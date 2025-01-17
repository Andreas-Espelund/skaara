'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/emailService';
import Notice from "@/components/Notice";


export interface ContactFormData {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
}
const Contact: React.FC = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<ContactFormData>();
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const clearStates = () => {
        setError(false);
        setLoading(false);
        setSuccess(false);
    }

    const onSubmit = async (data: ContactFormData) => {
        clearStates();
        setLoading(true)

        sendEmail(data)
            .then(() => setSuccess(true))
            .catch((error) => {
                console.log('error', error);
                setError(true)

            })
            .finally(() => setLoading(false))
    };

    return (
        <form
            className="grid gap-4 lg:gap-6 text-xl text-white relative grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
        >
            <label className="label" htmlFor="firstname">
                First name
                <input
                    className="input"
                    type="text"
                    id="firstname"
                    {...register('firstname', {required: true})}
                />
            </label>

            <label className="label" htmlFor="lastname">
                Last name
                <input
                    className="input"
                    type="text"
                    id="lastname"
                    {...register('lastname', {required: true})}
                />
            </label>

            <label className="label" htmlFor="email">
                Email
                <input
                    className="input"
                    type="email"
                    id="email"
                    {...register('email', {required: true})}
                />
            </label>

            <label className="label" htmlFor="phone">
                Phone
                <input
                    className="input"
                    type="text"
                    id="phone"
                    {...register('phone', {required: true})}
                />
            </label>

            <label className="col-span-2 grid grid-flow-row gap-2">
                Message
                <textarea
                    className="input resize-none p-4 outline-none"
                    rows={5}
                    id="message"
                    {...register('message', {required: true})}
                />
            </label>
            <button
                className="col-span-2 text-center text-black w-full outline-none active:scale-[98%] transition-all rounded-full font-semibold p-4 bg-primary"
                type="submit"
                disabled={isSubmitting}
            >
                {loading ? 'please wait...' : 'Send'}
            </button>
            {success &&
                <Notice title={"Sent!"} message={"We will get back to you shortly"} variant={"success"}
                        onClose={clearStates}/>
            }
            {error &&
                <Notice title={"Error!"} message={"Unable to send message, send us an email or try again later"}
                        variant={"danger"} onClose={clearStates}/>
            }

            <div className="col-span-2 text-center text-sm">
                <p>Or contact directly at:</p>
                <a className="text-primary" href="mailto:post@skaaraliving.com">
                    post@skaaraliving.com
                </a>
            </div>
        </form>
    );
};

export default Contact;
