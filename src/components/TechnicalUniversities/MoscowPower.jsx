import React from "react";
import { Helmet } from "react-helmet";

const MoscowPower = () => {
    return (
        <>
            <Helmet>
                <title>Moscow Power Engineering Institute, Russia | Doctors-IEA</title>
                <meta
                    name="description"
                    content="National Research University Moscow Power Engineering Institute is one of the largest technical universities of Russia. Moscow Top Technical University."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://static.tildacdn.com/tild3165-6134-4338-b164-616436666138/uni_logos__black_300.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Moscow Power Engineering Institute
                    </h1>


                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Moscow Power Engineering Institute (Technical University) – MPEI was founded in 1930 in Moscow at the very beginning of world power engineering development and was widened and enlarged with discovering new energy sources, solving new scientific and technological problems, implementing new methods of energy generation, distribution and consumption. MPEI is of the same age as of Russian Power Engineering. Now MPEI is the largest educational and scientific center, one of the main technical universities in Russia in the field of Power Engineering, Electrical Engineering, Radio Engineering and Electronics, Informatics, and Computer Science. MPEI is rigged up with educational and scientific laboratories, offices, and lecture halls with modern equipment and technical training aids. MPEI has the official status of Technical University and is a member of the International Association of Universities, which represents interests of International higher education. MPEI holds one of the leading places in every – year official rating among technical universities of Russia.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">MPEI has two branches in Russia – in Smolensk and Volzskiy. MPEI is one of the founders of the Russian – Mongolian Institute affiliated with the Ulaanbaatar University, Mongolia, with training being carried out partly at MPEI. MPEI is situated in the historical district of Moscow – Lefortovo. Besides educationals buildings, there are Hostel appropriate for accommodating 5100 students, postgraduates and trainees; – Polyclinic with highly qualified medical specialists, computer diagnostics center and laser health survey center; – sports facilities, which include a stadium, halls for physical training lessons, tennis courts, swimming pool., etc; – shops and centers for consumer services.</p>
                    </div>
                    <h2 className="text-md text-green-600 lg:text-xl mt-8 uppercase">
                        MPEI SCHOOLS AND SPECIALITIES AT B.SC AND M.SC COURSES
                    </h2>
                    <p className="text-left text-justify mt-4 text-md lg:text-lg font-roboto">Main schools: Applied mathematics and informatics, Automatics and control, Electronics and microelectronics, Thermal power engineering, Electrical engineering, electromechanics and electrotechnologies, Electrical power engineering, Technological machines, and equipment, Radio engineering, Power engineering industry, Informatics and computer science, Technical physics, Applied mechanics, Management, Economics.</p>
                </div>

                <h2 className="text-md text-center  text-green-600 lg:text-xl mt-10">
                    Specialties:
                </h2>
                <p className="text-left text-justify text-md lg:text-lg mt-2 font-roboto">Applied mathematics, Low temperature physics and technology, Thermal physics, Dynamics and strength of machines, Radio – physics and electronics, High – voltage electrical and power engineering, Electric Power plants, Electrical power system and networks, Electric power supply (in certain industries), Thermal power plants, Water and feel technology at thermal power plants, Industry heat engineering, Heat technologies, Non – conventional and renewable energy sources, Nucler power plants and installations, Boiler and reactor manufacturing, Turbine manufacturing, Machines and technologies for highly efficient manufacturing process, manufacturing, Turbine manufacturing, Machines and technologies for highly efficient manufacturing process, Hydraulic machines, hydraulic drives, hydro- and pnematic control, Electromechanical engineering, Electrical and Electronic apparatus, Electrical insulators and cables engineering, capacitors technology, Electrical drive and automation of industrial installations and technological systems, Installations and systems in electro -technologies, Illuminating technology and light sources, Electrical transport, Electrical equipments of flying vehicles, Electrical supply of plants and factories, Equipments and methods of quality control and diagnostics, Biotechnological and medical devices and systems, Optical – electronic devices and systems, Microelectronics and solid state electronics, Electronical devices and systems, power industrial electronics, Radio technologies and technique, Household radio electronics equipment, Radio – electronic systems, Control and informatics in technical systems, Automatic production and technology processes (in industry as a whole), Robots and robotic systems, Relay control and automations of electrical power systems, Computer machines, complexes, systems and networks, Computer aided design, Information systems and technologies, Engineering environment protection (in power engineering industry), Economics and management of enterprises (in thermal power industry), Management (in electrical engineering), Management (in electrical engineering), Management (in thermal power engineering).</p>
                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "National Research University “MPEI” is one of the largest technical universities in Russia. It provides specialist training and scientific research in the field of energy, electrical engineering, radio electronics, computer engineering.",
                        "MPEI has modern educational buildings, academic and scientific laboratories, student hostels, powerful experimental facilities, a pilot-plant, an academic-research heat and power plant, a university technical park.",

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

            <div className="bg-green-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Dear students welcome to study at National Research University “Moscow Power Engineering Institute”
                </h2>
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Admission open for this academic year, interesting students may contact us
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact numbers: +7-9515190376 (Rus) | +917428212236 (Ind)
                </h3>
                <h6 className="mb-4">Email: thedoctors.iea@gmail.com</h6>
                <h6>Students or parents can write to us on at WhatsApp also +7-9515190376 (24*7)</h6>
            </div>


        </>
    )
}
export default MoscowPower;