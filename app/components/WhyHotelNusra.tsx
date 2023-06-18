type Feature = {
  icon: any;
  title: string;
  description: string;
};
type Props = {
  features: Feature[];
  heading: string;
};
const WhyHotelNusra = ({ features, heading }: Props) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center mb-10 text-bean-800">
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg px-6 py-8 flex space-x-5 border border-[#D8D8D8] "
          >
            <div className="">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHotelNusra;
