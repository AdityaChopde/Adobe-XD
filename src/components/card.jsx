import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ title, description }) => {

    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/details")}
            className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
        >

            <h2 className="text-lg font-semibold text-gray-800">
                {title}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
                {description}
            </p>

        </motion.div>
    );
};

export default Card;
