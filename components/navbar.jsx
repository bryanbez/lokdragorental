import Link from "next/link";

export const AppNavbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="text-white text-xl font-semibold">
          LOK DRAGO INFO
        </a>

        <ul className="flex space-x-4">
          <li>
            <Link href="/dragos" className="text-white hover:text-gray-400">
              Dragos
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
