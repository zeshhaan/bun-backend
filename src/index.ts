import { Elysia } from "elysia";
import { db } from "../db";
import { products } from "../db/schema";
import { eq } from "drizzle-orm";

const getAllProducts = async () => {
  return await db.query.products.findMany();
};

const getProductById = async ({ params, set }) => {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, params.id));

  if (!product.length) {
    set.status(404);
    return "Product not found";
  }
  return product;
};

const createProduct = async ({ body }) => {
  return await db.insert(products).values(body);
};

const editProduct = async ({ params, body }) => {
  return await db.update(products).set(body).where(eq(products.id, params.id));
};

const deleteProduct = async ({ params }) => {
  return await db.delete(products).where(eq(products.id, params.id));
};

const deleteAllProducts = async () => {
  return await db.delete(products);
};

const app = new Elysia()
  .get("/products", getAllProducts)
  .get("/product/:id", getProductById)
  .post("/product", createProduct)
  .put("/product/:id", editProduct)
  .delete("/product/:id", deleteProduct)
  .delete("/products", deleteAllProducts)
  .listen(8000);

console.log(`💓 Elysia running at ${app.server?.hostname}:${app.server?.port}`);
