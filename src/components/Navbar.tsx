import { IconSearch } from "@tabler/icons-react";

export const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center sm:justify-between px-5 py-7 flex-wrap gap-2">
      <a
        href="#"
        className="px-3 py-4 rounded-md hover:bg-white/5 cursor-pointer"
      >
        <h1 className="text-2xl font-bold">Error 404</h1>
      </a>
      <div className="flex w-full md:w-auto  items-center justify-between border-2 md:border-4 px-5 py-4 rounded-full border-white">
        <input
          type="text"
          className="appearance-none border-none bg-transparent focus:outline-none placeholder:text-white/70"
          placeholder="Buscar..."
        />
        <button>
          <IconSearch />
        </button>
      </div>
    </div>
  );
};
