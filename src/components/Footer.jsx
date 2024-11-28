import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-600 bg-opacity-35 text-neutral-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Movie Search</p>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hover:underline"
          >
            About
          </Link>
          <Link
            to="/"
            className="hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
