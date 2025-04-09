const prevBtn = document.querySelector('button.btn:nth-child(1)');
const numBtn = document.querySelector('button.btn:nth-child(2)');
const nextBtn = document.querySelector('button.btn:nth-child(3)');

let counter = 1;
if (prevBtn){
    prevBtn.classList.add('btn-info');
}
if(numBtn){
    numBtn.classList.add('btn-primary');
}
if(nextBtn){
    nextBtn.classList.add('btn-info');
}

const setNumBtnContent = (content = 1) => {
    numBtn.innerHTML = content;
}

prevBtn.addEventListener('click', (e) => {
   counter = counter > 1 ? counter-- : counter;
   setNumBtnContent(counter);
});

nextBtn.addEventListener('click', (e) => {
    counter++;
    setNumBtnContent(counter);
 });