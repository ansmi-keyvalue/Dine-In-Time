import { useState } from "react";

export default function HomePage () {

  const [restaurantName, setRestaurantName] = useState('');

  const handleLogin = () => {
    // handle login logic here
  };

  const handleSignUp = () => {
    // handle sign up logic here
  };

  const handleRestaurantNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(event?.target?.value);
  };

  const handleSearch = () => {
    // handle search logic here
  };

  const handlePrivacyClick = () => {
    // handle privacy click logic here
  }

  const handlePolicyClick = () => {
    // handle privacy click logic here
  }

  const handleTermsAndServicesClick = () => {
    // handle privacy click logic here
  }

  return (
    <main className="bg-white flex flex-col">
      <header className="justify-between items-start self-center flex w-full max-w-[1420px] gap-2 mt-12 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="flex">
          <h1 className="text-5xl self-center my-auto max-md:text-4xl" aria-label="Pizza">
            🍕
          </h1>
          <h2 className="text-zinc-900 text-2xl font-semibold self-center w-[146px] my-auto">DineInTime</h2>
        </div>
        <nav className="flex w-[215px] justify-between gap-5">
          <button className="text-zinc-900 text-right text-lg font-semibold leading-[175%]" onClick={handleLogin}>
            Login
          </button>
          <div className="bg-red-500 self-stretch flex w-[110px] max-w-full flex-col px-5 py-4 rounded-[41.097px]">
            <button className="text-white text-center text-lg font-semibold leading-[175%] self-center -mb-0.5" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </nav>
      </header>
      <section className="self-center w-full max-w-[1414px] mt-32 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full">
            <div className="flex flex-col mt-2 max-md:max-w-full max-md:mt-12">
              <h1 className="text-zinc-900 text-7xl font-bold leading-[108.33%] max-w-[668px] max-md:max-w-full max-md:text-4xl">
                Grab Your Favorite Food In Time
              </h1>
              <p className="text-zinc-900 text-xl leading-[166.67%] tracking-tight w-[683px] max-w-full mt-9">
                The early access to your favourite food. Why starve when you have us. You hunger partner. Pre-book your food now for avoid the waiting time.
              </p>
              <div className="bg-neutral-100 flex w-[530px] max-w-full items-start justify-between gap-5 mt-16 pl-5 pr-2 py-2 rounded-[63.929px] max-md:flex-wrap">
                <input className="bg-neutral-100 text-base font-medium self-center my-auto w-[60%] p-2 focus:outline-none focus:bg-transparent" type="text" id="name" placeholder="Type restaurant name" value={restaurantName} onChange={handleRestaurantNameChange} />
                <div className="bg-red-500 flex w-[166px] flex-col -mt-px px-5 py-5 rounded-[63.929px]">
                  <button className="text-white text-xl font-semibold self-center -mb-px" onClick={handleSearch}>
                    Search Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full">
            <div className="items-center bg-orange-100 flex grow flex-col w-full mx-auto pt-4 pb-10 px-5 rounded-3xl max-md:max-w-full max-md:mt-12">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56ec4c6f-3931-4542-840d-7bea5eafda09?apiKey=5af04c6e253948b1ba4ced76716b2c9d&"className="aspect-[1.64] object-cover object-center w-[543px] overflow-hidden max-w-full ml-1.5 mb-3" alt="Food" />
            </div>
          </div>
        </div>
      </section>
      <section className="self-center flex w-full max-w-[1495px] flex-col mt-32 max-md:max-w-full">
        <div className="items-center self-center flex w-[710px] max-w-full flex-col ml-6 px-5">
          <h1 className="text-red-500 text-center text-5xl font-bold leading-[66.212px] tracking-tight lowercase self-stretch w-full -mr-5 max-md:text-4xl">
            <span className="font-semibold text-zinc-900 capitalize ">More Than </span>
            <span className="font-bold text-red-500">1000</span>
            <span className="font-semibold text-zinc-900"> DISHES TO ORDER!</span>
          </h1>
          <p className="text-zinc-900 text-xl leading-[166.67%] tracking-tight self-center mt-5 max-md:max-w-full">Welcome to The Biggest Network of Food Dinein</p>
        </div>
        <div className="items-center self-stretch flex grow flex-col max-md:max-w-full">
          <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/205c56a5-e0cc-41ba-8124-23b5c1f76b5c?apiKey=5af04c6e253948b1ba4ced76716b2c9d&"className="aspect-[2.57] object-cover object-center w-full justify-center items-start overflow-hidden self-center max-md:max-w-full" alt="Food" />
          <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c30f7fec-4fb0-4dd1-a239-8cf7a4868150?apiKey=5af04c6e253948b1ba4ced76716b2c9d&"className="aspect-[3.02] object-cover object-center w-full overflow-hidden self-center max-w-[1405px] grow mt-56 max-md:max-w-full max-md:mt-52" alt="Food" />
        </div>
      </section>
      <footer className="bg-black flex justify-between p-6 px-10 mt-20">
        <div className="text-gray-400 font-medium">© 2023 pizza.All right reserved</div>
        <nav className="flex gap-5 text-gray-400">
          <button onClick={handlePrivacyClick}>
            Privacy
          </button>
          <button onClick={handlePolicyClick}>
            Policy
          </button>
          <button onClick={handleTermsAndServicesClick}>
            Terms & Services
          </button>
        </nav>
      </footer>
    </main>
  );
}