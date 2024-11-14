export interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
