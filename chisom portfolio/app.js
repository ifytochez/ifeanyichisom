const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navcontainer .navbar li');

window.addEventListener('scroll', () => {
    let current = '';


    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })
    navLi.forEach( li => {
        li.classList.remove('activee');
        if(li.classList.contains(current)){
            li.classList.add('activee')
        }
    })
})



// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a'). forEach(
//     link => {
//         if(link.href.includes(`${activePage}`)){
//            link.classList.add('active');
//         }
       
//     }
// );




// const sections = document.querySelectorAll("section");
// const navContainer = document.querySelector("nav .nav-menu li a");



// window.addEventListener('scroll', ()=>{
//   let current = "";
//   sections.forEach(section =>{
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if(pageYoffset >= (sectionTop - sectionHeight/3 )){
//       current = section.getAttribute("id");
//     }
//   })
//   navContainer.forEach(li =>{
//     li.classList.remove('active');
//     if(li.classList.contains(current)){
//       li.classList.add('active')
//     }
//   })
// })