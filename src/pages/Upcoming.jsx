import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

const events = [
    {
        id: 1,
        title: "International Medical Summit",
        date: "2025-04-05",
        university: "Kazan State Medical University",
        image: "https://cdn.gccbusinessnews.com/wp-content/uploads/2019/03/05140345/GCCBusinessNewsArticleApri15.jpg",
    },
    {
        id: 2,
        title: "Pacific Tech & AI Conference",
        date: "2025-04-15",
        university: "Far Eastern Federal University",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLa4N0lQuI5bZjr29uoP4aC5rrdoxBGgB9w&s",
    },
    {
        id: 3,
        title: "Crimea Science & Research Forum",
        date: "2025-04-22",
        university: "Crimea Federal University",
        image: "https://eng.cfuv.ru/wp-content/uploads/2019/12/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81.jpg",
    },
];

const Upcoming = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const filteredEvents = selectedDate
        ? events.filter((event) => event.date === selectedDate.toISOString().split("T")[0])
        : events;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center px-4 py-10 font-roboto"
        >
            <Helmet>
                <title>Upcoming Events - Seminars & Admission Guidance | Doctors-IEA</title>
                <meta
                    name="description"
                    content="Stay updated on upcoming events, seminars, webinars, and admission guidance sessions by Doctors-IEA. Join us to explore MBBS opportunities in Russia and beyond."
                />
            </Helmet>

            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
                Upcoming <span className="text-red-600">Events</span>
            </h1>
            <p className="text-gray-600 mb-6 text-center">
                Stay updated with our latest events and schedules.
            </p>

            <div className="flex flex-col lg:flex-row w-full max-w-6xl py-10 gap-8">
                {/* Left Side: Event Cards */}
                <div className="flex-1 grid gap-4">
                    <AnimatePresence>
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="flex flex-col md:flex-row items-center p-4 border bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
                                >
                                    <img src={event.image} alt="Event" className="w-16 h-16 rounded-full md:mr-4 mb-2 md:mb-0" />
                                    <div className="space-y-1 text-center md:text-left">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/1458/1458512.png"
                                                alt="title icon"
                                                className="w-6 h-6"
                                            />
                                            <h2 className="text-lg md:text-xl font-semibold">{event.title}</h2>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png"
                                                alt="calendar icon"
                                                className="w-6 h-6"
                                            />
                                            <p className="text-gray-500">{event.date}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/535/535137.png"
                                                alt="university icon"
                                                className="w-6 h-6"
                                            />
                                            <p className="text-gray-700 font-medium">{event.university}</p>
                                        </div>
                                    </div>

                                </motion.div>
                            ))
                        ) : (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-gray-500 text-center"
                            >
                                No events on this date.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Side: Calendar */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-2/3 lg:w-1/3 mx-auto p-4 bg-gradient-to-r from-[#f2312d] to-red-700 text-white shadow-xl rounded-lg border-2 border-white"
                >
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="w-full p-4 bg-white rounded-lg shadow-md text-black"
                        tileClassName={({ date }) =>
                            selectedDate && date.toISOString().split("T")[0] === selectedDate.toISOString().split("T")[0]
                                ? "bg-blue-500 text-white font-bold rounded-lg"
                                : ""
                        }
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Upcoming;
