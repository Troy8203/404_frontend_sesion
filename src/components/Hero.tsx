import Button from "./Button";

export const Hero = () => {
  return (
    <div className="px-5 py-7 flex items-center justify-center">
      <div className="max-w-7xl flex flex-col-reverse sm:flex-row flex-nowrap gap-5 justify-center items-center">
        <div className="w-2/3  flex flex-col gap-6 p-5">
          <div className="flex flex-col flex-nowrap gap-2">
            <h3 className="text-4xl md:text-7xl font-bold uppercase">
              Titulo o leyenda
            </h3>
            <h4 className="text-base md:text-2xl text-white/70">
              Escrito por: Alan Arnes
            </h4>
          </div>
          <div className="flex flex-row flex-nowrap gap-3 justify-start">
            <Button color="orange" content="La Paz" active onClick={() => {}} />
            <Button
              color="purple"
              content="Hospitales"
              active
              onClick={() => {}}
            />
          </div>
          <p className="text-white/80 text-sm md:text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            excepturi sint sequi optio illum, beatae neque nobis perspiciatis
            illo, laborum vitae enim dolorum repudiandae ea sed numquam ipsa
            perferendis iure natus quod ipsam assumenda doloremque odio
            laboriosam. Fuga distinctio corporis reiciendis enim aliquam?
            Officiis, minima?
          </p>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-auto rounded-2xl"
            src="https://i1.sndcdn.com/avatars-sA0v3EaxDeGspAzF-2pBdNQ-t240x240.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
