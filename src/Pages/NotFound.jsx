import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.subtext}>The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.button}>
        Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "5rem",
    marginBottom: "0.5rem",
  },
  subtext: {
    fontSize: "1.5rem",
    color: "#aaaaaa",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#ffffff10",
    fontFamily: '--Second-font',
    color: "#ffffff",
    textDecoration: "none",
    border: "1px solid #ffffff30",
    borderRadius: "6px",
    transition: "0.2s ease-in-out",
  },
};

export default NotFound;
