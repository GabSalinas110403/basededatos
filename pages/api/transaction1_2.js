import prisma from "../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await prisma.$transaction(async (prisma) => {
        
        await prisma.product.delete({
          where: {
            product_id: 22,
          },
        });

        //return { product };
      });

      res.status(200).json(result);
    } catch (error) {
      await prisma.$queryRaw("ROLLBACK");
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
