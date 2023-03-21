function loadKanye() {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayData(data))
}

function displayData(data){
    console.log(data);
    document .getElementById('kanye-id').innerText=data.quote;
}