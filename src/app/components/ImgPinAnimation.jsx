"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImgPinAnimation = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".scroll-container",
            start: "top top",
            end: "bottom bottom",
            pin: ".image-container",
            pinSpacing: false
        });

        ScrollTrigger.create({
            trigger: ".content-section-0",
            start: "top center",
            end: "bottom center",
            onEnter: () => setCurrentImage(0),
            onEnterBack: () => setCurrentImage(0)
        });

        ScrollTrigger.create({
            trigger: ".content-section-1",
            start: "top center",
            end: "bottom center",
            onEnter: () => setCurrentImage(1),
            onEnterBack: () => setCurrentImage(1)
        });

        ScrollTrigger.create({
            trigger: ".content-section-2",
            start: "top center",
            end: "bottom center",
            onEnter: () => setCurrentImage(2),
            onEnterBack: () => setCurrentImage(2)
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <div className="scroll-container px-5 max-sm:py-10 max-md:py-15 max-lg:py-20">
                <div className="max-w-[1140px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 items-start">
                        <div className="content-wrapper">
                            <div className="content-section-0 lg:min-h-screen flex flex-col max-lg:gap-6 justify-center">
                                <div className="max-w-[750px] lg:max-w-[561px] w-full max-lg:mx-auto">
                                    <h2 className='text-center lg:text-start max-lg:mx-auto text-3xl md:text-4xl lg:text-[40px] xl:text-5xl text-[#1D213B] font-bold leading-9 lg:leading-[57.6px]'>
                                        Increase Your <span className='text-[#6A9E68]'>Revenue</span>
                                    </h2>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[23px] lg:leading-[37.76px]'>
                                        Earn <span className='text-[#6A9E68]'>Higher </span>Rates
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        TACH Certified Members command premium rates from brokers due to their proven reliability.
                                    </p>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[37.76px]'>
                                        <span className='text-[#6A9E68]'>Maximize</span> Road Time
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        Automated maintenance tracking prevents costly breakdowns
                                    </p>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px] pt-3">
                                        Proactive service reminders keep your fleet DOT compliant
                                    </p>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px] pt-3">
                                        Access to nationwide rental fleet keeps you moving during repairs
                                    </p>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px] pt-3">
                                        Decrease your cost-per-mile through tire and repair optimizations
                                    </p>
                                    <div className="flex max-lg:justify-center mt-5 lg:mt-6">
                                        <button className='border max-w-[235px] outline-0 w-full px-5 py-[9px] md:py-[13px] rounded-[45px] cursor-pointer text-[#1D213B] border-[#1D213B] font-semibold hover:bg-[#6A9E68] hover:border-[#6A9E68] hover:text-white transition-all duration-300 ease-linear'>
                                            Explore More
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:hidden mx-auto w-full max-w-[555px]">
                                    <Image className="object-top h-[260px] min-[475px]:h-[380px] sm:h-[450px] lg:h-[555px] max-w-[555px] w-full object-cover" height={555} width={555} src="/assests/images/webp/img-1.webp" alt='Revenue Image' />
                                </div>
                            </div>

                            <div className="content-section-1 lg:min-h-screen flex flex-col max-lg:gap-6 justify-center max-lg:mt-15">
                                <div className="max-w-[750px] lg:max-w-[561px] w-full max-lg:mx-auto">
                                    <h2 className='text-center lg:text-start max-lg:mx-auto text-3xl md:text-4xl lg:text-[40px] xl:text-5xl text-[#1D213B] font-bold leading-9 lg:leading-[57.6px]'>
                                        Reduce Your <span className='text-[#6A9E68]'>Expenses</span>
                                    </h2>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[23px] lg:leading-[37.76px]'>
                                        <span className='text-[#6A9E68]'>Low Fee, </span>Emergency Cash When You Need It
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        Get quick access to cash solutions when unexpected expenses arise, keeping your business moving without interruption.
                                    </p>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[37.76px]'>
                                        <span className='text-[#6A9E68]'>Streamlined</span> Maintenance
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        Discounted maintenance costs with access to a trusted network of service providers, keeping your trucks in top shape without breaking the bank.
                                    </p>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[37.76px]'>
                                        <span className='text-[#6A9E68]'>Exclusive</span> Savings
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        Save on truck rentals, tires, and repairs through TACH's partner network.
                                    </p>
                                </div>
                                <div className="lg:hidden mx-auto w-full max-w-[555px]">
                                    <Image className="object-top h-[260px] min-[475px]:h-[380px] sm:h-[450px] lg:h-[555px] max-w-[555px] w-full object-cover" height={555} width={555} src="/assests/images/webp/img-2.webp" alt='Revenue Image' />
                                </div>
                            </div>

                            <div className="content-section-2 lg:min-h-screen flex flex-col max-lg:gap-6 justify-center max-lg:mt-15">
                                <div className="max-w-[750px] lg:max-w-[561px] w-full max-lg:mx-auto">
                                    <h2 className='text-center lg:text-start max-lg:mx-auto text-3xl md:text-4xl lg:text-[40px] xl:text-5xl text-[#1D213B] font-bold leading-9 lg:leading-[57.6px]'>
                                        Boost Your <span className='text-[#6A9E68]'>Business</span>
                                    </h2>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[23px] lg:leading-[37.76px]'>
                                        <span className='text-[#6A9E68]'>Strategic </span>Partnerships
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        Leverage relationships with trusted providers for reliable rentals, quality service, and timely repairs to minimize delays and downtime.
                                    </p>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[37.76px]'>
                                        Stay on the <span className='text-[#6A9E68]'>Road Longer</span>
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        Avoid unnecessary downtime with fast, reliable support always at your fingertips.
                                    </p>
                                    <h3 className='text-center lg:text-start max-lg:mx-auto text-xl sm:text-2xl lg:text-[32px] text-[#1D213B] pt-5 lg:pt-6 pb-3 lg:pb-4 font-bold leading-[37.76px]'>
                                        <span className='text-[#6A9E68]'>Financial</span> Peace of Mind
                                    </h3>
                                    <p className="text-center lg:text-start max-lg:mx-auto leading-[22.1px] text-base md:text-lg lg:text-[17px] text-[#424242] opacity-80 max-w-[800px] lg:max-w-[400px]">
                                        With TACH's streamlined cash management tools, you can maintain financial stability while keeping your trucks moving.
                                    </p>
                                </div>
                                <div className="lg:hidden mx-auto w-full max-w-[555px]">
                                    <Image className="object-top h-[260px] min-[475px]:h-[380px] sm:h-[450px] lg:h-[555px] max-w-[555px] w-full object-cover" height={555} width={555} src="/assests/images/webp/img-3.webp" alt='Revenue Image' />
                                </div>
                            </div>
                        </div>
                        <div className="max-lg:hidden image-container max-w-[555px] w-full h-screen flex items-center justify-center">
                            <div className="relative w-full h-[555px]">
                                <Image className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${currentImage === 0 ? 'opacity-100' : 'opacity-0'}`}
                                    height={555} width={555} src="/assests/images/webp/img-1.webp" alt='Revenue Image'
                                />
                                <Image className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${currentImage === 1 ? 'opacity-100' : 'opacity-0'}`}
                                    height={555} width={555} src="/assests/images/webp/img-2.webp" alt='Expenses Image'
                                />
                                <Image className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${currentImage === 2 ? 'opacity-100' : 'opacity-0'}`}
                                    height={555} width={555} src="/assests/images/webp/img-3.webp" alt='Business Image'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgPinAnimation