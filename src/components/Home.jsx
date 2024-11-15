import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaUsers, FaUserMd } from "react-icons/fa";
import Loading from "./Loading";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../helper/apiCall";
import axios from "axios";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchDataCounts = async () => {
    dispatch(setLoading(true));
    try {
      const [userData, appointmentData, doctorData] = await Promise.all([
        fetchData("/user/getallusers"),
        fetchData("/appointment/getallappointments"),
        fetchData("/doctor/getalldoctors"),
      ]);
      setUserCount(userData.length);
      setAppointmentCount(appointmentData.length);
      setDoctorCount(doctorData.length);
    } catch (error) {
      console.error("Error fetching data counts:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchDataCounts();
  }, [dispatch]);

  const data = [
    { name: "User Count", count: userCount },
    { name: "Appointment Count", count: appointmentCount },
    { name: "Doctor Count", count: doctorCount },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div>
            <h1 style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              color: "#333",
              textAlign: "center",
              marginBottom: "40px",
              transition: "color 0.3s ease"
            }} onMouseOver={(e) => e.target.style.color = "#4e73df"} onMouseOut={(e) => e.target.style.color = "#333"}>
              Welcome To Dashboard!!!
            </h1>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "40px"
            }}>
              <div style={{
                background: "linear-gradient(135deg, #6a5af9, #4e73df)",
                color: "white",
                width: "280px",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }} onMouseOver={(e) => {
                e.target.style.transform = "translateY(-10px)";
                e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              }} onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px"
                }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>USERS</h3>
                  <FaUsers style={{ fontSize: "2rem", color: "white" }} />
                </div>
                <h2 style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginTop: "15px"
                }}>{userCount}</h2>
              </div>
              <div style={{
                background: "linear-gradient(135deg, #ffbc00, #ff8c00)",
                color: "white",
                width: "280px",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }} onMouseOver={(e) => {
                e.target.style.transform = "translateY(-10px)";
                e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              }} onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px"
                }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>APPOINTMENTS</h3>
                  <BsFillGrid3X3GapFill style={{ fontSize: "2rem", color: "white" }} />
                </div>
                <h2 style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginTop: "15px"
                }}>{appointmentCount}</h2>
              </div>
              <div style={{
                background: "linear-gradient(135deg, #ff4d4d, #ff2e2e)",
                color: "white",
                width: "280px",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }} onMouseOver={(e) => {
                e.target.style.transform = "translateY(-10px)";
                e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              }} onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px"
                }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>DOCTORS</h3>
                  <FaUserMd style={{ fontSize: "2rem", color: "white" }} />
                </div>
                <h2 style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginTop: "15px"
                }}>{doctorCount}</h2>
              </div>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginTop: "40px",
              width: "100%"
            }}>
              <div style={{
                width: "48%",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                backgroundColor: "white",
                padding: "20px",
                transition: "box-shadow 0.3s ease"
              }} onMouseOver={(e) => {
                e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              }} onMouseOut={(e) => {
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{
                width: "48%",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                backgroundColor: "white",
                padding: "20px",
                transition: "box-shadow 0.3s ease"
              }} onMouseOver={(e) => {
                e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              }} onMouseOut={(e) => {
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
