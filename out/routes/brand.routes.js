"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brand_mapper_1 = __importDefault(require("../mappers/brand.mapper"));
const brand_service_1 = __importDefault(require("../service/brand.service"));
const router = (0, express_1.Router)();
// brands
router.get('/', (req, res) => {
    brand_service_1.default.findAll()
        .then(brands => res.json(brands))
        .catch(err => res.status(500).json({ message: 'Error while retriving brands', error: err }));
});
router.post('/', (req, res) => {
    brand_service_1.default.create((0, brand_mapper_1.default)(req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json({ message: 'Error while create brand', error: err }));
});
router.delete('/:id', (req, res) => {
    brand_service_1.default.remove(+req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json({ message: 'Error while delete brand', error: err }));
});
router.put('/:id', (req, res) => {
    brand_service_1.default.update(+req.params.id, (0, brand_mapper_1.default)(req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json({ message: 'Error while update brand', error: err }));
});
exports.default = router;
