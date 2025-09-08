import React from "react";
import { Routes, Route } from "react-router-dom";
import DsplayHome from "./DsplayHome";
const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#181818] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DsplayHome />} />
      </Routes>
    </div>
  );
};

export default Display;
