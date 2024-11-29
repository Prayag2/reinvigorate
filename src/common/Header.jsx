import React, { useContext, useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "../components/NavLink";
import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";
import { UtilContext } from "/src/contexts/UtilContext";

function Header() {
  const { observeElements } = useContext(UtilContext);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const navLinks = useMemo(
    () => [
      {
        text: "Home",
        route: "/",
        element: "#hero",
        isActive: location.pathname === "/",
      },
      {
        text: "Initiatives",
        route: "/",
        element: "#initiatives",
        isActive: false,
      },
      {
        text: "Volunteer",
        route: "/volunteer",
        element: "",
        isActive: location.pathname === "/volunteer",
      },
      {
        text: "Donate",
        route: "/donate",
        element: "",
        isActive: location.pathname === "/donate",
      },
    ],
    [location.pathname]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="top-0 w-full flex justify-center items-center h-[10vh] fixed bg-background z-10">
        <Wrapper className="h-full flex justify-between items-center">
          <Logo className="h-full py-4" />
          <img
            onClick={() => setNavOpen(true)}
            className="h-full py-5 md:hidden"
            alt="⋯"
            src="/images/other/menu.svg"
          />
          <div
            onClick={() => setNavOpen(false)}
            className={`text-xl fixed w-full h-full top-0 transition-[left] ${
              navOpen ? "left-0" : "left-[-100%]"
            } flex flex-col justify-center items-center gap-6 bg-secondary md:justify-end md:bg-background md:flex-row md:relative md:left-auto md:top-auto md:text-base`}
          >
            <img
              onClick={() => setNavOpen(false)}
              className="h-10 aspect-square absolute top-5 right-5 md:hidden"
              alt="⋯"
              src="/images/other/close.svg"
            />
            {navLinks.map((navLink, id) => (
              <NavLink
                key={id}
                route={navLink.route}
                element={navLink.element}
                text={navLink.text}
                isActive={navLink.isActive}
              />
            ))}
            <NavLink
              external
              route="https://girlupai.reinvigoratefoundation.org"
              text="Girl Up AI"
            />
          </div>
        </Wrapper>
      </div>
      <div className="h-[10vh] z-[-10]"></div>
    </>
  );
}

export default Header;
