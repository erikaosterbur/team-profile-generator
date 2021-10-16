const { it, expect } = require('@jest/globals');
const Intern = require('../lib/intern');

describe('properties', () => {
    it('Sets the name, id and email of new intern entered', () => {
        const intern = new Intern('Angela', '5555', 'angela@mail.com', 'U of M');
        expect(intern.name).toBe('Angela');
        expect(intern.email).toBe('angela@mail.com');
        expect(intern.id).toBe('5555');
        expect(intern.school).toBe('U of M');
    })
});


describe('methods', () => {
    it('Gets the name, id, email, and role of new intern entered', () => {
        const intern = new Intern('Angela', '5555', 'angela@mail.com', 'U of M');
        expect(intern.getName()).toBe('Angela');
        expect(intern.getId()).toBe('5555');
        expect(intern.getEmail()).toBe('angela@mail.com');
        expect(intern.getSchool()).toBe('U of M');
        expect(intern.getRole()).toBe('Intern');
    });
});