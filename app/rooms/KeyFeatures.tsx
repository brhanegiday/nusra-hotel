import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaConciergeBell,
} from "react-icons/fa";
import { BiHotel } from "react-icons/bi";
import { TbMassage } from "react-icons/tb";

import WhyHotelNusra from "../components/WhyHotelNusra";

type Props = {};

function KeyFeatures({}: Props) {
  const features = [
    {
      icon: <FaWifi size={32} color="whitec" />,
      title: "Free Wi-Fi",
      description:
        "Stay connected with complimentary high-speed Wi-Fi throughout the hotel.",
    },
    {
      icon: <FaUtensils size={32} color="whitec" />,
      title: "Restaurant / Fusion Bistro",
      description:
        "At Fusion Bistro, we're passionate about two things: flavorsome food made with fresh ingredients and tremendous hospitality.",
    },
    {
      icon: <TbMassage size={32} color="whitec" />,
      title: "Spa",
      description:
        "Nusra offers a well-equipped spa with masseuses beyond extraordinary abilities to soothe and relax your body and mind.",
    },
    {
      icon: <BiHotel size={32} color="whitec" />,
      title: "Non Alcoholic Bar",
      description:
        "In addition to contemporary alcoholic beverages enjoyed by many, our hotel bars also offer Non-Alcoholic beverages to non-drinking guests.",
    },
  ];

  return (
    <>
      <WhyHotelNusra features={features} heading="Our Key Features" />
    </>
  );
}

export default KeyFeatures;
