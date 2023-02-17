import useScroll from "@/lib/hooks/useScroll";
import Link from "next/link";

const Navbar = ({ scrollPosition }: { scrollPosition: number | undefined }) => {
  const scrolled = useScroll(scrollPosition === undefined ? 0 : scrollPosition);
  const routes = [
    {
      name: "Acerca",
      url: "/about",
    },
    {
      name: "Contáctanos",
      url: "/contact",
    },
  ];

  return (
    <nav className="fixed w-full">
      <div
        className={`fixed md:px-10 top-0 w-full ${
          scrolled ? "navbar-background/50 backdrop-blur-xl" : "navbar-background"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl navbar-logo-text">
            Gas Saver 🤝
          </Link>
          <ul className="flex flex-row font-semibold navbar-menu-items">
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
