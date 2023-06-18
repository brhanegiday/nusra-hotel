export const rooms = [
  {
    id: 1,
    title: "Deluxe Room",
    image: "/assets/rooms/deluxe-room.webp",
    rating: 4.5,
    pricePerNight: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Standard Room",
    image: "/assets/rooms/standard-room.webp",
    rating: 4.2,
    pricePerNight: 150,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// Generate 32 rooms
for (let i = 3; i <= 35; i++) {
  rooms.push({
    id: i,
    title: `Room ${i}`,
    image: `/assets/rooms/rooms.webp`,
    rating: Math.random() * (5 - 3.5) + 3.5, // Random rating between 3.5 and 5
    pricePerNight: Math.floor(Math.random() * (300 - 100 + 1) + 100), // Random price between 100 and 300
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });
}
