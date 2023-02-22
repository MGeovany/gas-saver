import useScroll from "@/lib/hooks/useScroll";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useSignInModal } from "../layout/signInModal";
import { motion } from "framer-motion";
import UserDropdown from "../layout/userDropdown";

const Navbar = ({ scrollPosition }: { scrollPosition: number | undefined }) => {
  const scrolled = useScroll(scrollPosition === undefined ? 0 : scrollPosition);
  const routes = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <div className="fixed w-full">
      <div
        className={`fixed md:px-10 top-0 w-full ${
          scrolled ? "bg-black/50 backdrop-blur-xl" : "bg-black"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center md:justify-between xl:mx-auto xs:justify-center">
          <Link
            href="/"
            className="md:flex items-center font-display md:text-2xl xs:text:sm xs:hidden"
          >
            Gas Saver 🤝
          </Link>
          <Link
            href="/"
            className="mx-5 items-center font-display text-sm font-bold md:hidden"
          >
            Home
          </Link>
          <ul className="flex flex-row font-semibold">
            {routes.map((page, index) => (
              <li key={index} className="mx-5 flex items-center text-sm">
                <Link href={page.url}>{page.name}</Link>
              </li>
            ))}
            {!session && status !== "loading" ? (
              <li>
                <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </button>
              </li>
            ) : (
              <UserDropdown />
            )}
          </ul>

          <SignInModal />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
