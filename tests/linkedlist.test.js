const { expect } = require("@jest/globals")
const LinkedList = require('../linkedlist')


describe('#linkedlist', () => {
    test('adding to head of linkedlist', () => {
        const ll = new LinkedList()
        ll.append(10);
        expect(ll.head.value).toBe(10)
    });

});
