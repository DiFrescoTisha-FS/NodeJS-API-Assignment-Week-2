const getCharacter = async () => {
    console.log("Fetching MOCKED Characters")
    return Promise.resolve({
        data: {
            results: [
                {
                    name: "Rick Sanchez",
                },
                {
                    gender: "Male",
                },
                {
                    status: "Alive"
                },
            ],
        },
    });
};

const getCharacterById = async (id) => {
    console.log("Fetching Mocked Character by id");
    return Promise.resolve({
        data: {
            results: 
            {
                name: "Beth Smith",
                status: "Alive",
                species: "Human",
                gender: "Female",
            },        
            
        },
    })
}

module.exports =  { getCharacter, getCharacterById };