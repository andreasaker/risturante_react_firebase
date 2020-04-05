import React from "react";
import "./styles.css";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";
import CallButton from "./components/CallButton";

export default function App() {
  return (
    <div className="App">
      <div className="head_block">
        <h1>Risturante</h1>
        <h2>Welcome!</h2>
      </div>
      <div className="content_block">
        <CategoryList />
      </div>
      <div className="footer_block">
        <Footer />
      </div>
      <CallButton />
    </div>
  );
}
