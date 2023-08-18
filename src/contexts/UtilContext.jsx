import { createContext } from "react"

export const UtilContext = createContext();

function UtilContextProvider({children}) {
    function scrollToElement(query) {
	document.querySelector(query).scrollIntoView({
	    behavior: "smooth"
	})
    }

    return (
	<UtilContext.Provider value={{scrollToElement}}>
	    {children}
	</UtilContext.Provider>
    )
}

export default UtilContextProvider;
