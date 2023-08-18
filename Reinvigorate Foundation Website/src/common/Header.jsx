import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "../components/NavLink";
import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";
import { UtilContext } from "/src/contexts/UtilContext";

function Header() {
    const { observeElements } = useContext(UtilContext);
    const location = useLocation();

    const [navLinks, setNavLinks] = useState([
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
            route: "/",
            element: "#volunteer",
            isActive: false,
        },
    ]);

    useEffect(() => {
        const documentEl = document.documentElement;
            const handleScroll = () => {
		const updatedNavLinks = navLinks.map((link) => ({
		    ...link,
		    isActive:
			document.querySelector(link.element).offsetTop +
			    document.querySelector(link.element).clientHeight / 2 <
			    documentEl.scrollTop + window.innerHeight &&
			!(document.querySelector(link.element).offsetTop +
			    document.querySelector(link.element).clientHeight / 2 <
			    documentEl.scrollTop),
		}));

            setNavLinks(updatedNavLinks);
        };

        document.body.onscroll = handleScroll;

        return () => {
            document.body.onscroll = null;
        };
    }, [navLinks]);

    return (
        <>
            <div className="top-0 w-full flex justify-center items-center h-[10vh] fixed bg-background z-10">
                <Wrapper className="h-full flex justify-between items-center">
                    <Logo className="h-full py-4" />
                    <div className="hidden lg:flex space-x-6">
                        {navLinks.map((navLink, id) => (
                            <NavLink
                                key={id}
                                route={navLink.route}
                                element={navLink.element}
                                text={navLink.text}
                                isActive={navLink.isActive}
                            />
                        ))}
                        <NavLink external route="" text="Donate" external />
                        <NavLink
                            external
                            route="https://girlupai.reinvigoratefoundation.org"
                            text="Girl Up AI"
                            external
                        />
                    </div>
                </Wrapper>
            </div>
            <div className="h-[10vh] z-[-10]"></div>
        </>
    );
}

export default Header;
