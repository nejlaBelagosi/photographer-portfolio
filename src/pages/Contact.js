import React from "react";
// import images
import WomanImg from "../img/photographer.jpg";

const Contact = () => {
return <section className="section bg-white-200">
    <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start
        pt-36 gap-x-8 text-center lg:text-left">
            {/* bg */}
            <div className="hidden lg:flex bg-[#eef79] absolute
            bottom-0 left-0 right-0 top-72  -z-10">

            </div>

            {/* text&form */}
            <div className="lg:flex-1 lg:pt-25 px-4">
                <h1 className="h1">Contact me</h1>
                <p className="mb-12">I would love to get in touch with you.</p>
                <form className="flex flex-col gap-y-4" action="https://formsubmit.co/belagosinejla@hotmail.com" method="post">
                    <div className="flex gap-x-10">
                        <input className="outline-none border-b border-b-primary
                        h-[60px] bg-transparent font-secondary w-full pl-3 
                        placeholder:text-[#757879]" type="text" placeholder="Your name"/>
                    
                        <input className="outline-none border-b border-b-primary
                        h-[60px] bg-transparent font-secondary w-full pl-3 
                        placeholder:text-[#757879]" type="text" placeholder="Your surname"/>
                    </div>
                    <div className="flex gap-x-10">
                        <input className="outline-none border-b border-b-primary
                        h-[60px] bg-transparent font-secondary w-full pl-3 
                        placeholder:text-[#757879]" type="email" placeholder="Your email"/>
                 
                        <input className="outline-none border-b border-b-primary
                        h-[60px] bg-transparent font-secondary w-full pl-3 
                        placeholder:text-[#757879]" type="text" placeholder="Your message"/>

                    </div>
                    <button className="btn mb-[30px] mx-auto 
                    lg:mx-0 self-start">Send it</button>
                </form>
            </div>

            {/* image */}
            <div className='flex-1'>
                <img src={WomanImg} alt=''/>
            </div>
        </div>
    </div>
</section>
};

export default Contact;