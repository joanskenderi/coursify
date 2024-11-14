export interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface PaymentInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  cardHolderName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  termsAccepted: boolean;
}

export interface PaymentState {
  payment: PaymentInfo | null;
}
