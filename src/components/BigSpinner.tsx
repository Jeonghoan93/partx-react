import React from "react";

const BigSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="animate-spin h-10 w-10 border-t-4 border-blue-500 rounded-full"></div>
    </div>
  );
};

export default BigSpinner;
