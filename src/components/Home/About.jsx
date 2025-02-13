import React from "react";

const AboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 bg-gray-50">
            {/* Left side: Images */}
            <div className="relative w-full lg:w-1/2">
                <img
                    src="https://www.canadaqbank.com/blog/storage/2019/08/medical-students-studying.jpg"
                    alt="Main"
                    className="rounded-2xl shadow-lg w-full"
                />
                <img
                    src="https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student_255667-21448.jpg"
                    alt="Small"
                    className="hidden lg:block absolute lg:-bottom-20 lg:-right-14 lg:w-96 rounded-xl shadow-md border-8 border-white"
                />
            </div>

            {/* Right side: Text */}
            <div className="w-full lg:w-1/2 lg:px-8">
                <div className="flex flex-col md:flex-row items-center w-full -mt-6">
                    <h1 className="text-lg font-bold mt-4 md:mt-0 text-[#f2312d]">ABOUT US</h1>
                    {/* Broken border line */}
                    <div className="flex items-center lg:ml-4">
                        <div className="w-10 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" />
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                    </div>
                </div>
                <h2 className="text-3xl text-center lg:text-left font-roboto font-bold text-gray-800 mt-2">
                    Welcome to RREC
                </h2>
                <p className="mt-4 font-roboto text-justify text-gray-600 leading-relaxed">
                    Moscow is the capital of Russia. Within the Republic there are around 1,000 towns, of these, including Moscow, nine cities have a population of over a million (St.Petersburg, Volgograd, Rostov on Don, Nizhny Novgorod, Kazan, Ufa, Novosibirsk, Sverdlovsk, Chelyabinsk, and Omsk).
                </p>
                <p className="mt-4 font-roboto text-justify text-gray-600 leading-relaxed">
                    Rus­sia, also offi­cially known as the Russ­ian Fed­er­a­tion, is a coun­try in north­ern Eura­sia. It is a fed­eral semi-presidential repub­lic, com­pris­ing 83 fed­eral sub­jects. From north­west to south­east, Rus­sia shares land bor­ders with Nor­way, Fin­land, Esto­nia, Latvia, Lithua­nia and Poland (both with Kalin­ingrad Oblast), Belarus, Ukraine, Geor­gia, Azer­bai­jan, Kaza­khstan, China, Mon­go­lia, and North Korea. It shares mar­itime bor­ders with Japan by the Sea of Okhotsk and the U.S. state of Alaska across the Bering Strait.
                </p>
                <div className="max-w-sm bg-white mt-4 shadow-lg rounded-lg overflow-hidden flex flex-row">
                    {/* Left side: Image */}
                    <div className="w-full sm:w-1/3 h-auto">
                        <img
                            className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg"
                            src="https://static.theprint.in/wp-content/uploads/2022/09/ANI-20220925131355.jpg"
                            alt="Placeholder"
                        />
                    </div>

                    {/* Right side: Text */}
                    <div className="flex flex-col justify-center px-4 py-2 w-full sm:w-2/3">
                        <h3 className="text-xl font-roboto font-semibold text-gray-800">15 + Years Of</h3>
                        <p className="font-roboto text-gray-600 mt-2">
                            Education Experience
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
