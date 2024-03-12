import Clicker from "../components/Clicker";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palaquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-[#651fff]"> Super</span>
          <span className="text-[#651fff]"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Every step is a testament to luxury and comfort. Crafted with
          meticulous attention to detail, our shoes are designed to elevate your
          style while providing unmatched comfort.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Experience the difference with our Super Quality Shoes, meticulously
          designed for exceptional support and lasting durability.
        </p>
        <div className="mt-11">
          <Clicker label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contian"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
