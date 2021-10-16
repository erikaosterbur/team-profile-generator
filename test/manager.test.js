const { it, expect } = require('@jest/globals');
const Manager = require('../lib/manager');



describe('methods', () => {
    it('Gets the name, id, email, and role of manager entered', () => {
        const manager = new Manager('Laura', '7777', 'laura@mail.com', '212');
        expect(manager.getName()).toBe('Laura');
        expect(manager.getId()).toBe('7777');
        expect(manager.getEmail()).toBe('laura@mail.com');
        expect(manager.getOfficeNumber()).toBe('212');
        expect(manager.getRole()).toBe('Manager');
    });
});