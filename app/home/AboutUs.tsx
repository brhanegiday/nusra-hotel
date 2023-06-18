const AboutUs = () => {
  return (
    <section className="py-10 md:py-20 bg-bean-500">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6 text-white md:w-2/5">
            About Us
          </h2>
          <div className="md:w-3/4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white">
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
