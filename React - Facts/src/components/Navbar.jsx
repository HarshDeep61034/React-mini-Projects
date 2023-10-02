import "../App.css";
import reactLogo from "../assets/react.svg";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={reactLogo} alt="React Logo" width="60px" />
          <h2 className="logo-text">ReactFacts</h2>
        </div>

        <div className="project-info">
          <p>React Course-Project 1</p>
        </div>
      </div>
    </>
  );
}
