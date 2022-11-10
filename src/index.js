// Your code here
console.log("likeness")

const moviePoster = document.getElementById("poster")
const movieTitle = document.getElementById("title")
const movieRuntime = document.getElementById("runtime")
const showtime = document.getElementById("showtime")
const availTickets = document.getElementById("ticket-num")
const divPoster = document.getElementById("div-poster")
const movieList = document.getElementById("films-list")
const card = document.getElementById("card")
const btn = document.getElementById("buy-ticket");
const thingthing =document.getElementById("showing")
let movieId = 1


btn.addEventListener ("click", async () => {
    let tickets = ticket.capacity - ticket.tickets_sold
    p.textContent = tickets + " remaining"
    let req = await fetch(`http://localhost:3000/films/`);
})

const newPoster = async () => {
    let req = await fetch("http://localhost:3000/films");
    let res = await req.json()
    res.forEach ((poster) => {
        let img = document.createElement ("img")
        img.src = poster.poster
        divPoster.append(img)
    })
}
newPoster()

const filmTime = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    res.forEach ((time) => {
        showtime.innerText = time.showtime
        movieTitle.innerText = time.title
        movieRuntime.innerText = time.runtime
        thingthing.append(time)
    })
}
filmTime()


const sideBarMovie =  async() => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    res.forEach ((movies) => {
        let li = document.createElement("li")
        li.innerText = movies.title
        movieTitle.innerText = movies.title
        movieList.append(li)
    })
}
sideBarMovie()
