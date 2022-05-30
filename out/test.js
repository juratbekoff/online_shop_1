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
const users_service_1 = __importDefault(require("./service/users.service"));
function testCreate() {
    return __awaiter(this, void 0, void 0, function* () {
        let user = {
            id: 0,
            name: "Javohirjon",
            surname: "Otanazarov",
            email: "pubg-elite@gmail.com",
            password: "max26156",
            gender: "mujjik"
        };
        yield users_service_1.default.create(user);
    });
}
function testFindAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let users = yield users_service_1.default.findAll();
        console.table(users);
    });
}
function testFindByEmail() {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield users_service_1.default.findByEmail('pubg-lite@gmail.com');
        console.log(user);
    });
}
testFindByEmail();
