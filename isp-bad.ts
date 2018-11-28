interface ICRUD<T>{
    read():T;
    create(obj:T);
    update(obj:T);
    delete(obj:T);
}

export class WriteDataAccess implements ICRUD<object>{
    create(obj: object) {
        /* ... */
    }
    read(): object {
        throw new Error("Method not implemented.");
    }
    update(obj: object) {
        /* ... */
    }
    delete(obj: object) {
        /* ... */
    }
}

export class ReadDataAccess implements ICRUD<object>{
    create(obj: object) {
        throw new Error("Method not implemented.");
    }
    read(): object {
        return { anyProp: true};
    }
    update(obj: object) {
        throw new Error("Method not implemented.");
    }
    delete(obj: object) {
        throw new Error("Method not implemented.");
    }
}
