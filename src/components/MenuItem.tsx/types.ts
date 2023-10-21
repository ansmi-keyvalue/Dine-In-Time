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