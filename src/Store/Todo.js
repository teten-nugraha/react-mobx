import { extendObservable } from 'mobx'
import uuid from 'node-uuid'

// Todo Item
export class Todo {
    parent = null
    constructor(parent) {
        extendObservable(this,{
            data: {},
            isLoading: false
        })
        this.parent = parent
    }
    update(data) {
        this.data = data
    }
}

// Todo Store
export class TodoStore {
    constructor() {
        extendObservable(this, {
            items: [],
            isLoading: false
        })
    }
}