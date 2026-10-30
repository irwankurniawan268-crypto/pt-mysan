// smooth scroll untuk menu
document.querySelectorAll('.nav-menu a').forEach(item=>{
    item.addEventListener('click',function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    })
})