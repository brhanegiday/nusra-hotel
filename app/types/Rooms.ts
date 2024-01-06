export interface Root {
  rooms: Room[]
}

interface Room {
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