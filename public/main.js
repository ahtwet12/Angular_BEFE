//Author : Ánh Tuyết Dư
const topMenu = document.getElementById('atd-top-menu')
const toggleTopMenuIcon = document.getElementById('atd-toggle-top-menu-icon')


document.addEventListener('click' , (e) =>{
    if(toggleTopMenuIcon.contains(e.target)){
        //click to toggle top menu icon
        topMenu.classList.toggle('atd-topmenu-expanded')
        topMenu.classList.toggle('hidden')

    }else{
        //click outside bên ngoài khung
       if(topMenu.classList.contains('atd-topmenu-expanded')){
            topMenu.classList.remove('atd-topmenu-expanded')
            topMenu.classList.add('hidden')

       }

    }
})