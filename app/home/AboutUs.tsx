const AboutUs = () => {
  return (
    <section className="py-20 bg-bean-500">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
            About Us
          </h2>
          <div className="">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">
              “Enter as a guest; leave as a friend.”
            </h3>
            <p className="text-gray-300">
              Our multi-million investment hotel, “Nusra Hotel and Spa,” is
              located in Addis Ababa, Bole around Olympia, at the heart and soul
              of the city’s finest services. Our hotel offers express check-in
              and checkout, operating 24 hours a day at the front desk. We
              outshine others with our dazzling restaurants and refreshing
              cafés. We also provide a separate smoking area for our smoking
              guests, ensuring their comfort while respecting the needs of our
              non-smoking guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
