function Home() {
  return (
    <>
      <div className="block my-10 py-28 mx-4 bg-[#D2E0FB] border border-gray-200 rounded-lg shadow lg:text-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Selamat Di S<span>K</span>U! Tracker
          </h1>
          <p className="mt-4 text-lg text-center text-gray-600">This template comes pre-configured with Tailwind CSS and is ready to use with one command!</p>
          <a href="#" className="mt-8 px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
