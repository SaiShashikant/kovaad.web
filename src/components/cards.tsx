'use client';
import Image from "next/image";
import {gridItems} from "@/app/lib/AppConstants";


export const Cards = () => {
    return (
        <div>
            {gridItems.map((item) => (
                <div key={item.id}>
                    {(item.id === 1 || item.id === 3) && (
                        <div className="mx-auto h-screen md:flex items-center w-[90%] rounded-xl border-2 border-white m-2 bg-white relative overflow-hidden">
                            <div className="absolute inset-0 w-full h-full z-0">
                                <Image
                                    src={item.img}
                                    alt={item.spareImg}
                                    layout="fill"
                                    objectFit="cover"
                                    className="opacity-70"
                                />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>

                            <div className="relative z-10">
                                {item.heading && (
                                    <div className="w-full mx-auto text-3xl font-bold p-5 text-yellow-500">{item.heading}</div>
                                )}
                                <div className="w-full mx-auto text-6xl font-bold p-5 text-white">
                                    {item.title}
                                </div>
                                <div className="w-full mx-auto p-5 text-white text-xl font-light">
                                    {item.description.map((descItem, index) => (
                                        <div key={index}>
                                            {typeof descItem === 'object' ? (
                                                <>
                                                    <div className="font-semibold">{descItem.sno}</div>
                                                    <div>{descItem.desc}</div>
                                                </>
                                            ) : (
                                                <div>{descItem}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    if (item.buttonLink) {
                                        window.location.href = item.buttonLink;
                                    }
                                }}
                                className={`${item.buttonLink ? "absolute bottom-16 left-16" : "hidden"} w-20 h-20 hover:bg-blue-700 text-yellow-500 border border-yellow-500 font-bold rounded-full flex items-center justify-center shadow-lg`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 animate-bounce"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 5v14m0 0l-7-7m7 7l7-7"
                                    />
                                </svg>
                            </button>
                        </div>

                    )}
                    {item.id !== 1 && item.id !== 3 && item.id !== 9 && (
                        <div className=" relative mx-auto h-screen md:flex justify-evenly items-center w-[90%] rounded-xl border-2 border-white m-5 p-5 bg-white" id="home">
                            <div className="w-1/2 p-5">
                                {item.sno && (
                                    <div className="flex items-center mb-10">

                                        <div className={`text-xl text-blue-500 font-bold`}>
                                            {item.sno}
                                        </div>
                                    </div>
                                )}
                                <div className="text-3xl font-bold my-10">{item.title}</div>

                                {item.id === 2 && item.subtitle && (
                                    <div className="flex items-center mb-5">
                                        <div className="w-1/4 h-[2px] bg-black mr-3"></div>

                                        <div className={`text-3xl mb-10`}>
                                            {item.subtitle}
                                        </div>
                                    </div>
                                )}

                                <div>{item.description?.map((item, index: number) => (
                                    <div key={index} className="my-5">
                                        {typeof item === 'object' ? (
                                            <>
                                                <div className="font-semibold text-blue-500 ">{item.sno}</div>
                                                <div>{item.desc}</div>
                                            </>
                                        ) : (
                                            <div>{item}</div>
                                        )}
                                    </div>
                                ))}</div>
                            </div>

                            <div className="w-1/2 h-full p-5">
                                <div className="w-full h-full relative rounded-xl overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.spareImg}
                                        width={1000}
                                        height={1000}
                                        className={`${item.imgClassName} rounded-xl `}
                                    />
                                </div>
                            </div>
                            {item.buttonLink && (
                                <button
                                    onClick={() => {
                                        if (item.buttonLink) {
                                            window.location.href = item.buttonLink;
                                        }
                                    }}
                                    className={`${item.buttonLink ? "absolute bottom-12 left-12" : "hidden"} w-32 h-32 hover:bg-blue-700 text-black border border-black font-bold rounded-full flex items-center justify-center shadow-lg`}
                                >
                                    {item.buttonName}
                                </button>
                            )}

                        </div>
                    )}
                    {item.id === 9 && (
                        <div className=" relative mx-auto h-screen md:flex justify-evenly items-center w-[90%] rounded-xl border-2 border-white m-5 p-5 bg-white" id="home">
                            <div className="w-full p-5">
                                <div className="text-6xl font-bold my-10">{item.title}</div>
                                <div>{item.description?.map((item, index: number) => (
                                    <div key={index} className="my-5">
                                        <div className="w-full h-[1px] bg-black my-3"></div>
                                        {typeof item === 'object' ? (
                                            <div className="flex  my-16">
                                                <div className="font-bold text-3xl ml-20 text-blue-500">{item.sno}</div>
                                                <div className="text-4xl font-light ml-20">{item.desc}</div>
                                            </div>
                                        ) : (
                                            <div>{item}</div>
                                        )}
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            ))
            }

        </div>
    )
}