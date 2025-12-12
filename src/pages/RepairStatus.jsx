import React from "react";
import { StatusTracker } from "../components";

const RepairStatus = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Repair Status</h1>
      <StatusTracker />
    </div>
  );
};

export default RepairStatus;
