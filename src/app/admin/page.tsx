"use client";
import React from "react";
import "./dashboard.module.scss";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Button onClick={() => toast.success("Clicked")}>Click Me</Button>
    </div>
  );
};

export default Dashboard;
