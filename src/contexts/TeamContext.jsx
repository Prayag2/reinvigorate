import { useState, useEffect, createContext } from "react";

export const TeamContext = createContext();

function TeamContextProvider({ children }) {
    const [team, setTeam] = useState([]);
    useEffect(() => {
	async function fetchData() {
	    const teamResponse = await fetch("/data/team.json");
	    const teamJSON = await teamResponse.json();
	    setTeam(teamJSON);
	}
	fetchData();
    }, []);

    return (
	<TeamContext.Provider value={{team}}>
	    {children}
	</TeamContext.Provider>
    )
}

export default TeamContextProvider;
