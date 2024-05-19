import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () =>
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">task-manager</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <TopMenuItems />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10" onClick={handleMenuToggle}></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">task-manager</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <TopMenuItems />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function TopMenuItems() {
  const { user, logout, loading } = useUser();

  return user ? (
    <>
      <Link
        to="/task/new"
        className="text-sm font-semibold leading-6 text-gray-900 block"
      >
        Add Task
      </Link>
      <Link
        to="/profile"
        className="text-sm font-semibold leading-6 text-gray-900 block"
      >
        Profile
      </Link>
      <p className="text-sm font-semibold leading-6 text-gray-900 block">
        <button onClick={logout}>{loading ? "loading..." : "Logout"}</button>
      </p>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="text-sm font-semibold leading-6 text-gray-900 block"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="text-sm font-semibold leading-6 text-gray-900 block"
      >
        Signup
      </Link>
    </>
  );
}
