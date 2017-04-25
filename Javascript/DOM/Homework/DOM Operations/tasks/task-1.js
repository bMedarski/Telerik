/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

  return function (element, contents) {

      var domElement;
      for(var u = 0, leng = contents.length; u< leng; u+=1) {
          if ((typeof contents[u] !== 'string') && (typeof contents[u] !== 'number')) {
              throw Error('Invalid content');
          }
      }
      if(document.getElementById(element)!==null){
          domElement = document.getElementById(element);
      }
      else if(element instanceof HTMLElement){
          domElement  = element;
      }
      else{
          throw Error('No such element');
      }
      domElement.innerHTML = '';
      for(var i = 0, len = contents.length; i< len; i+=1){
          domElement.innerHTML += '<div>'+contents[i]+'</div>';
      }
  };
};