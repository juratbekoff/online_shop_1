"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_mapper_1 = __importDefault(require("../mappers/category.mapper"));
const category_service_1 = __importDefault(require("../service/category.service"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    category_service_1.default.findAll()
        .then(category => res.json(category))
        .catch(err => res.status(500).json({ message: 'Error while retriving categories', error: err }));
});
router.post('/', (req, res) => {
    category_service_1.default.create((0, category_mapper_1.default)(req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json({ message: 'Error while create category', error: err }));
});
router.delete('/:id', (req, res) => {
    category_service_1.default.remove(+req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json({ message: 'Error while delete category', error: err }));
});
router.put('/:id', (req, res) => {
    category_service_1.default.update(+req.params.id, (0, category_mapper_1.default)(req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json({ message: 'Error while update category', error: err }));
});
exports.default = router;
