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
