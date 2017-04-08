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

        describe('`Foo.baz` prototype method', function() {
            it('should exist', function() {
                expect(newFooInstance.baz).toBeDefined();
            });

            describe('when invoked', function() {
                var consoleMessage;

                beforeEach(function() {
                    consoleMessage = 'Crazy flying machines';
                    console.log = jasmine.createSpy('log');
                });

                it('should console.log `Working!`', function() {
                    newFooInstance.baz();
                    expect(console.log).toHaveBeenCalledWith(consoleMessage);
                });
            });
        });
    });
});
