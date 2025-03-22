import { motion } from 'framer-motion'; // Import Framer Motion

const About = () => {
    const steps = [
        "Track and manage your Net Zero Pathway",
        "Set decarbonization targets",
        "Obtain insights on emissions",
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="flex flex-col items-center text-center space-y-6">
                <motion.h2
                    className="text-2xl font-bold text-green-600 w-96 rounded-full px-6 py-4 shadow-md"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    How It Works?
                </motion.h2>
                <motion.h1
                    className="text-4xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Getting Started is Easy
                </motion.h1>
                <motion.p
                    className="text-lg font-medium text-gray-600"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    How CarbonCrunch SAAS works
                </motion.p>
            </div>

            <motion.div 
                className="grid md:grid-cols-3 gap-8 mt-12 px-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}           
                        whileTap={{ scale: 0.9, rotate: -3 }}  
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-green-600 text-xl font-semibold flex items-center">
                            <span className="mr-2 text-2xl font-bold">{index + 1}.</span>
                        </h3>
                        <h3 className="text-green-600 text-xl font-semibold">{step}</h3>
                        <p className="mt-4 text-gray-600">
                            Set decarbonization targets and obtain insights on emissions.
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default About;
