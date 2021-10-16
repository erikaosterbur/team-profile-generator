const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');

describe('properties', () => {
    it('Sets the name, id and email of new engineer entered', () => {
        const engineer = new Engineer('Becky', '9876', 'becky@mail.com', 'beckygithub');
        expect(engineer.name).toBe('Becky');
        expect(engineer.email).toBe('becky@mail.com');
        expect(engineer.id).toBe('9876');
        expect(engineer.gitHub).toBe('beckygithub');
    })
});

describe('methods', () => {
    it('Gets the name, id, email, and role of engineer entered', () => {
        const engineer = new Engineer('Becky', '9876', 'becky@mail.com', 'beckygithub');
        expect(engineer.getName()).toBe('Becky');
        expect(engineer.getId()).toBe('9876');
        expect(engineer.getEmail()).toBe('becky@mail.com');
        expect(engineer.getGitHub()).toBe('beckygithub');
        expect(engineer.getRole()).toBe('Engineer');
    });
});


