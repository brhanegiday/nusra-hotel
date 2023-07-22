import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Hotel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/Hotel.png",
    link: "/hotel",
  },
  {
    id: 2,
    title: "Restaurants",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/Restaurants.png",
    link: "/restaurants",
  },
  {
    id: 3,
    title: "Banquet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/Banquet.png",
    link: "/banquet",
  },
  {
    id: 4,
    title: "Spa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/SPA.png",
    link: "/spa",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">
            Services that we provide
          </h2>
          <p className="text-lg text-gray-600">
            At Nusra Hotel & Spa, you shall have a vividly everlasting memory of
            your stay. Your comfort and happiness are our commands as we make a
            quest to deliver nothing but the best of what we have to offer.
            Located only 2 kilometers away from the Ethiopian International
            Airport and only a five-minute drive from the part of Addis filled
            with activities, restaurants, and shops, our services are ideal for
            the perfect lodge.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg px-4 py-8 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              <Link href={"#"} className="mb-6" passHref>
                <div className="relative h-48 sm:h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    // width={500} height={400}
                    fill={true}
                    className="rounded-md"
                  />
                </div>
              </Link>
              <div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
