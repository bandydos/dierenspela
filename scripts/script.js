$(document).ready(() => {
    $('#p-message').hide();
    $('#table-animals').hide();
    $('#btn-submit').click(() => {
        const animals = getAnimals();
        console.log(animals);

        if (checkAnimal()) {
            succeed();
        }
        else {
            fail();
        }
    })
})

var animals = [];

const getAnimals = () => {
    const iAnimal = document.getElementById('input-animal').value;
    animals.push(iAnimal);

    return animals;
}

const checkLetters = () => {
    const lastAnimal = animals[animals.length - 2];
    const newAnimal = animals[animals.length - 1];

    if (lastAnimal[lastAnimal.length - 1] == newAnimal[0]) {
        return true;
    }

    return false;
}

const checkUnique = () => {
    const newAnimal = animals[animals.length - 1];

    for (let i = 0; i < animals.length - 1; i++) {
        if (newAnimal == animals[i]) {
            return false;
        }
    }

    return true;
}

const checkAnimal = () => {
    if (animals.length < 2) { // When there is only 1 animal in array.
        return true;
    }
    else {
        if (checkLetters() && checkUnique()) {
            return true;
        }
    }

    return false;
}

const succeed = () => {
    $('#table-animals tbody tr').remove();
    $('#p-message').hide();
    $('#table-animals').show();
    for (let i = 0; i < animals.length; i++) {
        $('#tbody-animals').append(`<tr><td>${i + 1}</td><td>${animals[i]}</td></tr>`);
    }
}

const fail = () => {
    $('#table-animals tbody tr').remove();
    $('#table-animals').hide();
    $('#p-message').show();
    $('#p-message').text('Double or wrong letter.')

    animals = [];
}