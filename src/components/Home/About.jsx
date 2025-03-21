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
        <div className="flex flex-row  bg-gray-200 justify-center items-center font-roboto h-[620px] ">
            <div className="w-1/3 flex flex-col items-center p-8">
                <h2 className="text-2xl font-bold text-gray-700 mt-4">Welcome to RREC</h2>
                <p className="text-gray-700 text-sm mb-8 text-center mt-2"> Moscow is the capital of Russia. Within the Republic there are around 1,000 towns, including Moscow, nine cities have a population of over a million (St.Petersburg, Volgograd, Rostov on Don, Nizhny Novgorod, Kazan, Ufa, Novosibirsk, Sverdlovsk, Chelyabinsk, and Omsk).</p>
                <div className="relative w-48 h-48 lg:h-96 lg:w-96">
                    <img src="https://media0.giphy.com/media/3b7vKF8qZVgCo0emIe/giphy.gif?cid=6c09b9523qfkwmtf16njax0whngdu3r8jdo62ih6we45ecwp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="University Logo" className="absolute w-96 h-96 object-cover transform rotate-3" />
                    <img src="https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-3d-illustration-of-college-student-jump-chasing-mortarboard-png-image_11476432.png" alt="University Logo" className="absolute w-96 h-96 object-cover transform translate-x-4 translate-y-4 scale-95" />
                </div>

            </div>
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
                    <h1 className="text-lg lg:text-xl font-semibold text-center -mt-2 border-b-4 border-red-500 pb-2">Explore Top Medical Universities</h1>
                    <p className="text-gray-700 mt-4 text-md leading-relaxed text-center">
                        Discover top medical universities in Russia offering world-class education, modern facilities, and global recognition. Start your journey toward a successful medical career with expert guidance and seamless admission processes.
                    </p>
                    <img src="https://image.spreadshirtmedia.com/image-server/v1/products/T1459A839PA3861PT28D1039102222W10000H6995/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/turn-the-page.jpg" alt="University Logo" className="absolute w-96 h-64 object-cover transform translate-x-4 translate-y-4 scale-95" />
                </div>

                {/* University Pages */}
                {pages.map((uni, index) => (
                    <div key={index} className="w-full h-full flex font-roboto bg-white shadow-lg border border-gray-200 rounded-lg">
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
