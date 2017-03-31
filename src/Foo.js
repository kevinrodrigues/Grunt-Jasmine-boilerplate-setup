function Foo(options) {
    if (!(this instanceof Foo)) {
        return new Foo(options);
    }

    this.options = options;
}

