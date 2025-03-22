import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons'; 
import { motion } from 'framer-motion'; // Import Framer Motion

const CarbonCrunch = () => {
    const features = [
        "Regulatory Compliance and Reporting",
        "Meeting Sustainability Goals",
        "Cost Savings and Operational Efficiency",
        "Investor and Consumer Expectations",
        "Climate Risk Management",
        "Strengthening Brand Reputation",
    ];

    return (
        <div className="py-16 bg-[#F5F5ED] px-4 text-center space-y-12 mt-8 overflow-hidden">
            <motion.p 
                className="text-2xl font-bold text-green-600 inline-block rounded-full px-6 py-4 shadow-md mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Why Carboncrunch
            </motion.p>

            <motion.h2 
                className="text-5xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Leading Sustainability with Carboncrunch
            </motion.h2>

            <motion.p 
                className="text-gray-600 max-w-2xl text-lg font-medium mx-auto"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                GHG (Greenhouse Gas) Accounting is a framework used to measure and report greenhouse gas emissions.
            </motion.p>

            <motion.div 
                className="grid md:grid-cols-3 gap-6 mt-10 text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FontAwesomeIcon 
                                icon={faCube} 
                                style={{ color: "#1cb064" }} 
                                className="text-4xl mb-4 bg-green-300 p-3 border rounded-2xl"
                            />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-green-500">{feature}</h3>
                        <p className="mt-2 text-gray-500">
                            Governments and regulatory bodies worldwide are implementing stricter climate policies.
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CarbonCrunch;
