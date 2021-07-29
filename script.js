//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
const numberOfInvFields = e => {
    let invNumber = e.target.value;
    let i = 0;
    const addFields = document.createElement('p');
        addFields.innerText = `${invNumber}`;
    while (i < invNumber) {
        document.body.append(addFields);
        i++;
    }
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',numberOfInvFields);
document.querySelector('#medButton').addEventListener('click',numberOfInvFields);
document.querySelector('#lgButton').addEventListener('click',numberOfInvFields);
document.querySelector('#hugeButton').addEventListener('click',numberOfInvFields);