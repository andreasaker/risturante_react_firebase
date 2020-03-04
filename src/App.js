import React from "react";
import "./styles.css";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="head_block">
        <h1>Risturante</h1>
        <h2>Welcome!</h2>
      </div>
      <div className="content_block">
        <CourseList />
      </div>
      <div className="footer_block">
        <Footer />
      </div>
    </div>
  );
}
