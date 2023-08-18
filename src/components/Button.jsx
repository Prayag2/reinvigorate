import { Link } from "react-router-dom"

function Button({text, to, onClick, secondary, className, icon}) {
    return (
	<>
	    {
		to === "" ?
		<button className={`text-md h-10 px-5 md:text-lg md:px-8 rounded ${secondary ? "bg-secondary" : "bg-primary"} ${className}`} onClick={onClick}>
		    {icon && <img className="h-full py-1 mr-4" alt="" src={icon}/>}
		    {text}
		</button>
		:
		<Link className={`flex items-center text-md h-10 px-5 md:text-lg md:px-8 rounded ${secondary ? "bg-secondary" : "bg-primary"} ${className}`} to={to}>
		    {icon && <img className="h-full py-1 mr-4" alt="" src={icon}/>}
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
    icon: ""
}

export default Button;
