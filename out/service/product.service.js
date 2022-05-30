"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = `SELECT product.*, brand.name as brand_name, category.name as category_name
            FROM product 
            INNER JOIN brand ON brand_id = brand.id
            INNER JOIN category ON category_id = category.id;`;
        let res = yield client_1.default.query(sql);
        let products = res.rows.map(row => {
            return {
                id: row.id,
                name: row.name,
                image: row.image,
                description: row.description,
                price: row.price,
                brand: {
                    id: row.brand_id,
                    name: row.brand_name
                },
                category: {
                    id: row.category_id,
                    name: row.category_name
                }
            };
        });
        console.table(products);
    });
}
function findByCategory(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = `SELECT product.*, brand.name as brand_name, category.name as category_name
  FROM product 
  INNER JOIN brand ON brand_id = brand.id
  INNER JOIN category ON category_id = category.id WHERE category_id = $1;`;
        let res = yield client_1.default.query(sql, [id]);
        let products = res.rows.map(row => {
            return {
                id: row.id,
                name: row.name,
                image: row.image,
                description: row.description,
                price: row.price,
                brand: {
                    id: row.brand_id,
                    name: row.brand_name
                },
                category: {
                    id: row.category_id,
                    name: row.category_name
                }
            };
        });
        console.table(products);
    });
}
exports.default = {
    findAll,
    findByCategory
};
