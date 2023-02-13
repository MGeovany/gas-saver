import useScroll from "@/lib/hooks/useScroll";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScroll(150);
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

  return (
    <nav className="fixed w-full">
      <div
        className={`fixed top-0 w-full ${
          scrolled ? "bg-black/50 backdrop-blur-xl" : "bg-black"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            Gas Saver 🤝
          </Link>
          <ul className="flex flex-row font-semibold">
            {routes.map((page, index) => (
              <li key={index} className="mx-5">
                <Link href={page.url}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
