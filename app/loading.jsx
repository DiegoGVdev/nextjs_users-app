// 'use client'
import React from "react";

function LoadingPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-48 flex flex-col justify-center items-center text-red-300 w-full ">
        <h1 className="text-7xl">Loading <span className="animate-pulse">...</span></h1>
      </div>
    </div>
  );
}

export default LoadingPage;
