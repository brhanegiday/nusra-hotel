import { BiHappy } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdRoomService } from "react-icons/md";

import WhyHotelNusra from "../components/WhyHotelNusra";

type Props = {};

function WhyNusra({}: Props) {
  const features = [
    {
      icon: <FaUserFriends size={32} />,
      title: "Best Value for Family",
      description: "“Enter as a guest; leave as a friend.”",
    },
    {
      icon: <GrServices size={32} />,
      title: "Best Services",
      description:
        "Our hotel is located near Bole International Airport, at the heart of the city’s vibrant location .",
    },
    {
      icon: <MdRoomService size={32} />,
      title: "Best Facilities",
      description:
        "With our staff's warm welcome, the truthful information we provide, our kindness to provide extra support, and our fair pricing, we are confident you will love your stay with us!",
    },
    {
      icon: <BiHappy size={32} />,
      title: "Enjoy Your Time",
      description:
        "We value every second you spend at our Hotel & Spa; which is why we hanker after making your stay indelible from your memories.",
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-7xl px-4">
        <WhyHotelNusra features={features} heading="Why Hotel Nusra?" />
      </div>
    </div>
  );
}

export default WhyNusra;
