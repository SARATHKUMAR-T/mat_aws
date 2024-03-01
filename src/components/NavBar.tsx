import { Button, buttonVariants } from "./ui/button";
import { Heart, Menu, Users } from "lucide-react";
import { motion as m } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logo2.png";

const homeRoutes = [
  {
    label: "Search Profiles",
    href: "/search",
  },
  {
    label: "Success Stories",
    href: "/stories",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

function NavBar() {
  const [authenticated, isAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    function getToken() {
      const token = localStorage.getItem("token");
      token ? isAuthenticated(true) : isAuthenticated(false);
    }
    getToken();
  }, [authenticated]);

  return (
    <>
      {/* mobile nav */}
      <div className="flex md:hidden px-4 items-center">
        <Sheet>
          <SheetTrigger>
            <Menu className=" h-6 md:hidden w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {homeRoutes.map((route, i) => (
                <Link
                  key={i}
                  to={route.href}
                  className="block px-2 py-1 text-lg"
                >
                  {route.label}
                </Link>
              ))}
              <Link
                to="/signin"
                className={buttonVariants({
                  className: "text-lg group",
                  variant: "outline",
                })}
              >
                Sign In
                <Heart className="ml-1  group-hover:animate-pulse  group-hover:text-rose-500" />
              </Link>
              <Link
                className={buttonVariants({
                  className:
                    "text-lg group bg-rose-600 hover:bg-rose-700 text-white",
                  variant: "default",
                })}
                to="/signup"
              >
                Sign Up
                <Users className="ml-1 duration-300 transition-all  group-hover:animate-pulse  group-hover:text-rose-200" />
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Button
          variant="ghost"
          onClick={() => {
            localStorage.removeItem("token"),
              isAuthenticated(false),
              navigate("/");
          }}
          className="ml-4 lg:ml-0"
        ></Button>
      </div>
      {/* desktop nav */}
      <m.nav className="hidden sm:w-full z-[1000] top-0 inset-x-0 h-20 bg-rose-100  sm:fixed sm:flex   items-center justify-between px-4 lg:px-10 text-lg">
        <Link
          className={buttonVariants({
            variant: "ghost",
            className:
              "hidden bg-none hover:!bg-none  md:flex items-center justify-center my-auto ",
          })}
          to="/"
        >
          <img src={logo} alt="logo" className="h-16 w-48 bg-cover bg-center" />
        </Link>
        <ul>
          <li className="space-x-2 lg:space-x-5">
            {homeRoutes.map(route => (
              <Link
                key={route.label}
                className={buttonVariants({
                  className: "text-lg",
                  variant: "ghost",
                })}
                to={route.href}
              >
                {route.label}
              </Link>
            ))}
          </li>
        </ul>
        <div className="space-x-1 md:space-x-3 flex items-center">
          <Link
            to="/signin"
            className={buttonVariants({
              className: "text-lg group",
              variant: "outline",
            })}
          >
            Sign In
            <Heart className="ml-1  group-hover:animate-pulse  group-hover:text-rose-500" />
          </Link>
          <Link
            className={buttonVariants({
              className:
                "text-lg group bg-rose-600 hover:bg-rose-700 text-white",
              variant: "default",
            })}
            to="/signup"
          >
            Sign Up
            <Users className="ml-1 duration-300 transition-all  group-hover:animate-pulse  group-hover:text-rose-200" />
          </Link>
        </div>
      </m.nav>
    </>
  );
}

export default NavBar;
