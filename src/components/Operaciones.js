import React, { useState } from "react";

const Operaciones = () => {
  //const [result, setResult] = useState("");
  const [products, setProducts] = useState([]);

  const handleTransaction = async () => {
    try {
      const response = await fetch("/api/transaction1_1");

      if (response.ok) {
        const data = await response.json();
        //setResult(data.result);
        //setProducts(data.products);
        //setStaffs(data.staffs);
      } else {
        console.error("Error al llamar la transaccion");
      }
    } catch (error) {
      console.error("Error en la transaccion:", error);
    }
  };

  const handleTransaction2 = async () => {
    try {
      const response = await fetch("/api/transaction1_2");

      if (response.ok) {
        const data = await response.json();
        //setResult(data.result);
        //setProducts(data.products);
        //setStaffs(data.staffs);
      } else {
        console.error("Error al llamar la transaccion");
      }
    } catch (error) {
      console.error("Error en la transaccion:", error);
    }
  };

  const handleViewProducts = async () => {
    try {
      const response = await fetch("/api/search_products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        console.error("Error al consultar la vista");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  // -----------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <button
        onClick={handleTransaction}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Transaccion
      </button>
      <button
        onClick={handleTransaction2}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Transaccion 2
      </button>
      

      <button
        onClick={handleViewProducts}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buscar productos
      </button>
      {products.length > 0 && (
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.product_id}>
                <td className="border px-4 py-2">{product.product_id}</td>
                <td className="border px-4 py-2">{product.product_name}</td>
                <td className="border px-4 py-2">
                  {product.product_description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Operaciones;
