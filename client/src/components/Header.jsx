import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="h-14 flex items-center justify-between px-6 sm:px-16 font-raleway border-y">
      <div className=" font-bold">Effort Ease</div>

      <div className="flex gap-3 font-bold items-center">
        <Link to="/" className="flex bg-black text-white rounded-lg p-2 " >Login</Link>
        <Link to="/" className=" bg-blue-500 text-white rounded-lg p-2">Register</Link>
      </div>
    </div>
  );
};

export default header;
