//mobile-menu
let mobileMenu = document.querySelector('.mobile-menu');
let burger = document.querySelector('.burger');
let  cancelBtn = document.querySelector('.cancel');
let liList =document.querySelector('.mobile-menu').querySelectorAll('li');
console.log(liList);
burger.addEventListener('click',(e)=>{
   mobileMenu.classList.add('click')
   document.body.style.overflow ='hidden';
});
cancelBtn.addEventListener('click', (e)=>{
   mobileMenu.classList.remove('click');
   document.body.style.overflow ='auto';
});
 liList.forEach((elm)=>elm.addEventListener('click', (e)=>{
    mobileMenu.classList.remove('click');
    document.body.style.overflow ='auto';
 }));

// skills button click
let btns = Array.from(document.querySelectorAll('.skills button'));
 btns.forEach((elm)=>{
    elm.addEventListener('click',(e)=>{
        btns.forEach(elm=>elm.classList.remove('select'));
        e.target.classList.add('select');


    let codingDiv = document.querySelector('.coding');
    let webDiv = document.querySelector('.web-design');
 console.log(codingDiv);
 console.log(e.target.dataset.class);
 if(e.target.dataset.class === codingDiv.classList[0]){
    codingDiv.classList.remove('hide')
    webDiv.classList.add('hide')
 }
 else{
    webDiv.classList.remove('hide')
    codingDiv.classList.add('hide')
 }

    })
});