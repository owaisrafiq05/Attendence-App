import React from "react";
import { useState, useEffect, onRefresh } from "react";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import Sidebar, { SidebarItem } from "../sidebar/sidebar";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export const dashboard = ({ response }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Check if user data exists in local storage
    const data = window.localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }

    // If user data is updated, update local storage
    if (response && Object.keys(response).length !== 0) {
      setUser(response);
      window.localStorage.setItem("user", JSON.stringify(response));
    }
  }, [response]);

  console.log("user", user);

  return (
    <>
      <div className="flex">
        <Sidebar user={user}>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem icon={<StickyNote size={20} />} text="Attendence" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Marks" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3 " />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </div>
    </>
  );
};