export interface Rooms {
  data: Data[];
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: number;
  pricePerNight: number;
  location: string;
  houseRules: any;
  services: string;
  title: string;
  description: string;
  image: any;
  additionalPhotos: any;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
