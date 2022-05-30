import Category from "../model/category.model"
import client from './client'

async function create(category: Category) {
  let sql = 'INSERT INTO category (name) VALUES ($1)'
  await client.query(sql, [category.name])
}

async function findAll(): Promise<Category[]> {
  let sql = 'SELECT * FROM category'
  let result = await client.query(sql)
  return result.rows
}

async function remove(id: number) {
  let sql = 'DELETE FROM category WHERE id=$1'
  await client.query(sql, [id])
}

async function update(id: number, category: Category) {
  let sql = 'UPDATE TABLE category SET name=$1 WHERE id=$2'
  await client.query(sql, [category.name, id])
}

export default {
  create,
  findAll,
  update,
  remove
}