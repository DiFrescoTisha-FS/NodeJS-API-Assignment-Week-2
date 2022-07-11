const { getCharacter, getCharacterById } = require('./service');

jest.mock('./service');
describe("Character Service Tests", () => {
    test('As a user I want to get characters from service', async () => {
        const result = await getCharacter();
        expect(result.data.results[0].name).toEqual("Rick Sanchez");    
        expect(result.data.results[1].gender).toEqual("Male");
        expect(result.data.results[2].status).toEqual("Alive");
    });

    test('As a user I should return a character object by Id', async () => {
        const result = await getCharacterById(4);
        expect(result.data.results.name).toEqual('Beth Smith');
        expect(result.data.results.status).toEqual('Alive');
        expect(result.data.results.species).toEqual('Human');
        expect(result.data.results.gender).toEqual('Female');

    });
});