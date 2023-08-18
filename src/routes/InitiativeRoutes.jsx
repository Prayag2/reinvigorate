import { Routes, Route } from "react-router-dom"
import { useState, useEffect, useContext } from "react"

import Initiative from "/src/pages/initiative"
import { InitiativeContext } from "/src/contexts/InitiativeContext"

function InitiativeRoutes() {
    const { initiatives } = useContext(InitiativeContext);
    return (
	<Routes>
	    {
		initiatives.map((ini, i) => {
		    ini.images = [...Array(parseInt(ini.imageCount)).keys()].map(i => `/images/initiatives/${ini.route}/${i+1}.png`)
		    return (<Route key={i} path={ini.route} element={
			       <Initiative
				   initiative={ini}
			       />
				   }/>)
		})
	    }
	    <Route path="*" element={ <h1>Initiative Not Found</h1> }/>
	</Routes>
    )
}

export default InitiativeRoutes;
