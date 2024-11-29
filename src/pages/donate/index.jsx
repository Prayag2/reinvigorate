import Carousel from "/src/components/Carousel";
import Wrapper from "/src/components/Wrapper";
import Title from "/src/components/Title";
import Button from "/src/components/Button";

function Home() {
  const images = ["/images/donate/1.jpg"];
  return (
    <main className="scroll-mt-[10vh] w-full relative">
      <div className="bg-primary">
        <Carousel className="w-full h-[80vh]" images={images} />
      </div>
      <Wrapper className="text-center py-10">
        <Title className="mb-8" text="Donate Now" fancy />
        <div className="grid grid-rows-2 gap-10 md:grid-rows-1 md:grid-cols-2">
          <p className="text-lg">
            Reinvigorate Foundation has always taken targeted actions to help
            society at large in many areas and will always strive to do so. Our
            flagship programs like Health and Sanitation through Let’s Talk
            Periods, a better lifestyle through Vitalising lives, creating
            environmental impacts through Boiling Alive, Helping Mental Health
            Wellbeing through Express To Liberate, and helping stay animals
            through Praise the Strays. We are trying our level best to keep up
            with our work and to bring happiness through our initiatives but we
            need your support and kind gestures to move forward. Donate now to
            help those who need it the most!
          </p>
          <div className="bg-secondary rounded-md p-5">
            <Title text="Bank Details" />
            <hr className="my-5 opacity-10"/>
            <p className="text-lg mb-2">You may donate here</p>
            <div className="text-left text-lg">
              <p>
                <span className="font-bold">Bank Name: </span>HDFC Bank
              </p>
              <p>
                <span className="font-bold">Name of Account: </span>Reinvigorate
                Foundation
              </p>
              <p>
                <span className="font-bold">Account Number: </span>
                50100562110322
              </p>
              <p>
                <span className="font-bold">IFSC Code: </span>HDFC0000088
              </p>
            </div>
            <hr className="my-5 opacity-10"/>
            <p>Or contact us here</p>
            <Button
              icon="/images/other/wahtsapp.svg"
              text="+919650085432"
              to="https://api.whatsapp.com/send/?phone=%2B919650085432&text&type=phone_number&app_absent=0"
              className="w-full mt-5 text-center"
              newTab
            ></Button>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

export default Home;
