'use-strict';

const btnOpenModal = document.querySelectorAll('.show-modal')
console.log(btnOpenModal)
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", function () {
        document.querySelector('.modal').classList.remove('hidden')
        document.querySelector('.overlay').classList.remove('hidden')
    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')
})

document.addEventListener('keydown', function (e) {
    if (e.key == "Escape" && !document.querySelector('.modal').classList.contains('hidden')) {
        document.querySelector('.modal').classList.add('hidden')
        document.querySelector('.overlay').classList.add('hidden')
    }
})