const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');



describe('methods', () => {
    it('Gets the name, id, email, and role of employee entered', () => {
        const engineer = new Engineer('Becky', '9876', 'becky@mail.com', 'beckygithub');
        expect(engineer.getName()).toBe('Becky');
        expect(engineer.getId()).toBe('9876');
        expect(engineer.getEmail()).toBe('becky@mail.com');
        expect(engineer.getGitHub()).toBe('beckygithub');
        expect(engineer.getRole()).toBe('Engineer');
    });
});


