const nameInput =document.getElementById('username').value;
const titleInput = document.getElementById('title').value;
const contentInput = document.getElementById('content').value;

const submit = document.getElementById('submit_btn');


let storedData = JSON.parse(localStorage.getItem('blogs')) || [];
