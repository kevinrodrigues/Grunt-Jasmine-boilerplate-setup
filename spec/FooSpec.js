describe('Foo', function() {
    var newFooInstance,
        options;

    beforeEach(function() {
        options = {
            "window": window
        };
        newFooInstance = new Foo(options);
    });

    it('should exist', function() {
        expect(newFooInstance).toBeDefined();
    });

    describe('when invoked', function() {
        it('should invoke itself with the keyword `new`', function() {
            newFooInstance = Foo(options);
            expect(newFooInstance).toEqual(new Foo(options));
        });

        it('should set `this.options` to `options`', function() {
            expect(newFooInstance.options).toBe(options);
        });
    });
});
