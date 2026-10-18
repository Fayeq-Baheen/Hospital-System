import {assets} from "../assets/assets_frontend/assets"
const Contact = () => {
  return (
    <div>
        <p className="text-2xl text-center">CONTACT <span className="font-bold">US</span></p>

        <div className="flex flex-col md:flex-row my-10 justify-center">
          <img className="w-90 mx-10" src={assets.contact_image} alt="" />
          <div className="text-sm font-light my-10">
            <p className="text-2xl">OUR OFFICE</p>
            <p className="my-5 text-gray-500">54709 Willms Station <br /> Suite 350, Washington USA</p>
            <p className="my-5 text-gray-500">Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
            <p className="text-2xl">Careers at prescripto</p>
            <p className="my-5 text-gray-500">Learn more about our teams and job openings.</p>
            <button className="border border-gray-500 py-4 px-8 rounded cursor-pointer hover:bg-black hover:text-white transition-all duration-300">Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact