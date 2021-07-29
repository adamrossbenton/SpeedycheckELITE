//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
const numberOfInvFields = e => {
    let invNumber = e.target.value;
    const addFields = document.createElement('p');
        addFields.innerText = `${invNumber}`;
    document.querySelector('body').append(addFields);
    /*let i = 1;
    while (i < invNumber) {

    }*/
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',numberOfInvFields)