import React from 'react'
import "./Contact_Form.css"

const Contact_Form = () => {
  return (
    <div>
        <div className='contact-form-container'>
            <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
            <br />
            <div className="formbold-builder-form themeOne">
                <form
                encType="multipart/form-data"
                action="https://formbold.com/s/oeAJB"
                method="POST"
                className="mx-auto w-full max-w-[570px] rounded-[10px] border border-stroke bg-white p-10 themeOne"
                >
                <div className="SortableItem fb-builder-item">
                    <div className="mb-4">
                    <label className="mb-2.5 block text-base text-black">
                        <span>Name</span>
                        <span className="label-required pl-1 text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                        name="text_input_8DDDBDC0-D7BB-4BFC-A585-6188E77C76B6"
                        placeholder="Enter your name"
                        defaultValue=""
                        required=""
                    />
                    </div>
                </div>
                <div className="SortableItem fb-builder-item">
                    <div className="mb-4">
                    <label className="mb-2.5 block text-base text-black">
                        <span>E-Mail</span>
                        <span className="label-required pl-1 text-red-400">*</span>
                    </label>
                    <input
                        type="email"
                        className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                        name="email_input_919621F2-7866-4ABC-BDAB-BE37D2A1D33D"
                        placeholder="Enter email address"
                        defaultValue=""
                        required=""
                    />
                    </div>
                </div>
                <div className="SortableItem fb-builder-item">
                    <div className="mb-4">
                    <label className="mb-2.5 block text-base text-black">
                        <span>Phone Number</span>
                        <span className="label-required pl-1 text-red-400">*</span>
                    </label>
                    <input
                        type="tel"
                        className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                        name="phone_input_85CB9B91-71A4-45C2-AFB2-B3D4650DC1DA"
                        placeholder="Enter your phone number"
                        defaultValue=""
                        required=""
                    />
                    </div>
                </div>
                <div className="btn-toolbar flex items-center space-x-3">
                    <input
                    type="submit"
                    className="inline-flex cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
                    defaultValue="Submit"
                    />
                </div>
                </form>
                <p className="mt-8 flex items-center justify-center">
                Powered by
                <span className="pl-2">
                    <a href="https://formbold.com" rel="nofollow noopener" target="_blank">
                    <img
                        src="https://cdn.formbold.com/formbold-logo.svg"
                        alt="Formbold Logo"
                        style={{ maxWidth: 100 }}
                    />
                    </a>
                </span>
                </p>
            </div>
            </div>
    </div>
  )
}

export default Contact_Form
