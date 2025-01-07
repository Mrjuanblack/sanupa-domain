export interface Subcategory {
    id: number
    categoryId: number
    name: string
    imgPath: string | null
    active: boolean
}

// Images will be included in the file property of the request
export interface NewSubcategoryRequest {
    categoryId: number
    name: string
}

export class SubcategoryEntity implements Subcategory {
    constructor(public id: number, public categoryId: number, public name: string, public imgPath: string|null, public active: boolean) {}
}