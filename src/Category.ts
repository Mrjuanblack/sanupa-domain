export interface Category {
    id: number
    name: string
    imgPath: string | null
    active: boolean
}

// Images will be included in the file property of the request
export interface NewCategoryRequest {
    name: string
}

export class CategoryEntity implements Category {
    constructor(public id: number, public name: string, public imgPath: string|null, public active: boolean) {}
}