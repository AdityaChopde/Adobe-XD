import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Details = () => {

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            <Header title="Details" />

            <div className="p-4">

                <p className="text-gray-600 mb-4">
                    This is the details page.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Go Back
                </button>

            </div>

        </motion.div>
    );
};

export default Details;