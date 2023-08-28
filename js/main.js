
document.querySelector('button').addEventListener('click', giveArt)

function giveArt(){

fetch(`https://api.harvardartmuseums.org/image?apikey=e5ab2951-e5f4-4f44-8430-869be5c49455`)
.then(res => res.json())
.then(data => {
    const randomIndex = Math.floor(Math.random() * data.records.length);
    const randomArt = data.records[randomIndex]
    console.log(randomArt)
    document.querySelector('img').src = randomArt.baseimageurl
})
.catch(err => {
    console.log(`error ${err}`)
});
 
}