function FirstSection() {
  return (
    <>
      <section className="bg-[#D2E0FB] lg:mx-4 mx-2 my-2 rounded-md">
        <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">SKU! Tracker</h2>
            <p className="mb-4">SKU! Tracker adalah inovatifnya web aplikasi yang menghadirkan solusi canggih untuk tracking akademik.</p>
            <p>Dengan antarmuka yang intuitif dan fitur yang komprehensif, SKU! Tracker membantu pengguna untuk memantau perkembangan akademis dengan mudah, memberikan informasi real-time tentang nilai, absensi, dan prestasi lainnya.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img className="w-full mt-4 rounded-lg lg:mt-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstSection;
