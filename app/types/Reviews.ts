export interface Reviews {
  data: Data[];
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  position: string;
  comment: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  avatar: any;
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
