interface IDbRead<T>{
    read():T;
}

interface IDbCommand<T>{
    create(obj:T);
    update(obj:T);
    delete(obj:T);
}

export class WriteDataAccess implements IDbCommand<object>{
    create(obj: object) {
        /* ... */
    }
    update(obj: object) {
        /* ... */
    }
    delete(obj: object) {
        /* ... */
    }
}

export class ReadDataAccess implements IDbRead<object>{
    read(): object {
        return { anyProp: true};
    }
}