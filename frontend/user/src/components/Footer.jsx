import React, { useState } from "react";
import { FaBookOpen, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
function Footer() {
  let [counter , setcount] = useState(false)
  return (
    <footer className="bg-(--color-bg) border-t border-(--color-nav) transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-xl font-bold text-(--color-primary) flex items-center gap-2">
          <FaBookOpen /> E-Learning
        </h1>

        <p className="text-sm text-(--color-text-muted)">
          © 2026 E-Learning. All rights reserved.
        </p>

        <div className="flex gap-5 text-(--color-text-muted)">
          
          <a href="#" className="hover:text-(--color-primary) transition">
           <SiInstagram size={18} />
          </a>
         
          <a href="#" className="hover:text-(--color-primary) transition">
            <FaGithub size={18} />
          </a>
          <a href="#" className="hover:text-(--color-primary) transition">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;