'use client';
import Image from "next/legacy/image";
import {gridItems} from "@/app/lib/AppConstants";


export const Cards = () => {
    return (
        <div>
            {gridItems.map((item) => (
                    <div key={item.id}>
                        {(item.id === 1 || item.id === 3) && (
                            <div className="mx-auto shadow-md min-h-screen md:flex block items-center md:w-[95%] w-full rounded-xl border-2 border-white m-2 bg-white relative overflow-hidden">
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
                                        {item.title.map((title, index) => (
                                            <span key={index}>
                                            {title.plain}
                                                {title.highlighted && (
                                                    <span className="text-kovaad-blue">{title.highlighted}</span>
                                                )}
                                        </span>
                                        ))}
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
                            <div className=" relative  shadow-md mx-auto min-h-screen md:w-[95%] w-full rounded-xl border-2 border-white m-5 p-5 bg-white" id="home">
                                <div className="md:flex block justify-evenly items-center">
                                    <div className="md:w-1/2 w-full p-5">
                                        {item.sno && (
                                            <div className="flex items-center">

                                                <div className={`text-xl text-kovaad-blue font-bold`}>
                                                    {item.sno}
                                                </div>
                                            </div>
                                        )}
                                        <div className="text-3xl font-bold my-10">
                                            {item.title.map((title, index) => (
                                                <span key={index}>
                                                    {title.plain}
                                                    {title.highlighted && (
                                                        <span className="text-kovaad-blue">{title.highlighted}</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>

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

                                    <div className="md:w-1/2 w-full h-full p-5  md:mb-20">
                                        <div className="w-full h-full relative rounded-xl overflow-hidden justify-center flex">
                                            <Image
                                                src={item.img}
                                                alt={item.spareImg}
                                                width={500}
                                                height={500}
                                                className={`${item.imgClassName} rounded-2xl`}
                                            />
                                        </div>
                                    </div>

                                </div>
                                {item.buttonLink && (
                                    <button
                                        onClick={() => {
                                            if (item.buttonLink) {
                                                window.location.href = item.buttonLink;
                                            }
                                        }}
                                        className={`${item.buttonLink ? "block" : "hidden"} md:w-28 md:h-28 p-5 w-20 h-20 hover:bg-blue-700 text-black border  border-black font-bold rounded-full flex items-center justify-center shadow-lg`}
                                    >
                                        {item.buttonName}
                                    </button>
                                )}
                            </div>
                        )}
                        {item.id === 9 && (
                            <div className=" relative mx-auto  shadow-md min-h-screen md:flex block justify-evenly items-center md:w-[95%] w-full rounded-xl border-2 border-white m-5 p-5 bg-white" id="home">
                                <div className="w-full p-5">
                                    <div className="md:text-6xl text-4xl                                     font-bold md:my-10 my-5">
                                        {item.title.map((title, index) => (
                                            <span key={index}>
                                            {title.plain}
                                                {title.highlighted && (
                                                    <span className="text-kovaad-blue">{title.highlighted}</span>
                                                )}
                                        </span>
                                        ))}
                                    </div>
                                    <div>{item.description?.map((item, index: number) => (
                                        <div key={index} className="my-5">
                                            <div className="w-full h-[1px] bg-black my-3"></div>
                                            {typeof item === 'object' ? (
                                                <div className="flex my-10 md:my-16">
                                                    <div className="font-bold md:text-3xl text-2xl items-center md:ml-20 ml-10 text-kovaad-blue">{item.sno}</div>
                                                    <div className="md:text-4xl text-2xl font-light items-center md:ml-20 ml-10">{item.desc}</div>
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

                )
            )
            }

        </div>
    )
}