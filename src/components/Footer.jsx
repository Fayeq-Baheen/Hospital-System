const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

  return (
    <div>
      <div className="mt-40 flex">
        <div className="w-3/5">
          <h1 className="w-fit overflow-hidden border-2 border-black rounded-full flex items-center text-3xl font-bold">
            <span className="text-white bg-orange-400 px-4 py-2">Ghalib</span>{" "}
            <span className="text-white px-4 py-2 bg-blue-800">Hospital</span>
          </h1>
          <p className="mt-4 w-4/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem debitis tempora tempore saepe animi rerum quod magni
            libero nemo molestiae a laborum architecto fuga iste, ab repellat
            consequatur aspernatur sapiente?
          </p>
        </div>
        <div className="mx-10">
          <h2 className="text-xl font-bold">Company</h2>
          <ul className="my-8 text-sm/8">
            <li href="/">Home</li>
            <li href="/about">About us</li>
            <li href="/contact">Contact Us</li>
            <li href="#">Privacy Policy</li>
          </ul>
        </div>
        <div className="mx-10">
          <h2 className="text-xl font-bold">Get In Touch</h2>
          <ul className="my-8 text-sm/8">
            <li>+93 701 234 567</li>
            <li>example@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="mb-5 text-gray-400" />
      <p className="text-center text-sm my-5">Copyright {year} @Ghalib Hospital - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
