const { it, expect } = require('@jest/globals');
const Employee = require('../lib/employee');

describe('Properties', () => {
    it('Gets the name of employee entered', () => {
        const employee = new Employee('Erika');
        expect(employee).toBe('Erika');
    })
})


describe('methods', () => {
    it('Gets the name, id, email, and role of employee entered', () => {
        const employee = new Employee('Erika', '1234', 'erika@mail.com');
        expect(employee.getName()).toBe('Erika');
        expect(employee.getId()).toBe('1234');
        expect(employee.getEmail()).toBe('erika@mail.com');
        expect(employee.getRole()).toBe('Employee');
    });
});

