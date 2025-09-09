import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12 w-full">
    <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {/* Logo / Brand */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-white">NoteLeech-AI</h3>
        <p className="mt-2 text-sm">
          AI-powered note management that elevates your workflow.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="text-center">
        <h4 className="font-semibold text-white mb-2">Product</h4>
        <ul className="space-y-1 text-sm">
          <li><a href="#features" className="hover:text-white">Features</a></li>
          <li><a href="#about" className="hover:text-white">About Us</a></li>
          <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div className="text-center md:text-right text-sm">
        <a href="/privacy" className="block hover:text-white">Privacy Policy</a>
        <a href="/terms" className="block mt-1 hover:text-white">Terms of Service</a>
        <p className="mt-4">&copy; {new Date().getFullYear()} NoteLeech-AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
