import { useNavigate } from 'react-router-dom';

export default function RestaurantCard(props: { restaurant: {id: string | number; name: string; description: string; coverImage: string; } }) {
  const { id, name, description, coverImage } = props.restaurant;
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div onClick={navigateToDetails} className='min-w-[300px] md:max-w-[360px] rounded-[8px] overflow-hidden border'>
      <img loading='lazy' src={coverImage} className='object-cover overflow-hidden w-full h-40' alt='Food' />
      <div className='px-3 py-3'>
        <h2 className='text-zinc-900 text-2xl font-semibold self-center  my-auto'>{name}</h2>
        <span className='font-medium text-zinc-700'>{description}</span>
      </div>
    </div>
  );
}
