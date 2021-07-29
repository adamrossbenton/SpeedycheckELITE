//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
const numberOfInvFields = e => {
    let invNumber = e.target.value;
    /*const addText = document.createElement('p');
        addText.innerText = "Enter the investigator names in the fields below:";
    document.querySelector('body').append(addText)*/
    for (let n = 0; n < invNumber; n++) {
        const addFirst = document.createElement('INPUT');
            addFirst.placeholder = "First";
        const addMid = document.createElement('INPUT');
            addMid.placeholder = "Middle";
        const addLast = document.createElement('INPUT');
            addLast.placeholder = "Last";
        const addButton = document.createElement('input');
            addButton.setAttribute('type','submit');
            addButton.setAttribute('value','Run Background Check');
        document.querySelector('#fieldsGoHere').append(addFirst);
        document.querySelector('#fieldsGoHere').append(addMid);
        document.querySelector('#fieldsGoHere').append(addLast);
    }
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',numberOfInvFields);
document.querySelector('#medButton').addEventListener('click',numberOfInvFields);
document.querySelector('#lgButton').addEventListener('click',numberOfInvFields);
document.querySelector('#hugeButton').addEventListener('click',numberOfInvFields);