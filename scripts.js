const modalOverlay = document.querySelector('.modal-overlay')
const cards=document.querySelectorAll('.card')


for (let card of cards){
    card.addEventListener("click",function(){
        const videoId= card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("video").src=`${videoId}`


    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
        modalOverlay.classList.remove('active')
        modalOverlay.querySelector("video").src=""

})

