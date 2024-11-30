import {useEffect} from "react";
import {router} from "next/client";
import {AppConstants} from "@/app/lib/AppConstants";


interface SettingPopupProps {
    setIsSettingsDisplayed: (value: boolean) => void;
    isSettingsDisplayed: boolean;
}

const SettingsPopup: React.FC<SettingPopupProps> = ({setIsSettingsDisplayed, isSettingsDisplayed}) => {

    useEffect(() => {

    }, []);


    return (
        <>
            {isSettingsDisplayed && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 overflow-auto">
                    <div className="bg-white sticky rounded-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 my-8 max-h-full overflow-y-auto">
                        <div className="border-b border-gray-300 rounded-t-lg top-0 bg-white z-10">
                            <button
                                onClick={() => setIsSettingsDisplayed(false)}
                                className="absolute top-3 right-3 text-gray-500 font-extrabold hover:text-kovaad-font-gray"
                            >
                                &times;
                            </button>
                            <h2 className="title-font font m-4 ml-5">Settings</h2>
                        </div>
                        <div className="w-full border-t mt-5 mb-3 border-gray-200"></div>
                        <div
                            className="my-2 p-2 w-[80%] mx-auto rounded-xl bg-white border border-kovaad-gray font-bold text-kovaad-blue text-center cursor-pointer"
                            onClick={() => {
                                router.push(AppConstants.Links.Billing).then(r => {
                                    console.log(AppConstants.Links.Billing)
                                })
                            }}
                        >
                            Billing
                        </div>
                        <div
                            className="my-2 p-2 w-[80%] mx-auto rounded-xl bg-white border border-kovaad-gray font-bold text-kovaad-blue  text-center cursor-pointer"
                            onClick={() => {
                                router.push(AppConstants.Links.Subscription).then(r => {
                                    console.log(AppConstants.Links.Subscription)
                                })
                            }}
                        >
                            Subscription
                        </div>
                        <div
                            className="my-2 p-2 w-[80%] mx-auto rounded-xl bg-white border border-kovaad-gray font-bold text-kovaad-blue  text-center cursor-pointer"
                            onClick={() => {
                                router.push(AppConstants.Links.Support).then(r => {
                                    console.log(AppConstants.Links.Support)
                                })
                            }}
                        >
                            Support
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SettingsPopup;