import User from "../model/users.model";
import client from './client'

async function create(user: User) {
  let sql = 'INSERT INTO users (name, surname, email, password, gender) VALUES($1, $2, $3, $4, $5)'
  await client.query(sql, [ user.name, user.surname, user.email, user.password, user.gender])
}

async function findAll(): Promise<User[]> {
  let sql = 'SELECT * FROM users;'
  let users = await client.query(sql)
  return users.rows
}

async function findByEmail(email: string): Promise<User> {
  let sql = 'SELECT * FROM users WHERE email=$1;'
  let users = await client.query(sql, [email])
  return users.rows[0]
}

async function update(id: number, user: User) {

}

async function deleteOne(id: number) {
  
}

export default {
  create,
  findAll,
  findByEmail
}