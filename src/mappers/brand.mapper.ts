import Brand from "../model/brand.model"

export default function (body: any): Brand {
  return {
    id: 0,
    name: body.name
  }
}
