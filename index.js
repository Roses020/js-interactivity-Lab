console.log('hello world');
// STEP 1: Grab our HTML element 

const form = document.querySelector('form');
const message = document.querySelector('aside');
//let message = document.getElementById('message')



    
// STEP 2: Write our function

const addMovie =(event) => {
event.preventDefault()
const movie =document.createElement('li')
const movieTitle =document.createElement('span')
const inputfield =document.querySelector('input')
movieTitle.textContent = inputfield.value
movieTitle.addEventListener('click', crossOffMovie)
movie.appendChild(movieTitle)
const list =document.querySelector('ul')
const deleteBtn = document.createElement('button')
deleteBtn.textContent = 'x'
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)

list.appendChild(movie)

}

function deleteMovie(event){
    message.textContent = 'Movie deleted!'
    event.target.parentNode.remove()

    

} 



// STEP 3: Combine steps 1 and 2 using and event listener
// Event lister syntax
// ElementName.addEventListener('name of event type', name of function)

form.addEventListener('submit', addMovie)

function crossOffMovie(event){
event.target.classList.toggle('checked')
if(event.target.classList.contains('checked')){
    message.textContent = "movie watched!"  
}else{
    message.textContent = "movie added back"
}




}


























