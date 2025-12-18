import React from "react";
import { useNavigate } from "react-router-dom";

const SigninButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signin");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#0f0f0f] hover:bg-[#171717] border border-white rounded-lg px-6 py-2 text-white font-semibold transition-colors duration-200 shadow-sm"
    >
      Sign in
    </button>
  );
};

export default SigninButton;
