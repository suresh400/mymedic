import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import jwt_decode from "jwt-decode";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";
  const user = token ? jwt_decode(token) : null;

  const { userInfo } = useSelector((state) => state.root);

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Fetch unread notifications count
  useEffect(() => {
    const fetchUnreadNotifications = async () => {
      try {
        if (token) {
          const response = await axios.get("/notifications/unread", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUnreadNotifications(response.data.unreadCount);
        }
      } catch (error) {
        console.error("Error fetching unread notifications:", error);
      }
    };

    fetchUnreadNotifications();
  }, [token]);

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo" onClick={() => navigate("/")} style={{fontFamily: "cursive"}}>
          <NavLink to={"/"}>MyMedic</NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {user && user.role === "Doctor" && (
            <>
              <li>
                <NavLink to={"/applyfordoctor"}>Apply for doctor</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>
                  Notifications
                  {unreadNotifications > 0 && (
                    <span className="badge">{unreadNotifications}</span>
                  )}
                </NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/ChangePassword"}>Change Password</NavLink>
              </li>
            </>
          )}
          {user && user.role === "Patient" && (
            <>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>
                  Notifications
                  {unreadNotifications > 0 && (
                    <span className="badge">{unreadNotifications}</span>
                  )}
                </NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/ChangePassword"}>Change Password</NavLink>
              </li>
            </>
          )}
          {!token ? (
            <>
              <li>
                <NavLink className="btn" to={"/login"}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="btn" to={"/register"}>
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <span className="btn" onClick={logoutFunc}>
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .badge {
          background-color: red;
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          border-radius: 50%;
          padding: 0.2rem 0.5rem;
          margin-left: 0.5rem;
        }
      `}</style>
    </header>
  );
};

export default Navbar;



