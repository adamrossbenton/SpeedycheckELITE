//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
const numberOfInvFields = e => {
    let invNumber = e.target.value;
    const addText = document.createElement('p');
        addText.innerText = "Enter the investigator names in the fields below:";
    for (let n = 0; n < invNumber; n++) {
        const addFirst = document.createElement('INPUT');
            addFirst.placeholder = "First";
        const addMid = document.createElement('INPUT');
            addMid.placeholder = "Middle";
        const addLast = document.createElement('INPUT');
            addLast.placeholder = "Last";
        document.querySelector('body').append(addFirst);
        document.querySelector('body').append(addMid);
        document.querySelector('body').append(addLast);
    }
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',numberOfInvFields);
document.querySelector('#medButton').addEventListener('click',numberOfInvFields);
document.querySelector('#lgButton').addEventListener('click',numberOfInvFields);
document.querySelector('#hugeButton').addEventListener('click',numberOfInvFields);