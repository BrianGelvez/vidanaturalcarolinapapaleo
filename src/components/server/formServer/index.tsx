import { useState } from "react";

export function FormServer() {
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePostalCodeChange = async (e: any) => {
    const code = e.target.value;
    setPostalCode(code);

    if (code.length === 4) { // Códigos postales argentinos suelen tener 4 dígitos
      try {
        const response = await fetch(`https://api.zippopotam.us/ar/${code}`);
        const data = await response.json();

        if (data && data.places && data.places.length > 0) {
          setCity(data.places[0]["place name"]);
        } else {
          setCity("Código postal no válido");
        }
     
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setCity("Error al buscar la ciudad");
      }
    } else {
      setCity("");
    }
  };

  return {
    postalCode,
    city,
    handlePostalCodeChange,
  };
}
