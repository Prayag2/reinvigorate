import Title from "/src/components/Title";
import Wrapper from "/src/components/Wrapper";
import Card from "/src/components/Card";

import { useState, useEffect, useContext } from "react";
import { InitiativeContext } from "/src/contexts/InitiativeContext";

function Initiatives() {
  const { initiatives } = useContext(InitiativeContext);

  return (
    <Wrapper id="initiatives" className="text-center py-10 scroll-mt-[10vh]">
      <Title text="Our Initiatives" fancy />
      <div className="flex gap-6 flex-wrap justify-center items-center">
        {initiatives.map((ini, i) => (
          <Card
            to={`/initiative/${ini.route}`}
            key={i}
            title={ini.name}
            text={ini.shortDescription}
            image={`/images/initiatives/${ini.thumbnail}`}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default Initiatives;
