import heroImage from "../public/assets/hero-img.webp";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
      <div>
        <div className="flex items-center gap-3 mb-6 w-fit bg-zinc-800 p-4 rounded-2xl">
        <img src={heroImage} alt="image" className="w-10 rounded-md" />
        <q>kode yang indah lahir dari ketekunan</q>
        </div>
        <h1 className="text-4xl/tight font-bold">Hi, Saya Efraim Urel Palodang</h1>
        <p className="text-base/relaxed opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ea praesentium quis quisquam quod omnis veniam hic, voluptate itaque optio facilis impedit deleniti dolor perspiciatis ipsam nostrum eveniet quam est!
        </p>
        <div className="flex mt-10 gap-4">
          <a href="#" className="bg-blue-700 hover:bg-blue-600 py-2 px-4 rounded-md">
            Download CV
          </a>
          <a href="#" className="bg-zinc-700 hover:bg-zinc-600 py-2 px-4 rounded-md">
            Lihat Projek
          </a>
        </div>
      </div>
      <img src={heroImage} alt="image" className="w-125 ml-auto" />
      </div>
    </>
  );
}

export default App;
