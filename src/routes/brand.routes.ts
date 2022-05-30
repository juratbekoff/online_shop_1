import { Router } from "express";
import brandMapper from "../mappers/brand.mapper";
import brandService from "../service/brand.service";

const router = Router()

// brands
router.get('/', (req, res) => {

  brandService.findAll()
    .then(brands => res.json(brands) )
    .catch(err => res.status(500).json({ message: 'Error while retriving brands', error: err }) )

})

router.post('/', (req, res) => {
  brandService.create(brandMapper(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while create brand', error: err }) )
})

router.delete('/:id', (req, res) => {
  brandService.remove(+req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while delete brand', error: err }) )
})

router.put('/:id', (req, res) => {
  brandService.update(+req.params.id, brandMapper(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while update brand', error: err }))
})

export default router