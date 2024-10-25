import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-5 py-7">
      <a
        href="#"
        className="px-3 py-4 rounded-md hover:bg-white/5 cursor-pointer"
      >
        <h1 className="text-2xl font-bold">Error 404</h1>
      </a>
      <div className="border-4 px-3 py-4 rounded-full border-white">
        <input
          type="text"
          className="appearance-none border-none bg-transparent focus:outline-none placeholder:text-white/70"
          placeholder="Buscar..."
        />
        <button>Hola</button>
      </div>
    </div>
  );
};
