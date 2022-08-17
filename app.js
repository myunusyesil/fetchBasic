// selecting buttons

const btnText = document.querySelector('#button1');
const btnJSON = document.querySelector('#button2');
const btnAPI = document.querySelector('#button3');
const table = document.querySelector('.table');
const tableHeader = document.querySelector('#table-header');

const clearBtn = document.querySelector('#clear-button');
const output = document.querySelector('#output');

btnText.addEventListener('click', getTextFile);
btnJSON.addEventListener('click', getJsonFile);
btnAPI.addEventListener('click', getApi);


clearBtn.addEventListener('click', clearData);

function getTextFile(){
    const url = "textfile.txt"
    fetch(url).then(function(response) {
        return response.text();
    }).then(function(data){
        console.log(data);
        output.innerHTML = data;
    }).catch(function(err) {
        console.log(err);
    })
}

function clearData () {
    output.innerHTML = '';
}

function getJsonFile() {
    const jsonUrl = "article.json";
    
    fetch(jsonUrl).then(function(response){
        return response.json();
    }).then(function(arr){
        console.log(arr);
        
        let showArray = arr.map(function(item) {
            return `
                    <li> Title: ${item.title}</li>
                    <li> Body: ${item.body}</li>
            `
        })
        showArray = showArray.join("");
        output.innerHTML = showArray;
    })
}

function getApi() {
    const apiUrl = "https://api.github.com/users";
    
    fetch(apiUrl).then(function(response){
        return response.json();
    }).then(function(arr){
        console.log(arr);
        
        let showArray = arr.map(function(item) {
            return `
            <a href="${item.html_url}">
                <div class="users" >
                    <li class="login"> User Name: ${item.login}</li>
                    <img width="100px" src="${item.avatar_url}" alt="${item.login} avatar">
                </div>
            </a>
            `
        })
        showArray = showArray.join("");
        output.innerHTML = showArray;

    })

}