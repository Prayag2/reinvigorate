import Title from "/src/components/Title"
import Wrapper from "/src/components/Wrapper"
import Input from "/src/components/Input"
import Textarea from "/src/components/Textarea"
import MultiSelect from "/src/components/MultiSelect"
import Button from "/src/components/Button"
import {InitiativeContext} from "/src/contexts/InitiativeContext"

import {useContext, useEffect, useState} from "react"

function Volunteer() {
    const {initiatives} = useContext(InitiativeContext);
    const [initiativeChoices, setInitiativeChoices] = useState(["Content Creation", "Tech Team", "Other"]);

    useEffect(()=>{
	setInitiativeChoices((prev)=>initiatives.map(ini => ini.name).concat(prev));
    }, [initiatives]);

    function submitForm(e) {
	e.preventDefault();

	const formData = new FormData(document.querySelector("#volunteerForm"));
	const selectedInitiatives = document.querySelector("#initiative").dataset.value;

	const name = formData.get("name");
	const email = formData.get("email");
	const phone = formData.get("phone");
	const initiatives = formData.getAll("initiative");
	const experience = formData.get("experience");
    }

    return (
	<Wrapper id="volunteer" className="text-center py-10 scroll-mt-[10vh]">
	    <form id="volunteerForm" onSubmit={e => submitForm(e)}>
		<Title text="Volunteer" fancy/>
		<Input name="name" placeholder="John Doe" label="Your Name" required/>
		<div className="flex flex-wrap md:flex-nowrap md:space-x-4">
		    <Input className="w-full" name="email" type="email" placeholder="johndoe@gmail.com" label="Email Adress" required/>
		    <Input className="w-full" name="phone" type="tel" placeholder="+91XXXXXXXXXX" label="Phone Number" required/>
		</div>
		<MultiSelect
		    label="Where do you want to volunteer?"
		    placeholder="Select one or more"
		    name="initiative"
		    choices={initiativeChoices} />
		<Textarea className="mt-2" name="experience" placeholder="Describe your experience" label="Have you ever volunteered before? If yes, describe your experience!" required/>
		<Button className="w-full" text="Submit"/>
	    </form>
	</Wrapper>
    )
}

export default Volunteer;
