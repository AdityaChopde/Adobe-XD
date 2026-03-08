import React from "react";

const Header = ({ title }) => {
    return (
        <div className="bg-blue-500 text-white text-center py-3 font-semibold text-lg">
            {title}
        </div>
    );
};

export default Header;