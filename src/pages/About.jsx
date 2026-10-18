import { assets } from "../assets/assets_frontend/assets";
const About = () => {
  return (
    <div>
      <p className="text-center text-2xl">
        ABOUT <span className="font-bold">US</span>
      </p>

      <div className="flex flex-col md:flex-row my-15 ">
        <img className="w-90" src={assets.about_image} alt="" />
        <div className="mx-10 font-light">
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem animi
            exercitationem temporibus, sequi esse obcaecati illum nemo ratione
            officiis dolor eveniet. Odio eius porro deserunt ab? Cupiditate
            voluptatibus modi quidem.
          </p>

          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            impedit, nostrum ex fugit hic perferendis labore cumque accusamus
            magnam corporis officia odio quibusdam placeat autem! Nesciunt
            magnam reiciendis libero eaque?
          </p>

          <p className="my-8 font-bold">Our Vision</p>

          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            debitis vel, hic ipsum, facere voluptatem maiores aliquam quasi
            neque, molestias illum error? Deserunt vel labore architecto, ex
            quos debitis voluptatibus!
          </p>
        </div>
      </div>

      <div>
        <p className="text-2xl">
          WHY <span className="font-bold">CHOOSE US</span>
        </p>
        <div className="flex mt-10">
          <div className="border border-gray-300 px-1 sm:px-10 md:px-4 pt-8 pb-18 w-1/3 hover:bg-[#5f6fff] hover:text-white hover:cursor-pointer transition-all duration-300">
            <p className="font-bold mb-5 text-sm md:text-lg">EFFICIENCY</p>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              iusto molestias!
            </p>
          </div>
          <div className="border border-gray-300 px-1 sm:px-10 md:px-4 pt-8 pb-18 w-1/3 hover:bg-[#5f6fff] hover:text-white hover:cursor-pointer transition-all duration-300">
            <p className="font-bold mb-5 text-sm md:text-lg">CONVENIENCE</p>
            <p className="font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              temporibus nesciunt.
            </p>
          </div>
          <div className="border border-gray-300 px-1 sm:px-10 md:px-4 pt-8 pb-18 w-1/3 hover:bg-[#5f6fff] hover:text-white hover:cursor-pointer transition-all duration-300">
            <p className="font-bold mb-5 text-sm md:text-lg">PERSONALIZATION</p>
            <p className="font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              numquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
