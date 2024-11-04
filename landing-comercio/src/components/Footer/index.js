import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center bg-gray-900 text-gray-200 p-4">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="hover:text-blue-500 transition duration-200">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-blue-400 transition duration-200">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-pink-500 transition duration-200">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-blue-600 transition duration-200">
          <FaLinkedinIn />
        </a>
      </div>
      <aside className="text-center">
        <p>
          &copy; {new Date().getFullYear()} - All rights reserved by DARK
          SERVICES
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
