import { Link } from "react-router-dom"

function Button({text, to, onClick, secondary, className, icon, newTab}) {
    return (
	<>
	    {
		to === "" ?
		<button className={`text-md h-10 px-5 md:text-lg md:px-8 rounded ${secondary ? "bg-secondary" : "bg-primary"} ${className}`} onClick={onClick}>
		    {icon && <img className="h-full py-2 mr-4 inline-block" alt="" src={icon}/>}
		    {text}
		</button>
		:
		<Link target={newTab ? "_blank" : "_self"} className={`justify-center flex items-center text-md h-10 px-5 md:text-lg md:px-8 rounded ${secondary ? "bg-secondary" : "bg-primary"} ${className}`} to={to}>
		    {icon && <img className="h-full py-2 mr-4 inline-block" alt="" src={icon}/>}
		    {text}
		</Link>
	    }
	</>
    )
}

Button.defaultProps = {
    text: "Button",
    to: "",
    onClick: ()=>{},
    secondary: false,
    className: "",
    icon: "",
	newTab: false
}

export default Button;
