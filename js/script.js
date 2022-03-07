
    const btn = document.querySelector('#btn');
    const content = document.querySelector('.content');
    const modal = document.querySelector('.content-modal');
    const esc = document.querySelector('.esc')

btn.addEventListener('click', ()=>{
    
    content.classList.toggle('active');
    modal.classList.toggle('invisible')
    
    
    
});

esc.addEventListener('click', ()=>{
    content.classList.toggle('active');
    modal.classList.toggle('invisible')
})