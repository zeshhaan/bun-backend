import { Elysia } from "elysia";
import { db } from "../db";
import { products } from "../db/schema";

const getAllProducts = async () => {
  return await db.query.products.findMany();
};

const createProduct = async ({ body }) => {
  return await db.insert(products).values(body);
};

const app = new Elysia()
  .get("/products", getAllProducts)
  .post("/product", createProduct)
  .listen(3000);

console.log(`💓 Elysia running at ${app.server?.hostname}:${app.server?.port}`);
