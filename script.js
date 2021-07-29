//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
//Will I want to use a form element for this?
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
        document.querySelector('#fieldsGoHere').append(addFirst);
        document.querySelector('#fieldsGoHere').append(addMid);
        document.querySelector('#fieldsGoHere').append(addLast);
    }
}
//Will need to add submit button as separate function maybe?
const submitButton = () => {
    //keep this in case the if part doesn't work
    /*const buttonExists = document.getElementById("checkButton");
    const addButton = document.createElement('input');
        addButton.setAttribute('type','submit');
        addButton.setAttribute('class','checkButton');*/
    if (document.body.contains('.checkButton')) {
        const rmButton = document.querySelector('.checkButton');
        const repButton = document.createElement('input');
            addButton.setAttribute('type','submit');
            addButton.setAttribute('class','checkButton');
        rmButton.parentNode.replaceChild(repButton,rmButton);
    } else {
        const addButton = document.createElement('input');
            addButton.setAttribute('type','submit');
            addButton.setAttribute('class','checkButton');
        document.querySelector('#fieldsGoHere').append(addButton);
    }
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',submitButton);
document.querySelector('#medButton').addEventListener('click',submitButton);
document.querySelector('#lgButton').addEventListener('click',submitButton);
document.querySelector('#hugeButton').addEventListener('click',submitButton);
document.querySelector('#smButton').addEventListener('click',numberOfInvFields);
document.querySelector('#medButton').addEventListener('click',numberOfInvFields);
document.querySelector('#lgButton').addEventListener('click',numberOfInvFields);
document.querySelector('#hugeButton').addEventListener('click',numberOfInvFields);
