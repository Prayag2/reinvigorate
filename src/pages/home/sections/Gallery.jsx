import Wrapper from "/src/components/Wrapper"
import Title from "/src/components/Title"
import Carousel from "/src/components/Carousel"

function Gallery() {
    const images = [...Array(7).keys()].map(i => `/images/gallery/${i+1}.jpg`)
    return (
	<Wrapper className="text-center py-10">
	    <Title text="Gallery" fancy/>
	    <Carousel images={images} className="rounded"/>
	</Wrapper>
    )
}

export default Gallery;
