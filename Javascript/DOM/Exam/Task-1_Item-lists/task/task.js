function solve() {

	return function(selector, defaultLeft, defaultRight) {

		var element = document.querySelector(selector),
			toAppend = document.createDocumentFragment();
			defaultLeft = defaultLeft || [];
			defaultRight = defaultRight || [];
		var divContainer = document.createElement("div");
			divContainer.className += 'column-container';
		var columnOne = document.createElement("div");
			columnOne.className += 'column';
		var columnTwo = document.createElement("div");
			columnTwo.className += 'column';
		var input = document.createElement("input");

		var button = document.createElement("button");
			button.innerHTML = 'Add';
		var selectOne = document.createElement("div"),
		 	listOne = document.createElement("ol"),
			selectTwo = document.createElement("div"),
			listTwo = document.createElement("ol");
			selectOne.className += 'select';
			selectOne.innerHTML += '<input type="radio" name="column-select" id="select-left-column" checked><label for="select-left-column">Add here</label>';
			selectTwo.className += 'select';
			selectTwo.innerHTML += '<input type="radio" name="column-select" id="select-right-column"><label for="select-right-column">Add here</label>';
		var leftRadio = document.getElementById('select-left-column');
		var rightRadio = document.getElementById('select-right-column');

		defaultLeft.forEach(function(item){
			listOne.innerHTML += '<li class="entry">'+item+'<img class="delete" src="imgs/Remove-icon.png"></li>';
		});
		defaultRight.forEach(function(item){
			listTwo.innerHTML += '<li class="entry">'+item+'<img class="delete" src="imgs/Remove-icon.png"></li>';
		});

		divContainer.addEventListener('click', function(ev){
			if(ev.target instanceof HTMLImageElement){
				if(ev.target.previousSibling===null){
					input.value = ev.target.parentNode.innerHTML.toString().slice(47);
				}
				else if(ev.target.nextSibling===null){
					var len = ev.target.parentNode.innerHTML.toString().length;
					input.value = ev.target.parentNode.innerHTML.toString().slice(0,len-47);
				}
				var liToRemove = ev.target.parentNode;
				liToRemove.parentNode.removeChild(liToRemove);
			}
		});

		button.addEventListener('click', function(ev){
			if(input.value===''){
			}else{
				var inputValue = input.value.trim();
				//console.log(inputValue);
				if(document.getElementById('select-left-column').checked){
					listOne.innerHTML += '<li class="entry"><img class="delete" src="imgs/Remove-icon.png">'+inputValue+'</li>';
					input.value = '';
				}
				else if(document.getElementById('select-right-column').checked){
					listTwo.innerHTML += '<li class="entry"><img class="delete" src="imgs/Remove-icon.png">'+inputValue+'</li>';
					input.value = '';
				}
			}
		});

		columnOne.appendChild(selectOne);
		columnOne.appendChild(listOne);
		columnTwo.appendChild(selectTwo);
		columnTwo.appendChild(listTwo);
		divContainer.appendChild(columnOne);
		divContainer.appendChild(columnTwo);
		toAppend.appendChild(divContainer);
		toAppend.appendChild(input);
		toAppend.appendChild(button);
		element.appendChild(toAppend);
	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if(typeof module !== 'undefined') {
	module.exports = solve;
}
