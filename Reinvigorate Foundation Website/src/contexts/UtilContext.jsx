import { createContext } from "react"

export const UtilContext = createContext();

function UtilContextProvider({children}) {
    function scrollToElement(query) {
	console.log(query)
	document.querySelector(query).scrollIntoView({
	    behavior: "smooth"
	})
    }

    function observeElements(elements, callback) {
	const observer = new IntersectionObserver(entries => {
	    entries.forEach((entry, i) => {
		callback(entry, i)
	    })
	});
	elements.forEach(element => {
	    observer.observe(document.querySelector(element));
	})
    }

    return (
	<UtilContext.Provider value={{scrollToElement, observeElements}}>
	    {children}
	</UtilContext.Provider>
    )
}

export default UtilContextProvider;
