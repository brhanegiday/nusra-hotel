import Image from "next/image";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Location = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-secondary-500 px-10  rounded-lg">
          <div className="md:w-3/5 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-bean-500 py-3">
              Our Location
            </h2>
            <p className="text-gray-800 mb-6">
              Our Hotel is found in front of Olympia square around Dembel City
              mall, 2kms away from Bole International Airport on the road
              leading to Meskel square found on African avenue.
            </p>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <HiOutlineLocationMarker
                  size={20}
                  className="text-gray-800 mr-2"
                />
                <p className="text-gray-800">
                  Ethiopia, Addis Ababa, Bole Dembel Olympia
                </p>
              </div>
              <div className="flex items-center mb-2">
                <HiOutlineMail size={20} className="text-gray-800 mr-2" />
                <p className="text-gray-800">contact@nusrahotel.com</p>
              </div>
              <div className="flex items-center">
                <HiOutlinePhone size={20} className="text-gray-800 mr-2" />
                <p className="text-gray-800">
                  +251 90 377 7799 | +251 90 377 7766 | +251 11 557 0920
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/5 relative aspect-w-4 aspect-h-3">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/assets/our-location.png"
                alt="Location Image"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
