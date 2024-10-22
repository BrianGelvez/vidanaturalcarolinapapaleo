export default function InputPayment() {
    return (
      <div
        className="
          w-full
          z-10 px-6
          max-h-0
          peer-checked/mp:max-h-96
          transition-all duration-300 
          overflow-hidden
          bg-[#C003]/70 backdrop-blur-sm
          shadow-lg 
          rounded-b-md
        "
      >
        <div className="py-4 space-y-4">
          <h3 className="text-lg font-semibold">Holi</h3>
          <p>Imagenes de los medios de pago.</p>
        </div>
      </div>
    );
  }