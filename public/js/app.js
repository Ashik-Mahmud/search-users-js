/* selector  */

const contentWrapper = document.querySelector(".content-wrapper"),
    searchInput = document.querySelector("#search-terms"),
    templateCard = document.querySelector('[data-template-card]');

let usersArr = [];
// work with search bar 
searchInput.addEventListener('input', function (e) {
    let searchTerms = e.target.value.toLowerCase();
    usersArr.forEach(userArr => {
        let isHide = userArr.name.toLowerCase().includes(searchTerms) || userArr.email.toLowerCase().includes(searchTerms);
        userArr.element.classList.toggle('hide', !isHide);

    })
})


fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {

    usersArr = users.map(user => {
        const card = templateCard.content.cloneNode(true).children[0];
        const cardHeader = card.querySelector('.header');
        const cardBody = card.querySelector('.body');
        const cardAvatar = card.querySelector('.avatar');
        cardHeader.innerHTML = user.name;
        cardBody.innerHTML = user.email;
        cardAvatar.innerHTML = user.name.split('')[0];
        contentWrapper.append(card)
        card.href = 'mailto:'+user.email;

        return {
            name: user.name,
            email: user.email,
            element: card
        };

    })


})