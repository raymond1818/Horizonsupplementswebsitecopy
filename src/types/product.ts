export interface FormulaItem {
  ingredient: string;
  amount: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  image: string;
  caffeineContent: number;
  features: string[];
  isNew: boolean;
  comingSoon?: boolean;
  formula?: FormulaItem[];
  reviews?: Review[];
  averageRating?: number;
  flavors?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
