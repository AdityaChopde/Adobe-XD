import Header from "../components/Header";
import Card from "../components/card";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >

            <Header title="Dashboard" />

            <div className="p-4 space-y-4">
                <Card
                    title="UI Design"
                    description="Beautiful mobile UI layout"
                />

                <Card
                    title="React Navigation"
                    description="Smooth page navigation"
                />
            </div>

        </motion.div>
    );
};

export default Home;