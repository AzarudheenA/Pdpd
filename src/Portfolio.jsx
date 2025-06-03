import { useState } from "react";
import { motion } from "framer-motion";

const pages = ["Home", "About", "Certifications", "Experience", "Contact"];

export default function Portfolio() {
  const [activePage, setActivePage] = useState("Home");

  const renderPageContent = () => {
    switch (activePage) {
      case "Home":
        return <h1 className="text-3xl font-bold">Azarudheen A - Automation Hero</h1>;
      case "About":
        return <p>From Mechanical Engineering to QA Tech Pro.</p>;
      case "Certifications":
        return (
          <ul>
            <li>ISTQB Certified Tester</li>
            <li>Salesforce Admin</li>
            <li>API Testing</li>
            <li>Robot Framework</li>
          </ul>
        );
      case "Experience":
        return (
          <ul>
            <li>HCL, VVND, Persistent</li>
            <li>Projects with Netgear, Cisco, Zebra, Extreme Networks, JNJ</li>
          </ul>
        );
      case "Contact":
        return (
          <div>
            <p>Reach out via:</p>
            <ul>
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank">GitHub</a></li>
              <li><a href="mailto:azar@example.com">Email</a></li>
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="p-6 min-h-screen bg-slate-900 text-white">
      <nav className="flex gap-4 mb-6">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded ${activePage === page ? "bg-white text-black" : "bg-slate-700"}`}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        ))}
      </nav>
      <motion.div
        key={activePage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {renderPageContent()}
      </motion.div>
    </div>
  );
}
