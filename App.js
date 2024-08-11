import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return (
    <>
      <img
        alt="this is the brand's logo"
        className="logo"
        src="https://feastly.nl/wp-content/uploads/2024/04/Logo.png"
      />

      <h1>Feastly - The end to your hunger! :) </h1>
    </>
  );
};

const Navitems = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>
  );
};

const AppLayout = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <Navitems></Navitems>
      </div>
    </div>
  );
};

// Get the root DOM node
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<AppLayout />);
