import Home from './Home';
import RestaurantMenu from './RestaurantMenu';
import { IMenuItem } from '../components/MenuItem.tsx/types';
import { foodImage } from '../components/MenuItem.tsx';

const menuItems: IMenuItem[] = [
    {
      id: '1',
      imageSrc: foodImage,
      title: 'Pizza',
      price: '$10',
      description: 'Delicious pizza with various toppings.',
      weight: '400gm',
    },
    {
      id: '2',
      imageSrc: foodImage,
      title: 'Burger',
      price: '$5',
      description: 'A classic burger with fries.',
      weight: '250gm',
    },
    {
      id: '3',
      imageSrc: foodImage,
      title: 'Sushi',
      price: '$15',
      description: 'Fresh sushi rolls with wasabi and soy sauce.',
      weight: '350gm',
    },
    {
      id: '4',
      imageSrc: foodImage,
      title: 'Pasta',
      price: '$8',
      description: 'Homemade pasta with tomato sauce and parmesan cheese.',
      weight: '300gm',
    },
    {
      id: '5',
      imageSrc: foodImage,
      title: 'Salad',
      price: '$6',
      description: 'A healthy mix of fresh vegetables and dressing.',
      weight: '200gm',
    },
  ];

export { Home, RestaurantMenu, menuItems };