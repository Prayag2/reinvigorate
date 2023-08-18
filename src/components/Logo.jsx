import { Link } from "react-router-dom"

function Logo({className}) {
    return (
	<Link to="/" className={className}>
	    <img className="h-full" src="/images/logo/logo.svg" alt="Reinvigorate Foundation" />
	</Link>
    )
}

export default Logo;
