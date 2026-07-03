import React from "react";

const MainLayout = async ({ children }) => {
  return <div className="container mx-auto px-4 md:px-6 mt-24 mb-20">{children}</div>;
};

export default MainLayout;