import React from "react";
import {
  FaHome,
  FaList,
  FaUser,
  FaUserMd,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sidebar = [
    {
      name: "Home",
      path: "/dashboard/home",
      icon: <FaHome />,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      name: "Doctors",
      path: "/dashboard/doctors",
      icon: <FaUserMd />,
    },
    {
      name: "Appointments",
      path: "/dashboard/appointments",
      icon: <FaList />,
    },
    {
      name: "Applications",
      path: "/dashboard/applications",
      icon: <FaEnvelope />,
    },
    {
      name: "Profile",
      path: "/dashboard/aprofile",
      icon: <FaUser />,
    },
  ];

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <section style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "0",
      }}>
        <div style={{
          height: "100vh",
          width: "250px",
          background: "#2c3e50",
          borderRadius: "0px",
          boxShadow: "none",
          padding: "20px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          position: "sticky",
          top: "0"
        }}>
          <ul style={{
            listStyleType: "none",
            padding: "0",
            width: "100%",
            marginBottom: "20px"
          }}>
            {sidebar.map((ele, i) => (
              <li key={i} style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                padding: "10px",
                borderRadius: "6px",
              }}>
                <NavLink to={ele.path} style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "16px",
                  paddingLeft: "10px",
                }} activeStyle={{ color: "#3498db" }}>
                  {ele.icon}
                  <span style={{
                    marginLeft: "10px",
                    fontWeight: "500",
                    fontSize: "1.1rem"
                  }}>
                    {ele.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginTop: "auto",
            padding: "10px 20px",
            background: "#e74c3c",
            borderRadius: "8px",
            color: "white",
            fontSize: "18px"
          }} onClick={logoutFunc}>
            <MdLogout style={{ fontSize: "20px" }} />
            <span style={{
              marginLeft: "10px",
              fontWeight: "600"
            }}>
              Logout
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
