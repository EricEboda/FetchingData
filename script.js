fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then( listItems => addToSite(listItems));

function addToSite(lists){

    let currentList = document.getElementById('list');
    lists.forEach(list => {
    let x = document.createElement('li');
    x.innerText= list;
    currentList.appendChild(x); 
    })
}

function saveContent(){
    let actualContent = document.getElementById('contentValue')[0].value;

    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
    method: 'POST',
    body: JSON.stringify({message: actualContent})
    }).then(function (response) {
        if (response.status == 200) {
        console.log("Ok!")
    }   else {console.log("Oh no!")}
    })
}

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => console.log(data))

if (localStorage.getItem('test') == "key") {
  console.log("It's there!")
} else {
  localStorage.setItem('test', 'key')
}