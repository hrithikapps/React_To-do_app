import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Body";

const AppLayout = () => {
  return (
    <>
      <React.StrictMode>
        <Body />
      </React.StrictMode>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
