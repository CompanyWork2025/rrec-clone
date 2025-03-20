import React from "react";
import { Helmet } from "react-helmet";

const StPetersburg = () => {
    return (
        <>
            <Helmet>
                <title>Udmurt State University, Russia | RREC</title>
                <meta
                    name="description"
                    content="St.Petersburg Polytechnic University is a major Russian technical university situated in Saint Petersburg. Welcome to international programs in English"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ATotSFk37-IRmxE_XLk4j0JWjNBZLuIWaw&s"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                </div>
                <div className="bg-gray-100 -mt-4 mb-6 rounded-xl px-8 py-8 w-full mx-auto font-roboto text-gray-900">
                    <h2 className="text-2xl lg:text-3xl text-center font-bold mb-4 text-red-600">
                        Udmurt State University
                    </h2>
                    <h3 className="text-xl lg:text-xl text-center font-semibold mb-4">
                        Udmurt State University - Study in Russia
                    </h3>
                    <h3 className="text-xl lg:text-lg text-center font-semibold mb-6">
                        Learn Russian at Udmurt State University
                    </h3>

                    <p className="text-justify mb-4">
                        In 1931, the first higher education institution of Udmurtia, Udmurt State Pedagogical Institute (USPI), was founded. In 1971, under the initiative of the governmental authorities of Udmurtia, USPI was granted university status and acquired its current name, Udmurt State University.
                    </p>

                    <p className="text-justify mb-4">
                        <strong>Location:</strong> Russian Federation, Udmurt Republic, Izhevsk.
                    </p>

                    <p className="text-justify mb-4">
                        We would be happy to welcome you at Udmurt State University, the leading higher education institution of Udmurtia. Over 85 years of academic excellence and research experience made a great basis to develop into a dynamic and innovative University recognizing classical approaches to higher education training. International scholars and students of UdSU make significant contributions to campus learning, community diversity, research, cultural experience, and global partnerships necessary for advancement through the 21st century. Should you decide on coming to UdSU, we are glad to assure you that you play an important role in creative and cross-cultural exchange and communication that defines the UdSU campus.
                    </p>

                    <h4 className="text-lg font-semibold text-red-600 mb-2">A Unique Location to Explore</h4>
                    <p className="text-justify mb-4">
                        Here you will have a unique chance to combine the high-quality academic experience with immersion into a multicultural Udmurt Region community.
                    </p>

                    <h4 className="text-lg font-semibold text-red-600 mb-2">Flexible Courses</h4>
                    <p className="text-justify mb-4">
                        We are really flexible and supportive, offering programs and facilities that will fit your personal learning and research track.
                    </p>

                    <h4 className="text-lg font-semibold text-red-600 mb-2">On-Campus Accommodation Guaranteed</h4>
                    <p className="text-justify mb-4">
                        Incoming international students and scholars are provided with an On-Campus Housing opportunity: double rooms in a comfortable dormitory with reasonable accommodation fees.
                    </p>

                    <h4 className="text-lg font-semibold text-red-600 mb-2">USU Russian Language Programs Are Aimed At Those Who:</h4>
                    <ul className="list-disc list-inside text-justify mb-4">
                        <li>wish to apply for degree studies in Russian universities;</li>
                        <li>are enrolled in UdSU degree programs and need to further develop their Russian language competence;</li>
                        <li>are interested in the Russian language and culture.</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-red-600 mb-2">Institutes:</h4>
                    <ul className="list-disc list-inside text-justify">
                        <li>Institute of Arts and Design</li>
                        <li>Institute of Civil Defence</li>
                        <li>Institute of Economics and Management</li>
                        <li>Institute of Language and Literature</li>
                        <li>Institute of Law, Social Management, and Security</li>
                        <li>Institute of Mathematics, Information Technologies, and Physics</li>
                        <li>Institute of Natural Sciences</li>
                        <li>Institute of Oil and Gas</li>
                        <li>Institute of Pedagogy, Psychology and Social Technologies</li>
                        <li>Institute of Physical Training and Sports</li>
                        <li>Institute of Social Communications</li>
                        <li>Institute of Udmurt Philology, Finno-Ugric Studies, and Journalism</li>
                        <li>Institute of History and Sociology</li>
                    </ul>
                </div>


            </div>

            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    A Gateway to USU – (Reliable Russian Educational Consultants)
                </h2>
                <p className="text-base lg:text-lg mb-4">
                    Admission is open, interested students may contact us for admission, fees, etc.
                </p>
                <h6 className="mb-4">
                    Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
                </h6>
            </div>




        </>
    )
}
export default StPetersburg;