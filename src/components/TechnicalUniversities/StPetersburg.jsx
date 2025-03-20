import React from "react";
import { Helmet } from "react-helmet";

const StPetersburg = () => {
    return (
        <>
            <Helmet>
                <title>St. Petersburg Polytechnic University, Russia | RREC</title>
                <meta
                    name="description"
                    content="St.Petersburg Polytechnic University is a major Russian technical university situated in Saint Petersburg. Welcome to international programs in English"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Emblem-spbpu.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        St. Petersburg Polytechnic University
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4 uppercase">
                        SAINT PETERSBURG POLYTECHNIC UNIVERSITY
                    </h2>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        study in Russia saint Petersburg
                    </h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Saint Petersburg Polytechnic University was founded in 1899. Recently SPbPU became “National Research University”, also known in Russia and abroad as Polytechnical Institute a recognized Russian and worldwide leader in the field of higher engineering and economic education. Currently, it also remains at the leading positions in the rating of Russian engineering higher educational institutions. At the present time in SPbPU, there are 30197 students and postgraduates, 3056 of them are foreign citizens from 98 countries who annually study at different SPbPU programs. The University is carrying out education in the following areas: engineering, physics, economics, humanities and information technologies. The University trains specialists in 49 Bachelor Degree programs and 200 Master Degree programs, 90 Ph.D. programs and 90 Doctorate programs. In addition, in SPbPU there are a number of non-degree and international educational programs. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">In 2007 SPbSPU won a contest “Innovation University” financed in the framework of the national project “Education”. In 2010 SPbSPU gained the status “National Research University”. Nowadays SPbPU develops as a new type of research university, which integrates multidisciplinary R&D activities and advanced technologies for rising national economic competitiveness.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The University is proud of its longstanding traditions of international cooperation with many foreign educational institutions, research organizations, and industrial companies in the field of education and science. Among the University partners, there are more than 327 universities, 131 scientific and research institutions and 172 companies from over 55 countries.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">In the University there are more than 20 international research centers that are carrying out joint research together with the companies Motorola, Microsoft, AT&T, Siemens, LG “Electronics”, Apple Macintosh and others.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4 uppercase">
                        Today the Saint Petersburg Polytechnic University structure includes:
                    </h2>
                    <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                        {[
                            "11 Institutes",
                            "More than 100 departments and 120 R&E laboratories",
                            "Research centers, innovation laboratories, science park",
                            "The fundamental library is one of the largest scientific and technical libraries in Russia",
                            "Student campus",
                            "International campus",
                            "Medical center",
                            "Modern sports center",
                            "Concert halls etc.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center">
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/036/626/964/small_2x/ai-generated-gold-star-on-transparent-background-png.png"
                                    alt="icon"
                                    className="w-8 h-6 mr-3"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <h2 className="text-md text-center mt-10 text-red-600 lg:text-xl ">
                    SPbSPU offers a wide range of Bachelor’s Degree programs, Master’s Degree programs, and International Master Degree programs in Engineering.
                </h2>
                <h2 className="text-md text-center  text-red-600 lg:text-xl mt-4">
                    Engineering institutes prepare students for directions, required by the national industry and international market.
                </h2>
                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Institute of Civil Engineering",
                        "Institute of Power Engineering and Transportation",
                        "Institute of Metallurgy, Mechanical Engineering, and Transport",
                        "Institute of Computing and Control",
                        "Institute of Military Engineering and Safety Research",

                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/036/626/964/small_2x/ai-generated-gold-star-on-transparent-background-png.png"
                                alt="icon"
                                className="w-8 h-6 mr-3"
                            />
                            {item}
                        </li>
                    ))}
                </ul>

                <h2 className="text-md text-center  text-red-600 lg:text-xl mt-10">
                    SCIENCES INSTITUTES:
                </h2>
                <p className="text-left text-justify text-md lg:text-lg mt-2 font-roboto">The education process is conducted in many research think-tanks and labs and gives students modern knowledge in new and innovative spheres of physics on the basis of more than a hundred years’ time-honored practical and theoretical experience. </p>
                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Institute of Physics, Nanotechnology, and Telecommunications",
                        "Institute of Applied Mathematics and Mechanics",

                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/036/626/964/small_2x/ai-generated-gold-star-on-transparent-background-png.png"
                                alt="icon"
                                className="w-8 h-6 mr-3"
                            />
                            {item}
                        </li>
                    ))}
                </ul>

                <h2 className="text-md text-center  text-red-600 lg:text-xl mt-10">
                    ECONOMICS AND HUMANITIES:
                </h2>
                <p className="text-left text-justify text-md lg:text-lg mt-2 font-roboto">SPbSPU offers a wide range of Bachelor’s Degree programs and Master’s Degree programs in Economics and Humanities. Professional and theoretical skills of graduates give them an opportunity to work in different spheres of business, economics, policy, journalism, jurisprudence and social sphere.</p>
                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Institute of Industrial Economics and Management",
                        "Institute of Humanities",
                        "Institute of Applied Linguistics",
                        "Institute of International Educational Programs"

                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/036/626/964/small_2x/ai-generated-gold-star-on-transparent-background-png.png"
                                alt="icon"
                                className="w-8 h-6 mr-3"
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Get Direct Admission, Join Reliable Russian Educational Consultants
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    (Authorized official representative of Indians & foreign students)
                </h3>
                <p className="text-base lg:text-lg mb-4">
                    Admission open for the 2025 academic year, interested students may contact us for admission and fees.
                </p>
                <h6 className="mb-4">
                    Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
                </h6>
            </div>



        </>
    )
}
export default StPetersburg;