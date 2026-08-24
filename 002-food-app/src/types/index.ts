export interface Category {
  id: string;
  name: string;
  imageUri: string;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  ratingCount: string;
  address: string;
  coverImageUri: string;
  logoUri: string;
  deliveryTimeMin: number;
  deliveryTimeMax: number;
  deliveryFee: string;
  deliveryFeeNote: string;
  imageUri: string;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  price: string;
  imageUri: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: "home" | "shopping-cart" | "orders" | "account";
  route: string;
}

export interface DeliveryOption {
  id: string;
  label: string;
  timeRange: string;
  note: string;
}
