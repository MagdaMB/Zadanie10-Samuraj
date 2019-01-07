const user = () => {
    let userName = "Mirek";
    let userAge = 16;

    function showName() {
        console.log(`czesć jestem ${userName}, ${userAge > 18 ? 'mozesz kupic piwo' : 'niemozesz kupic piwa'}`);
    }
    return showName;
}

const mirek = user();

mirek();