import React from "react";
import "./styles.css";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";
import CallButton from "./components/CallButton";
import ErrorBoundary from "./components/ErrorBoundrary";

export default function App() {
  return (
    <div className="App">
      <div className="head_block">
        <h1>Risturante</h1>
        <h2>Welcome!</h2>
      </div>
      <div className="content_block">
        <ErrorBoundary>
          <CategoryList />
        </ErrorBoundary>
      </div>
      <div className="footer_block">
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <CallButton />
      </ErrorBoundary>
    </div>
  );
}
