import React from 'react'

const CardPinAnimation = () => {
    return (
        <>
            <div className="px-4 min-h-screen py-5">
                <div className="max-w-[1140px] mx-auto">
                    <div className="bg-black h-[800px] w-full rounded-[40px] sticky top-20"></div>
                    <div className="bg-red-300 h-[800px] w-full rounded-[40px] sticky top-30"></div>
                    <div className="bg-green-300 h-[800px] w-full rounded-[40px] sticky top-40"></div>
                    <div className="bg-blue-300 h-[800px] w-full rounded-[40px] sticky top-52"></div>
                    <div className="bg-violet-300 h-[800px] w-full rounded-[40px] sticky top-52"></div>
                </div>
            </div>
            <div className="px-4 min-h-screen py-5"></div>
        </>
    )
}

export default CardPinAnimation