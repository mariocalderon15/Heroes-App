import React from "react";
import { Outlet } from "react-router";

export const AdminLayout = () => {


  return (
  <div className="bg-amber-500">
   

    <Outlet/>
    </div>
);
};


