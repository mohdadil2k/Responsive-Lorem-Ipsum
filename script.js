const navButton=document.querySelectorAll("[data-nav]")

navButton.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        navButton.forEach(btn=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})