class $Array {
    constructor(public array: Array<any> = []) {
    }

    first = () => {
        return this.array[0];
    };
    last = () => {
        return this.array[this.array.length - 1];
    };
    findElIndex = (elm: any) => {
        let index = -1;
        this.array.forEach((e, index_) => {
            if (e === elm)
                index = index_
        });
        return index;
    };
    has = (elm: any) => {
        return this.findElIndex(elm) > -1;
    };

    delete = (elm: any) => {
        let nbrDeleted = 0;
        let index = this.findElIndex(elm);
        if (index > -1) {
            this.array.splice(index, 1);
            nbrDeleted++;
            nbrDeleted = nbrDeleted + this.delete(elm)
        }
        return nbrDeleted;
    };
    elementsNotIn = (array_filter: Array<any>) => {
        let _this = this.clone();
        if (Array.isArray(array_filter))
            array_filter.forEach(e => {
                (new $Array(_this)).delete(e)
            });
        return _this;
    };
    clone = () => {
        return this.array.slice(0);
    };

}

class $Object {
    constructor(public object: Object) {
    }
    clone(obj: Object): Object {
        return Object().assign({}, obj);
    }
}

const jsHelper = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue = null, options = []) {
        // @ts-ignore
        window.$Object = $Object;
        // @ts-ignore
        window.$Array = $Array;

    }
};

export default jsHelper;

