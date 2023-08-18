import Title from "/src/components/Title"
import Button from "/src/components/Button"


function Card({title, text, image, to, buttonText, icon}) {
    return (
	<div className="relative p-4 w-80 h-80 md:p-6 md:w-96 md:h-96 bg-gradient-to-t from-gradientStart to-gradientEnd rounded-xl overflow-hidden flex flex-col items-center justify-end group transition-[padding] duration-300 hover:pb-8 active:pb-8">
	    <img className="z-[-1] absolute top-0 left-0 w-full h-full object-cover transition-[transform] duration-300 group-hover:scale-110 group-active:scale-110" src={image}/>

	    <Title text={title} className="mb-2 text-background"/>
	    <p className="mb-4 text-background">{text}</p>
	    <Button to={to} text={buttonText} icon={icon}/>
	</div>
    )
}

Card.defaultProps = {
    title: "Card Title",
    to: "/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/initiatives/boiling-alive.jpg",
    buttonText: "Read More",
    icon: ""
}

export default Card;
