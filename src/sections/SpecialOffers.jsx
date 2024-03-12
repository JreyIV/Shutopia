import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Clicker from "../components/Clicker";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palaquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-[#651fff]"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover a world of amazing experiences with us, where every step
          comes with unbeatable deals. Dive into our array of exclusive offers
          and promotions, designed to bring you incredible value on top-notch
          products.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          From limited-time discounts to special bundles, we&apos;re here to
          make your shopping experience unforgettable.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Clicker label="Shop now" iconURL={arrowRight} />
          <Clicker
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
