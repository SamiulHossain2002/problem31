function loadFriends(){
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayFriends(data))

}
loadFriends();

function displayFriends(friends){
   // console.log(friends.results);
    const moreFriends = friends.results;
     
    const friendDiv = document.getElementById('friends');
    
    for(const friend of moreFriends) {
        console.log(friend);
        const div = document.createElement('div');
        div.classList.add('friend')



        div.innerHTML = `
            <h2>${friend?.name.title}${friend.name.first}${friend?.name.last}</h2>
            <h3>${friend?.email}</h3>
            <h4>${friend?.gender}</h4>
            <img src="${friend?.picture.large}" alt="">

        `
        friendDiv.appendChild(div)
    }

}


