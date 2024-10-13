import { TbCircleNumber1Filled } from "react-icons/tb";

export default function Form() {
  return (
    <div className="w-full flex flex-col p-4 gap-4">
      <div className="w-full p-2 flex flex-row items-center gap-4 rounded-md bg-white">
        <TbCircleNumber1Filled className="text-green-primary" size={36} />
        <p className="text-black font-semibold">Datos de contacto</p>
      </div>
      <div className="w-full px-2 py-4 flex flex-col rounded-md bg-white">
        <form className="flex flex-col gap-4" action="">
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-700">
              Nombre *
            </label>
            <input
              type="text"
              placeholder="Nombre completo"
              className="border-[2px] p-3 rounded-md text-black"
            />
          </span>
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-700">
              Correo *
            </label>
            <input
              type="number"
              placeholder="correo electronico"
              className="border-[2px] p-3 rounded-md text-black"
            />
          </span>
          <span className="w-full flex flex-col gap-2">
            <label htmlFor="phone" className="text-slate-700">
              Teléfono *
            </label>
            <div className="flex flex-row">
              <input
                type="text"
                value="+54"
                readOnly
                className="border-[2px] border-r-0 p-3 rounded-l-md text-black bg-gray-100 w-16 text-center"
              />
              <input
                type="tel"
                id="phone"
                placeholder="Teléfono celular"
                className="border-[2px] p-3 rounded-r-md text-black flex-grow"
              />
            </div>
          </span>
        </form>
      </div>
    </div>
  );
}
