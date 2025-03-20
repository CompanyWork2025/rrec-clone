import { useState } from "react";
import HTMLFlipBook from "react-pageflip";

const universities = [
    {
        name: "Rostov State Medical University",
        description: "A leading medical university in Russia with a strong emphasis on research and clinical practice.",
        para: "Rostov is among one of the oldest and first medical universities in Russia. Rostov University came into existence in 1930. It is also known as RostSMU or RostGMU. This is a non-profit medical education institute that is located in Rostov-on-Don City, Russia and it is the largest Government Medical University in South Russian Federation. For more details, you can visit Rostov State Medical University’s official website.",
        logo: "https://www.rostgmu.in/logo.png",
    },
    {
        name: "Kazan State Medical University",
        description: "One of the oldest medical universities in Russia, offering world-class education.",
        para: "Kazan State Medical University (KSMU) is a multi-functional and multi-level state institution of higher learning in medicine. It ranks among the top medical universities in Russia. KSMU has trained thousands of international students and is known for its excellent research programs and modern facilities.",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/14/KSMU_logo.png",
    },
    {
        name: "Crimea Federal University",
        description: "A prestigious institution known for its advanced medical programs.",
        para: "Crimea Federal University is one of the largest medical institutions in Russia, located in Simferopol, Crimea. The university is known for its extensive research in the medical field and its high standards of medical education. It offers various undergraduate and postgraduate programs with advanced laboratories and clinical training.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeuqGYZITuwkzWXgV7WMeSSE4wtKKf_COxw&s",
    },
    {
        name: "Volgograd State Medical University",
        description: "An internationally recognized university providing top-notch medical education.",
        para: "Volgograd State Medical University (VolgSMU) is one of the most prestigious medical universities in Russia. Established in 1935, it has gained recognition globally for its strong medical faculty and advanced research facilities. The university offers excellent opportunities for practical training and has affiliations with top hospitals in Russia.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV35SdAS0GfivWa-QphguoSOhOpRZZy8h6aQ&s",
    }
];

// Ensure an even number of pages (React-PageFlip works best with even pages)
const pages = universities.length % 2 === 0 ? universities : [...universities, { blank: true }];

export default function UniversityBook() {
    return (
        <div className="flex justify-center items-center h-[620px] bg-gray-300">
            <HTMLFlipBook
                width={450}
                height={600}
                size="stretch"
                minWidth={300}
                maxWidth={450}
                minHeight={400}
                maxHeight={600}
                maxShadowOpacity={0.5}
                className="shadow-xl rounded-lg overflow-hidden bg-gray-100"
            >
                {/* First Page - About Us */}
                <div className="w-full h-full font-roboto flex flex-col justify-center items-center p-8 bg-white shadow-md border border-gray-300 rounded-lg">
                    <div className="flex md:flex-row items-center w-full ml-4 lg:ml-14 mt-6">
                        {/* Broken border line */}
                        <div className="flex items-center mr-4 -mt-10 lg:mt-0 lg:mr-4">
                            <div className="w-2 h-[2px] bg-[#f2312d]" />
                            <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
                            <div className="w-2 h-[2px] bg-[#f2312d]" />
                            <div className="w-2 h-[2px] bg-transparent" />
                            <div className="w-10 h-[2px] bg-[#f2312d]" />
                        </div>
                        <h1 className="text-lg font-bold -mt-10 lg:mt-4 md:mt-0 text-[#f2312d]">About Us</h1>
                        {/* Broken border line */}
                        <div className="flex items-center ml-4  -mt-10 lg:mt-0 lg:ml-4">
                            <div className="w-10 h-[2px] bg-[#f2312d]" />
                            <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
                            <div className="w-2 h-[2px] bg-[#f2312d]" />
                            <div className="w-2 h-[2px] bg-transparent" />
                            <div className="w-2 h-[2px] bg-[#f2312d]" />
                        </div>
                    </div>
                    <h1 className="text-lg lg:text-2xl font-semibold text-center mt-4">Welcome to RREC</h1>
                    <p className="text-gray-700 mt-4 text-sm leading-relaxed text-center">
                    Moscow is the capital of Russia. Within the Republic there are around 1,000 towns, of these, including Moscow, nine cities have a population of over a million (St.Petersburg, Volgograd, Rostov on Don, Nizhny Novgorod, Kazan, Ufa, Novosibirsk, Sverdlovsk, Chelyabinsk, and Omsk).
                    </p>
                    <p className="text-gray-700 mt-4 text-sm leading-relaxed text-center">Rus­sia, also offi­cially known as the Russ­ian Fed­er­a­tion, is a coun­try in north­ern Eura­sia. It is a fed­eral semi-presidential repub­lic, com­pris­ing 83 fed­eral sub­jects. From north­west to south­east, Rus­sia shares land bor­ders with Nor­way, Fin­land, Esto­nia, Latvia, Lithua­nia and Poland (both with Kalin­ingrad Oblast), Belarus, Ukraine, Geor­gia, Azer­bai­jan, Kaza­khstan, China, Mon­go­lia, and North Korea. It shares mar­itime bor­ders with Japan by the Sea of Okhotsk and the U.S. state of Alaska across the Bering Strait.</p>
                </div>

                {/* University Pages */}
                {pages.map((uni, index) => (
                    <div key={index} className="w-full h-full flex font-roboto bg-white shadow-lg border border-gray-200 rounded-lg">
                        {/* Left Page - University Name & Description */}
                        <div className="w-full flex flex-col justify-center p-6 border-r border-gray-300">
                            {uni.blank ? (
                                <h2 className="text-2xl font-bold text-gray-700">No Data Available</h2>
                            ) : (
                                <>
                                    <h2 className="text-xl text-center font-extrabold text-gray-800 tracking-wide border-b-4 border-red-500 pb-2">
                                        {uni.name}
                                    </h2>
                                    <p className="text-gray-700 mt-4 text-center leading-relaxed text-lg">{uni.description}</p>
                                </>
                            )}
                        </div>

                        {/* Right Page - University Logo & Read More Button */}
                        <div className="w-full flex flex-col items-center justify-center p-6">
                            {uni.blank ? (
                                <h2 className="text-lg font-semibold text-gray-700">Empty Page</h2>
                            ) : (
                                <>
                                    <div className="w-24 h-24 flex items-center justify-center bg-white shadow-lg rounded-full border border-gray-400 overflow-hidden">
                                        <img src={uni.logo} alt={uni.name} className="w-32 h-32 object-contain" />
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-700 mt-4">{uni.name}</h2>
                                    <p className="text-gray-700 mt-4 text-center leading-relaxed text-xs">{uni.para}</p>
                                    <button className="mt-5 px-5 py-2 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-lg shadow-md hover:scale-105 transform transition-all">
                                        Read More
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}
