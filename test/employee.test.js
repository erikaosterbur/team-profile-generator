const { it, expect } = require('@jest/globals');
const Employee = require('../lib/employee');

describe('properties', () => {
    it('Sets the name, id and email of new employee entered', () => {
        const employee = new Employee('Erika', '1234', 'erika@mail.com');
        expect(employee.name).toBe('Erika');
        expect(employee.email).toBe('erika@mail.com');
        expect(employee.id).toBe('1234');
    })
});

describe('methods', () => {
    it('Gets the name, id, email, and role of new employee entered', () => {
        const employee = new Employee('Erika', '1234', 'erika@mail.com');
        expect(employee.getName()).toBe('Erika');
        expect(employee.getId()).toBe('1234');
        expect(employee.getEmail()).toBe('erika@mail.com');
        expect(employee.getRole()).toBe('Employee');
    });
});

