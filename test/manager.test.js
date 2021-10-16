const { it, expect } = require('@jest/globals');
const Manager = require('../lib/manager');

describe('properties', () => {
    it('Sets the name, id and email of new manager entered', () => {
        const manager = new Manager('Laura', '7777', 'laura@mail.com', '212');
        expect(manager.name).toBe('Laura');
        expect(manager.email).toBe('laura@mail.com');
        expect(manager.id).toBe('7777');
        expect(manager.officeNumber).toBe('212');
    })
});



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