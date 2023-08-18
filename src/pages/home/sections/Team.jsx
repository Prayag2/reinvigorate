import Title from "/src/components/Title"
import Wrapper from "/src/components/Wrapper"
import Card from "/src/components/Card"

import { useState, useEffect, useContext } from "react";
import { TeamContext } from "/src/contexts/TeamContext"

function Initiatives() {
    const { team } = useContext(TeamContext);

    return (
	<Wrapper id="initiatives" className="text-center py-10 scroll-mt-[10vh]">
	    <Title text="Our Team" fancy/>
	    <div className="flex gap-6 flex-wrap justify-center items-center">
	    {
		team.map((member, i) => (
		    <Card key={i} title={member.name} text={member.role} image={`${member.image}`} buttonText="LinkedIn" to={member.linkedin} icon="/images/other/linkedin.svg" />
		))
	    }
	    </div>
	</Wrapper>
    )
}

export default Initiatives;
