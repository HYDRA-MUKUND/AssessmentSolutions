
document.querySelector('#name').addEventListener('focus',()=>{

 let childrenOfDivHavingIDJohn=document.querySelector('#john').children;

for(let selectedChild of childrenOfDivHavingIDJohn){
     
    if(selectedChild.classList.value.includes('important')){
      selectedChild.classList.add('shape');
      selectedChild.textContent='shape class added to me';
    }
  }

})