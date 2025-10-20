import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-br2 shadow dark:bg-br2">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Alaa Al-Tamimi Law
          </a>
          . All Rights Reserved.
        </span>

        <div className="mt-3 md:mt-0">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
          >
            Login
          </Link>
        </div>

        
      </div>
    </footer>
  );
};
