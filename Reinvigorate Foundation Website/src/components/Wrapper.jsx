function Wrapper({children, className, id}) {
    return (
	<div id={id} className={`mx-auto w-[90%] lg:w-[80%] ${className}`}>
	    {children}
	</div>
    )
}

export default Wrapper;
