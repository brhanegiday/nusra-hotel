export interface Root {
  reviews: Review[]
}

export interface Review {
  _id: string
  roomId: number
  avatar: string
  name: string
  position: string
  description: string
  rating: number
  __v: number
}
