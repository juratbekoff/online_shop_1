import { Router } from "express";
import categoryMapper from "../mappers/category.mapper";
import categoryService from '../service/category.service'

const router = Router()

router.get('/', (req, res) => {

  categoryService.findAll()
    .then(category => res.json(category) )
    .catch(err => res.status(500).json({ message: 'Error while retriving categories', error: err }) )

})

router.post('/', (req, res) => {
  categoryService.create(categoryMapper(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while create category', error: err }) )
})


router.delete('/:id', (req, res) => {
  categoryService.remove(+req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while delete category', error: err }) )
})

router.put('/:id', (req, res) => {
  categoryService.update(+req.params.id, categoryMapper(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while update category', error: err }))
})

export default router