export type IMenuItem = {
  id: string;
  imageSrc: string;
  title: string;
  price: string;
  description: string;
  weight: string;
};

export type IMenuItemProps = {
  item: IMenuItem;
  onAddItem: (itemId: string) => void;
};

// TODO: change the location of this type definition
export type IOrderItem = {
  id: string;
  imageSrc: string;
  restaurant: string;
  price: string;
  location: string;
  orderTimestamp: string;
  deliveryTimestamp: string;
  summary: string;
  amount: string;
};
