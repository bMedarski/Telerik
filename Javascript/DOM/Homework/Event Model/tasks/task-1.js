/* globals $ */

/* 

 Create a function that takes an id or DOM element and:

 If an id is provided, select the element
   Finds all elements with class button or content within the provided element
   Change the content of all .button elements with "hide"
 When a .button is clicked:
 Find the topmost .content element, that is before another .button and:
 If the .content is visible:
 Hide the .content
 Change the content of the .button to "show"
 If the .content is hidden:
 Show the .content
 Change the content of the .button to "hide"
 If there isn't a .content element after the clicked .button and before other .button, do nothing
 Throws if:
 The provided DOM element is non-existant
 The id is neither a string nor a DOM element
  

*/

function solve(){
  return function (selector) {
   var element;
   var nextElement;
     if(typeof selector==='string'){
        element = document.getElementById(selector);
        if(!element){
         throw Error('No such Id');
        }
     }
     else if (selector instanceof HTMLElement){
        element = selector;

     }else{
      throw Error();
     }

     var elementsChildren = element.children;
     elementsChildren =  [].slice.apply(elementsChildren);
     for(var i=0, len=elementsChildren.length; i<len; i+=1){
        if(elementsChildren[i].className==='button'){

         elementsChildren[i].innerHTML = 'hide';
        }
     }
   element.addEventListener('click', function(e){
          nextElement = e.target.nextElementSibling;
         if(nextElement.className === 'button' ) {
          throw Error();
         }else{
           while(nextElement.className!=='content'||nextElement===nextElement.parentNode.lastChild){
            nextElement= nextElement.nextElementSibling;
           }
            if(nextElement.style.display==='none'){

             nextElement.style.display='';
             e.target.innerHTML = 'hide';
            }else if(nextElement.style.display===''){
             nextElement.style.display='none';
             e.target.innerHTML = 'show';
            }else{
             console.log(nextElement);
             nextElement.style.display='none';
             e.target.innerHTML = 'show';
            }

         }

         //}
   });
  };
}

module.exports = solve;