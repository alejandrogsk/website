import React, { useEffect } from "react";
import { Form, useActionData } from "@remix-run/react";
const ContactSections = () => {
    const data = useActionData();

    return (
        <div id="contact" className="grid grid-cols-1 items-center justify-center py-20 md:py-32 lg:py-40 ">
            <h2 className='font-anton text-center uppercase text-[1.8rem] lg:text-[2.5rem] big:text-[3.125rem] big:leading-[3.75rem]'>I want to hear about your project</h2>

            <Form method="post" className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
                <div className="flex flex-col">
                    <input
                    className="outline-none bg-black text-white px-1 py-2 border-b-[1px] text-xl"
                        type="text"
                        name="clientName"
                        placeholder="Name (required)"
                    />
                    {data?.fieldErrors?.clientName && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientName}
                        </span>
                    )}
                </div>

                <div className="flex flex-col">
                    <input
                    className="outline-none bg-black text-white px-1 py-2 border-b-[1px] text-xl"
                        type="text"
                        name="clientLastName"
                        placeholder="Surename (required)"
                    />
                    {data?.fieldErrors?.clientLastName && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientLastName}
                        </span>
                    )}
                </div>

                <div className="flex flex-col">
                    <input
                    className="outline-none bg-black text-white px-1 py-2 border-b-[1px] text-xl"
                        type="email"
                        name="clientEmail"
                        placeholder="Email (required)"
                    />
                    {data?.fieldErrors?.clientEmail && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientEmail}
                        </span>
                    )}
                </div>
                <div className="flex flex-col">
                    <input
                    className="outline-none bg-black text-white px-1 py-2 border-b-[1px] text-xl"
                        type="text"
                        name="clientCompany"
                        placeholder="Company Website (required)"
                    />
                    {data?.fieldErrors?.clientCompany && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientCompany}
                        </span>
                    )}
                </div>

                {data?.message && (
                    <span className="text-blue-400">{data.message}</span>
                )}
                <button type="submit"
                className="border-[1px] border-white py-2 px-6 rounded-[20px] hover:bg-white hover:text-black inline-flex justify-center align-center md:mr-auto
                transition-all
                "
                >Submit</button>
            </Form>
        </div>
    );
};

export default ContactSections;
