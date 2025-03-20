import React from "react";
import { Helmet } from "react-helmet";

const RostovEco = () => {
    return (
        <>
            <Helmet>
                <title>Rostov State University of Economics, Russia | RREC</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13qGD4EEWRfGmgbYRPTzIdqJZbAwE9A-n4g&s"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                </div>

                <div className="font-roboto"> 
                    <h2 className="text-xl text-center text-red-600 font-bold mt-6 mb-2">
                        Rostov State University Of Economics, Russia
                    </h2>
                    <h3 className="text-lg text-center mb-4 font-semibold">Study in Russia | RSUE, city: Rostov, Russia</h3>

                    <p className="mt-4">
                        The Rostov State University of Economics (RSUE) XIX-XX century was a time of great economic growth in Rostov-on-Don and in the Rostov region. By the beginning of the XX century, Rostov turned into one of the richest cities, an important industrial center with a developed bank and trade system, a big transport center that joined 3 railway systems, and one of the biggest Russian ports. “Merchant-city”, as Rostov was frequently called, showed demand in specialists in economics, accounting, insurance, statistics, etc.
                    </p>

                    <p className="mt-4">
                        Development of vocational and then higher education in Rostov started in 1900 with the establishment of Rostov Male Commerce School and continued even during World War I, when the majority of the professor staff from Warsaw University moved to Rostov in 1915.
                    </p>

                    <p className="mt-4">
                        The end of the 1920s - beginning of the 1930s was the time of important changes in the country’s life in the fields of economy and economic science and education: the building of socialist society, collectivism policy, and industrialization led to the creation in 1930-1931 of the first Financial-Economic Institutes in Moscow, Leningrad, Kharkiv, Tashkent, Irkutsk, Kazan, Kyiv, and Rostov-on-Don. Thus, in 1931 Rostov got its first specialized Institute of Finance and Economy (RFEI) that began classes within 2 specialties: State Budgeting and Credit.
                    </p>

                    <p className="mt-4">
                        In 1937, RFEI moved to a new site – one of the most beautiful buildings in Rostov of that time, which is still home to the University. Since that time, RFEI started its growth. Before the beginning of World War II, it ranked 3rd among all the economic institutes of the USSR, expanded its activity, and turned into a well-known center of education.
                    </p>

                    <p className="mt-4">
                        In 1964, due to the diversity of educational courses and high prestige among the population, RFEI was renamed to reflect its broader educational and scientific scope – Rostov Institute of National Economy (RINH). By the beginning of the 1980s, RINH had more than 7,000 students, was officially recognized as a first-category institute, and was considered the leading economic university in the entire North Caucasus.
                    </p>

                    <p className="mt-4">
                        The last decade of the XX century turned out to be the most challenging and dynamic for the University. Economic and political changes in the USSR and Russia led to the transformation of the educational concept and required quick and effective solutions to various tasks. Within ten years, the University changed its name twice: in 1994, it became Rostov State Academy of Economics, and in 2000, it was finally renamed to Rostov State University of Economics (RSUE).
                    </p>

                    <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">
                        Faculties:
                    </h2>
                    <p>All the educational programs of RSUE are offered within 7 Faculties:</p>
                    <ul className="list-disc pl-5">
                        <li>Preparatory Course Faculty (Russian Language course)</li>
                        <li>Faculty of National and International Economy</li>
                        <li>Faculty of Commerce and Marketing</li>
                        <li>Faculty of Informatization and Control</li>
                        <li>Faculty of Accounting</li>
                        <li>Faculty of Finance</li>
                        <li>Faculty of Law</li>
                        <li>Faculty of Linguistics and Journalism</li>
                        <li>Doctoral studies (Ph.D.)</li>
                    </ul>
                </div>

            </div>
            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    A Gateway to RSUE – (Reliable Russian Educational Consultants)
                </h2>
                <p className="text-base lg:text-lg mb-4">
                    Admission open for the 2025 academic year. Interested students may contact us for admission and fees.
                </p>
                <h6>
                    Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
                </h6>
            </div>


        </>
    )
}
export default RostovEco;