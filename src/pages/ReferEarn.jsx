import { motion } from 'framer-motion';

export default function ReferEarn() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-100 py-0 px-4 md:px-8 lg:px-16"
        >
            <div className="mx-auto font-roboto bg-white p-6 md:p-10">
                <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center mb-4">
                    Join hand with us! Be our <span className="text-red-600">Referral</span> Partner
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-blue-100 p-4 md:p-6 text-justify rounded-lg shadow-md"
                >
                    <p className="text-gray-800 text-lg">
                        Our refer & earn program is clear as a crystal that allows anybody to send us the referral and recommendation of interested students. So what are you waiting for? Be ready to earn a whopping cash amount as a referral reward. For each successful referral, you will be eligible to get <span className="font-bold text-red-600">$495</span>.
                    </p>
                </motion.div>

                <motion.div
                    className="container mx-auto flex flex-col md:flex-row items-center justify-between p-0 mt-6 lg:mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Left Side - Text */}
                    <div className="w-full md:w-1/2">
                        <p className="text-justify text-lg text-gray-700">
                            RREC has pledged to guide you to an affordable and world-class MBBS education in Russia, now more rewarding. If you know anyone who is considering studying MBBS in WHO & NMC-approved top-ranked Medical University in Russia, whether friends, family, relatives, or acquaintances, you can suggest interested students to us as a referral partner. By doing so, you can get a chance to earn some additional cash and become a business partner without having to invest in a business.
                        </p>
                        <p className="text-justify text-lg mt-4 text-gray-700">
                            We follow a transparent and hassle-free referral process where you will be kept up to date on the status of your application and admission so that you know the status of the suggested student and when the referral fee will be due.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
                        animate={{ y: [0, -10, 0] }} // Floating effect
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <img
                            src="https://skybroking.com/wp-content/uploads/2022/01/refer-earn.png"
                            alt="Referral Partner"
                            className="max-w-xs md:max-w-sm lg:max-w-md"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>

                <div className="mt-8 text-justify">
                    <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">About Reliable Russian Education Consultant (RREC)</h2>
                    <p className="text-gray-700">
                        RREC is an established and pioneer consultant for MBBS in Russia. We are the official representative and authorized admission partner for low-cost and NMC-approved medical universities in Russia. RREC is leading the chart of overseas education consultants for more than 16 years, headquartered in New Delhi. We are a proud unit with a 100% placement record so far.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Our strength and reason to hold the number one position in this field is our internationally experienced team of foreign medical education consultants and advisors. We provide in-depth counseling and guidance that guarantee enrollment in an MBBS program in leading universities in Russia.
                    </p>
                </div>

                <div className="mt-8 text-justify">
                    <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Refer your Friends to do MBBS and Get On-Board Together</h2>
                    <p className="text-gray-700">
                        Our referral program not only helps you to earn cash, but you can also get your friends together on your journey to achieve your dream MBBS in Russia. It is possible if you and your friends are interested in studying MBBS in Russia together. All you need to do is provide your referral and share the idea of traveling, studying, and staying together during the 6-year MBBS course in Russia.
                    </p>
                </div>

                <div className="mt-8 text-justify">
                    <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Advantage of MBBS Together</h2>
                    <p className="text-gray-700">
                        Studying MBBS in Russia is a long journey. You may find yourself alone and homesick in a foreign land. Having friends together during MBBS will be an ideal solution for you. If your friends enroll through RREC, not only will you be benefitted financially, but we also go beyond our effort to make sure you all fly together, get accommodation together, and study together in Russia. If you go to study MBBS in Russia with your friends, you will feel more at home and comfortable abroad. Moreover, by helping your friend enroll in MBBS in top Russian Universities, you provide a career stage for them, thus benefitting all.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">MBBS Together: Step by Step</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Sign up and register with us.</li>
                        <li>Refer friends using the assigned referral code.</li>
                        <li>Get a cash referral reward.</li>
                        <li>Fly to Russia with your friends together.</li>
                    </ol>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">How the Entire Referral Process Works</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Any Indian student seeking admission to a top Russian medical university through RREC can be referred.</li>
                        <li>The referral should not be a contact that already exists in our database. It must be a fresh contact.</li>
                        <li>A mandatory sign-up is required to be part of our referral program.</li>
                        <li>Submit referrals by filling out a referral form on the website and providing the contact information of prospective applicants from your family, friends, and acquaintances.</li>
                        <li>Once your referral has successfully enrolled with RREC, we will update you.</li>
                        <li>For each successful referral, the reward will be <span className="font-bold text-red-600">$495</span>.</li>
                        <li>Your bank account will be credited with the referral reward after successful enrollment.</li>
                        <li>In case of any dispute, RREC reserves the right of the final decision.</li>
                    </ul>
                </div>

                <div className="mt-8 text-justify">
                    <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Start Earning with RREC</h2>
                    <p className="text-gray-700">
                        Our refer and earn program provides ample opportunities to those who want to earn an unlimited amount of referral rewards while also helping interested candidates achieve their dream of acquiring an MBBS degree from WHO and NMC-recognized top medical universities in Russia.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Fill out the form on <a href="https://www.rrecrussia.com" className="text-blue-600 font-semibold">www.rrecrussia.com</a> and start sharing with your friends. The more you refer, the more you can earn!
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
