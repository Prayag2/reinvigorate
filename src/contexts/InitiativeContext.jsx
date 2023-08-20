import { useState, useEffect, createContext } from "react";

export const InitiativeContext = createContext();

function InitiativeContextProvider({ children }) {
  const [initiatives, setInitiatives] = useState([]);
  async function fetchData() {
    const initiativesResponse = await fetch("/data/initiatives.json");
    const initiativesJSON = await initiativesResponse.json();
    setInitiatives(initiativesJSON);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InitiativeContext.Provider value={{ initiatives }}>
      {children}
    </InitiativeContext.Provider>
  );
}
export default InitiativeContextProvider;
