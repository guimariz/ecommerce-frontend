export interface ProductModelServer {
  id: Number;
  name: String;
  category: String;
  description: String;
  price: Number;
  quantity: Number;
  images: String;
}

export interface ServerResponse {
  count: Number;
  products: ProductModelServer[];
} 