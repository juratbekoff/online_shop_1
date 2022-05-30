import Category from "../model/category.model";

export default function (body: any): Category {
  return {
    id: 0,
    name: body.name
  }
}