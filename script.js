fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then( listItems => addToSite(listItems));

function addToSite(lists){

    let liveList = document.getElementById('list');
    lists.forEach(list => {
    let x = document.createElement('li');
    x.innerText= list;
    liveList.appendChild(x); 
    })
}

function saveContent(){
    let actualContent = document.getElementById('mainForm')[0].value;

    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
    method: 'POST',
    body: JSON.stringify({message: actualContent})
    }).then(function (response) {
        if (response.status == 200) {
        console.log("Ok!")
    }   else {console.log("Oh no!")}
    })

    let liveList = document.getElementById('list').lastElementChild;
    let newContent = document.createElement('li');
    newContent.innerText= actualContent;
    liveList.appendChild(newContent);
    return false;
}