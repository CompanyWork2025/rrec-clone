import React from "react";
import { Helmet } from "react-helmet";

const SouthernFederal = () => {
    return (
        <>
            <Helmet>
                <title>Southern Federal University, Russia - Admission open for the 2025</title>
                <meta
                    name="description"
                    content="Southern Federal University is top federal university situated in Rostov-on-Don, South Russia. Doctors-IEA is the official representative. Admission open for the 2024, RADIO-ENGINEERING, PREPARATORY COURSE, Faculties."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://sfedu.ru/img/logo/sfedu-V-13-L_eng.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Southern Federal University
                    </h1>
                    <h2 className="text-md text-green-600 lg:text-xl mt-4 uppercase">
                        FAMOUS UNIVERSITY OF RADIO-ENGINEERING, PREPARATORY COURSE
                    </h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">WELCOME TO SOUTHERN FEDERAL UNIVERSITY – A DYNAMIC, MODERN UNIVERSITY WITH HIGH STANDARDS IN TEACHING AND RESEARCH AND A GROWING REPUTATION FOR ENTERPRISE, EMPLOYMENT AND OPPORTUNITY. AT PRESENT SFEDU, THE LEGAL SUCCESSOR OF ROSTOV STATE UNIVERSITY, COMPRISES TECHNOLOGICAL, PEDAGOGICAL AND ARCHITECTURE INSTITUTES, 36 FACULTIES, 23 BRANCHES, 70 RESEARCH UNITS. SFEDU HAS 2 CAMPUSES IN ROSTOV AND TAGANROG. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">We take pride in the highly qualified and experienced university team: the academic and research staff includes 4 Full members of the Russian Academy of Sciences, 2 Associates of the Russian Academy of Sciences, 4 Associates of the Russian Academy of Education, 400 Professors and Doctors of Science, 1525 Candidates, 26 State Prizewinners and 17 Honorary Scientists of RF. Many SFedU alumni have become outstanding figures in their respective fields and include the Nobel Prize Winner – Alexander Solzhenitsyn, Full Members of the Academy of Science of RF, heads of state bodies, industry and research organizations, remarkable researchers and academics of foreign universities. SFedU has well-established international links with more than 300 universities and institutes from 50 countries. Our international outlook is strongly expressed in active collaboration with international foundations and programs, such as DAAD, CRDF, TACIS, INTAS, IREX, etc.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The Associate membership at ECIU has given a new impulse to enhancing both internationalization and innovation spirit at SFedU. For more than 50 years the University provides training for international students and specialists. During that period 5007 persons from overseas completed their studies on undergraduate, graduate, professional development programs, and courses at the University. With a wide choice of courses across different programs, we invite you to join us at Southern Federal University and to learn and live as members of the university community.</p>
                    </div>
                    <h2 className="text-md text-green-600 lg:text-xl mt-4 uppercase">
                        Faculties:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Faculty of Architecture, Faculty of Arts, Faculty of Arts and Graphics, Faculty of Automation and Computer Science Faculty of Basic Preparation, Faculty of Biology and Soils, Faculty of Chemistry, Faculty of Economic and Social Systems Management, Faculty of Economics, Faculty of Economics, Management and Law, Faculty of Electronics and Electronic Equipment Engineering, Faculty of Geology and Geography, Faculty of High Technologies, Faculty of History, Faculty of Information Security, Faculty of Law Faculty of Linguistics, Faculty of Mathematics, Computer Science and Physics, Faculty of Mathematics, Mechanics & Computer Science, Faculty of Natural Science, Faculty of Natural Science and Humanities, Faculty of Pedagogics & Practical Psychology, Faculty of Philosophy and Culture Studies, Faculty of Philology and Journalism, Faculty of Physics, Faculty of Physical Culture & Sports, Faculty of Professional Development and Retraining of Teaching Staff, Faculty of Psychology, Faculty of Radio Engineering, Faculty of Regional Studies, Faculty of Social and Historical Education, Faculty of Social and Political Science, Faculty of Technology and Enterprise.</p>
                </div>
            </div>

            <div className="bg-green-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Study in Southern federal university
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Admission open for this academic year, interesting students may contact us
                </h3>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact numbers: +7-9515190376 (Rus) |+917428212236 (Ind)
                </h3>
                <h6 className="mb-4">Email: thedoctors.iea@gmail.com</h6>
                <h6>Students or parents can write to us on at WhatsApp also +7-9515190376 (24*7)</h6>
            </div>
        </>
    )
}
export default SouthernFederal;