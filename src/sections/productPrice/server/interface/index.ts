// types.ts
export interface Product {
  code: string;
  description: string;
  price: number;
}

export interface ProductResponse {
  status: string;
  products: Product[];
}
