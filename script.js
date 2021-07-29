//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
const numberOfInvFields = e => {
    let invNumber = e.target.value;
    const addFields = document.createElement('p');
        addFields.innerText = `${invNumber}`;
        addFields.className = 'newField';
    document.body.append(addFields);
//Trying to remove old added elements so they don't keep stacking if button pushed more than once
    const el = document.getElementsByClassName('newField');
        el.remove();
    /*let i = 1;
    while (i < invNumber) {

    }*/
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',numberOfInvFields);
document.querySelector('#medButton').addEventListener('click',numberOfInvFields);
document.querySelector('#lgButton').addEventListener('click',numberOfInvFields);
document.querySelector('#hugeButton').addEventListener('click',numberOfInvFields);