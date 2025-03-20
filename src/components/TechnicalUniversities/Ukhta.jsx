import React from "react";
import { Helmet } from "react-helmet";

const Ukhta = () => {
    return (
        <>
            <Helmet>
                <title>Ukhta State Technical University, Russia | RREC</title>
                <meta
                    name="description"
                    content="Ukhta State Technical University is a representative of oil and gas Universities in Russia. Ukhta Technical University is the largest university in Russia. For direct admissions call or write us at +7-9515190376."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://212a0c40eaa2d07d7ce5-8f475f2fa394bc8453917e1fb7321b33.ssl.cf1.rackcdn.com/06684594_00000000_1499331772-en_logo.png"
                        alt="university"
                        className="mx-auto w-18 h-10 lg:w-28 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Ukhta Technical University
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4 uppercase">
                        UKHTA STATE TECHNICAL UNIVERSITY
                    </h2>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Ukhta State Technical University is a representative of oil and gas Universities in Russia.
                    </h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">It is the largest technical University in the European North of the Russian Federation. The University was founded on the basis of the Ukhta Industrial Institute (the Institute was founded in 1967). By this time, more than 25000 engineers and economists had graduated in oil, geology, building, and timber industry majors. After the successful attestation on April 14, 1999, the Institute was granted a status of a State Technical University. Our engineers became mayors and ministers, heads of educational establishments, enterprises, and banks. 423 instructors and scientific workers teach at The University. Among them are 53 Professors with Doctors of Science and 213 Associate professors with Masters of Science. </p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Institute of Geology, Oil and Gas Production and Pipeline Transportation (Departments have given below)
                    </h2>
                    <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                        {[
                            "Development and exploitation of oil and gas fields and underground hydro-mechanics",
                            "Well drilling",
                            "Machines and equipment of oil and gas industry",
                            "Design and exploitation of main oil and gas pipelines",
                            "Industrial safety and environmental protection",
                            "Geodesy and land cadaster",
                            "Geophysical methods of geo-informational technologies and systems",
                            "Geology of fossil fuels and solid minerals",
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
                    Institute of Civil Building and Engineering (Departments have given below)
                </h2>

                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Architecture",
                        "Industrial and civil building",
                        "Heat engineering, heat and gas supply, and ventilation",
                        "Water supply and drainage system",
                        "Forest and woodwork equipment and materials",
                        "Technologies and machines of timber felling",
                        "Metrology, standardization, and certification",
                        "Electrification and automation of technological processes"

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
                    Institute of Economics, Management and Information Technology (Departments have given below)
                </h2>

                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Economics",
                        "Management",
                        "Production organization and planning",
                        "Production management",
                        "Documentary support of management",
                        "Computer science, information systems, and technologies",
                        "Public relations",
                        "Physiology, sports medicine, and physical culture"

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
                    Institute of Advanced Training (Departments have given below)
                </h2>

                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Advanced Mathematics",
                        "Physics",
                        "Chemistry",
                        "Foreign languages",
                        "History & Culture",
                        "Philosophy and Methodology of Education",
                        "The resistance of materials and Machine components",
                        "Theoretical mechanics & Descriptive geometry",
                        "Applied mathematics & Computer science"

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
                    Institute of Industry (Departments have given below)
                </h2>

                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Industrial College",
                        "Mining & Oil College",
                        "Industrial Economic Forestry College",


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
                    Admission open, interesting students may contact us
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact numbers: +7-9515190376 (Rus) | +917428212236 (Ind)
                </h3>
                <h6 className="mb-4">Email: thedoctors.iea@gmail.com</h6>
                <h6>Students or parents can write to us on at WhatsApp also +7-9515190376 (24*7)</h6>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4 mt-4">
                    DON’T MISS YOUR OPPORTUNITY TO STUDY AT UKHTA STATE TECHNICAL UNIVERSITY
                </h3>
            </div>


        </>
    )
}
export default Ukhta;