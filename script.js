//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
const numberOfInvFields = e => {
    let invNumber = e.target.value;
    const addFields = document.createElement('p');
        addFields.innerText = `${invNumber}`;
    for (let n = 0; n < invNumber; n++) {
        document.querySelector('body').append(addFields);
    }
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',numberOfInvFields);
document.querySelector('#medButton').addEventListener('click',numberOfInvFields);
document.querySelector('#lgButton').addEventListener('click',numberOfInvFields);
document.querySelector('#hugeButton').addEventListener('click',numberOfInvFields);