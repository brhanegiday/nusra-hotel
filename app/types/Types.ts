export interface Rooms {
  id: string;
  title: string;
  image: string;
  rating: number;
  pricePerNight: number;
  description: string;
  location: string;
  houseRules: string[];
  additionalPhotos: string[];
  services: string[];
}

export interface Reviews {
  id: number;
  avatar: string;
  name: string;
  position: string;
  description: string;
  rating: number;
}
