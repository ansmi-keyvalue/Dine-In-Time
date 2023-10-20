import { IMenuItemProps } from "./types";

export default function MenuItem({item: {id, imageSrc, description, price, title, weight}, onAddItem}: IMenuItemProps) {
  return (
    <section className="flex flex-col">
      <div className="self-stretch max-md:max-w-full">
        <div className="gap-7 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-1 max-md:mt-11">
            <img loading="lazy" srcSet={imageSrc} className="aspect-[1.28] object-cover object-center w-full overflow-hidden" alt="Food Image" />
              <button className="bg-orange-600 rounded-md p-3 w-[45%] self-start text-white mt-3" onClick={() => onAddItem(id)}>ADD</button>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-3xl font-semibold mt-7">{title}</h1>
              <h2 className="text-black text-3xl font-semibold mt-6">{price}</h2>
              <p className="text-black text-3xl  max-w-full mt-11">Description: {description}</p>
              <div className="text-black text-3xl opacity-70 mt-5">{weight}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}