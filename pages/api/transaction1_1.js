import prisma from "../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await prisma.$transaction(async (prisma) => {
        await prisma.product.create({
          data: {
            product_id: 22,
            product_name: "Capitan",
            product_description: "Figura de acción",
            brand_id: 2,
            category_id: 2,
            model_year: 2023,
            list_price: 10.0,
          },
        });

        //return { product };
      });

      res.status(200).json({result});

    } catch (error) {
      await prisma.$queryRaw('ROLLBACK');
      res.status(500).json({ error: "Error al llamar la transacción" });
      console.error(error);
    } finally {
      // Cierra la conexión de Prisma
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
