import './style.css'
import athkar from './assets/athkar.json'

let mainContent = document.querySelector('main');
let searchInput = document.querySelector('#search');
let athkarSection = document.querySelector('.athkar-section');
let athkarContent = document.querySelector('.athkar-content');
let sectionTitle = document.querySelector('.section-title');
let backBtn = document.querySelector('.back');
let closeDialogBtn = document.querySelector('.close-dialog');
let athkarTagsList = []

let tags = athkar.map(item => item.at)
let uniqueTags = [...new Set(tags)];
for (const a of uniqueTags) {
    let tag = document.createElement('li');
    tag.classList.add('tag');
    tag.innerText = a;
    athkarTagsList.push(tag);
    mainContent.querySelector('ul').appendChild(tag);
}


let handleSearch = (e) => {


    mainContent.innerHTML = '';
    let searchValue = e.target.value;
    let filteredCategories = [...new Set(athkar.map(item => item.at).filter(item => item.includes(searchValue)))]
    filteredCategories.forEach(t => {
        let listItem = document.createElement('li');
        listItem.classList.add('tag');
        listItem.innerText = t;
        mainContent.appendChild(listItem);
    })


}
searchInput.addEventListener('search', handleSearch)
searchInput.addEventListener('keyup', handleSearch)

mainContent.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        mainContent.classList.add('hide');
        athkarSection.classList.remove('hide');
        let thikrCategory = e.target.innerText;
        let athkarDetailsList = athkar.filter(thikr => thikrCategory === thikr.at);
        athkarContent.innerHTML = '';
        sectionTitle.innerText = thikrCategory;
        athkarDetailsList.forEach(item => {

            let athkarItem = document.createElement('p');
            athkarItem.innerText = item.thikr;

            athkarContent.appendChild(athkarItem);
        })
    }
})

backBtn.addEventListener('click', () => {
    mainContent.classList.remove('hide');
    athkarSection.classList.add('hide');
})

let closeDialog = () => {
    document.body.classList.remove('popup');
    document.querySelector('.intro').remove()
}
closeDialogBtn.addEventListener('click', closeDialog)