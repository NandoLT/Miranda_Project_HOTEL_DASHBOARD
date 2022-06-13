import React from "react";
import { Link, NavLink } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { MdOutlineBedroomParent, MdOutlineBook } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'

export const LateralMenu = ({menuCollapse}) => {

    return (
        <>
        <div id="lateral-menu">
        <ProSidebar collapsed={menuCollapse}>
            <SidebarContent>
            <Menu iconShape="square">
                <MenuItem icon={<MdOutlineSpaceDashboard />}>
                <Link to='/'>
                    Dashboard
                </Link>
                </MenuItem>
                <MenuItem icon={<MdOutlineBedroomParent />}>
                <Link to='/rooms'>
                    Rooms
                </Link>
                </MenuItem>
                <MenuItem icon={<MdOutlineBook />}>
                <Link to='/booking'>
                    Bookings
                </Link>
                </MenuItem>
                <MenuItem icon={<FaRegUser />}>
                <Link to='/users'>
                    Users
                </Link>
                </MenuItem>
            </Menu>
            </SidebarContent>
            <SidebarFooter>
                <h5>Travel Hotal Admin Dashboard</h5>
                <h6>&#169;2020 All Right Reserved</h6>
            </SidebarFooter>
        </ProSidebar>
        </div>
    </>
    );
}