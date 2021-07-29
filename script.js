//Function to add number of investigator name fields (first, middle, last, suffix) based on button pushed
const numberOfInvFields = e => {
    let invNumber = e.target.value;
    for (let n = 0; n < invNumber; n++) {
        const addFirst = document.createElement('INPUT');
            addFirst.placeholder = "First";
        const addMid = document.createElement('INPUT');
            addMid.placeholder = "Middle";
        const addLast = document.createElement('INPUT');
            addLast.placeholder = "Last";
        document.querySelector('#fieldColumn').append(addFirst);
        document.querySelector('#fieldColumn').append(addMid);
        document.querySelector('#fieldColumn').append(addLast);
    }
}

//Make the buttons do stuff
document.querySelector('#smButton').addEventListener('click',numberOfInvFields);
document.querySelector('#medButton').addEventListener('click',numberOfInvFields);
document.querySelector('#lgButton').addEventListener('click',numberOfInvFields);
document.querySelector('#hugeButton').addEventListener('click',numberOfInvFields);