const {getCharacter} = require('./service');

// jest.mock('./service');
describe("Character Service Tests", () => {
    test('As a user I want to get characters from service', async () => {
        const result = await getCharacter();
        expect(result.data.results[0].name).toEqual("Rick Sanchez");
        expect(result.data.results[1].name).toEqual("Morty Smith");
    });
});