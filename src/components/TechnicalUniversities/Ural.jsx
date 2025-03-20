import React from "react";
import { Helmet } from "react-helmet";

const Ural = () => {
    return (
        <>
            <Helmet>
                <title>Ural Federal University | Study In Ural Federal University | Doctors-IEA</title>
                <meta
                    name="description"
                    content="Ural Federal University (UrFU) is one of the top universities in Russia that carries out research in various subjects. Ural Federal University, Russia"
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Ural_Federal_University_%28eng%29.jpg"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-36 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Ural Federal University
                    </h1>
                    <h2 className="text-md text-green-600 lg:text-xl mt-4 uppercase">
                        LEARN RUSSIAN, URFU | URAL FEDERAL UNIVERSITY
                    </h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">UrFU is one of the top-ranked scientific centers in Russia carrying out research in natural, technical, social sciences, humanities, and economics. Since 2008 the University has borne the name of Boris Yeltsin, its graduate of 1955, the first President of Russia. UrFU is a public, government-owned university. In 2011 Ural Federal University merged with Ural State University. Consolidation of the two oldest universities in the region resulted in a substantial increase in the University’s international reputation and positions in rankings; the university is ranked among 550 top world universities according to QS World University Rankings-2013. The University includes 17 institutes offering about 350-degree programs at different levels.  The total number of students at UrFU exceeds 50,000. Ural Federal University is the core of the research cluster comprising scientific institutes of the Ural Branch of the Russian Academy of Sciences, specialized laboratories, and high-tech enterprises. The research complex of the University includes dozens of research centers, the Innovation Infrastructure, Research Library (the library stock contains more than 3 mln volumes) and a number of museums and collections.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">In 2013 Ural Federal University entered the list of 15 Russian universities that won in a competitive selection for the right to receive a special subsidy targeted at enhancing the global competitiveness of the university and increasing its positions in the international rankings. In October 2013 the Roadmap that will allow UrFU to enter the top-100 of world universities by 2020 was officially approved. The University is engaged in numerous international projects funded by governmental institutions and non-governmental organizations from Russia, European Union, and the US; UrFU is a member of the SCO (Shanghai Organisation of Collaboration) Network University, the CIS (Community of Independent States) Network University and the Network University of the Arctic.</p>
                    </div>
                    <h2 className="text-md text-green-600 lg:text-xl mt-8 uppercase">
                        STUDYING AT URAL FEDERAL UNIVERSITY
                    </h2>
                    <h2 className="text-md text-green-600 lg:text-xl mt-0">
                        Ural Federal University offers a wide range of degree programs in Russian and English:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Engineering, Social Sciences, Natural  Sciences, Humanities and Arts, Economics and Management,  bachelor’s Degree Programs / Master Degree Programs: Ural Federal University is offering more than 125 Bachelor’s Degree Programs in different spheres of knowledge. Each program is assigned to one of the 16 institutes. Each program has its own necessary and changeable components, while the number of changeable profiles (majors) within the certain programs could vary. You can find out that programs with the same title are available for enrollment in different institutes; that means that the changeable profile structure of such programs is different.</p>

                    <h2 className="text-md text-green-600 lg:text-xl mt-10">
                        All programs listed below available in Russian only:-
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Applied Informatics, Information Security, Management, Business Informatics, Public Administration, History, Documents and Archival Sciences, Tourism, Cultural Studies, History of Arts, Social and Cultural Activities, Russian Language and Literature, Romance and Germanic Philology, Journalism, Physics, Astronomy, Radio-physics, Innovatics, Nanotechnology and Micro-System Machinery, Information Systems and Technologies, Chemistry, Biology, Ecology and Environmental Management, Fundamental and Applied Chemistry, Mathematics, Mechanics and Mathematical Modeling,Mathematics and Computer Sciences, Computer Security, Applied Informatics, Fundamental Informatics and Information Technologies, Commerce, Material Science and Technology, Metallurgy, Information Systems and Technologies, Civil Engineering, Mathematical Support and Administration of Information Systems, Radio-engineering, Communication Technologies and Systems, Management in Technical Systems, Design and Technology of Electronic Appliances, Information Systems and Technologies, Information Security of Telecommunication Systems, Psychology, Clinical Psychology, International Relations, Oriental and African Studies, Linguistics, Philosophy, Religion Studies, Political Science, Sociology, Social Work, Hotel Business, Fundamental Informatics and Information Technology, HR Management, Information Systems and Technologies, Design and Technology in Machine-Building Industry, Nuclear Power Stations: Exploitation and Engineering, Electronics and Nano-electronics, Heat Power Engineering and Heat-Process Engineering, Power-producing Machine Building, Applied Mathematics, Electric Power Industry and Electric Engineering, Applied Mathematics and Physics, Biotechnological Systems, Information Systems and Technologies, Biotechnology, Energy and Resource Saving Processes in Chemical Technology, Petrochemistry and Biotechnology, Economics, Buisness informatics, Fundamental and Informational informatics.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Ural Federal University is covering many fields of knowledge, offering different educational programs in natural science, technology and engineering, social sciences, humanities and arts, and economics. As Russia is participating in the Bologna process, UrFU supports two stages of education: Bachelor’s degree programs and Master’s degree programs. The graduates could continue their education at Doctoral programs and defend a Ph.D. thesis. While shaping the educational process, we permanently taking the employee’s demands into account. UrFU has tight connections with the Ural’s leading industrial and commercial enterprises, state bodies, and non-governmental organizations, as well as world companies operating in Ekaterinburg. </p>
                </div>
            </div>

            <div className="bg-green-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Admission open, interesting students may contact us
                </h2>

                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact numbers: +7-9515190376 (Rus) |+917428212236 (Ind)
                </h3>
                <h6 className="mb-4">Email: thedoctors.iea@gmail.com</h6>
                <h6>Students or parents can write to us on at WhatsApp also +7-9515190376 (24*7)</h6>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4 mt-4">
                    URAL FEDERAL UNIVERSITY | URFU-JOIN US TODAY FOR BETTER TOMORROW
                </h3>
            </div>
        </>
    )
}
export default Ural;