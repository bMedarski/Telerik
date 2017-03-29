function solve() {

	return function(selector, rows, columns) {

		var $selector  = $(selector);


		$('<table class="spreadsheet-table"></table>').appendTo($selector);
		var tableRows = rows + 1;
		var tableColumns = columns + 1;
		$table = $('.spreadsheet-table');



		var $currentRow = $('<tr></tr>');
		for(var row=0;row<tableRows; row+=1) {
			if (row === 0) {
				$currentRow = $('<tr></tr>');
				$currentRow.appendTo($table);
				for (var col = 0; col < tableColumns; col += 1) {
					if (col === 0) {
						$('<th class="spreadsheet-header spreadsheet-item"></th>').appendTo($currentRow);
					}
					else {
						currentChar = (String.fromCharCode(64+col));
						$('<th class="spreadsheet-header spreadsheet-item">' + currentChar + '</th>').appendTo($currentRow);
					}
				}
			}else{
				var $currentRowL = $('<tr></tr>');
				$currentRowL.appendTo($table);
				for (var colL = 0; colL < tableColumns; colL += 1) {
					if (colL === 0) {
						$('<th class="spreadsheet-header spreadsheet-item">'+row+'</th>').appendTo($currentRowL);
					}
					else {
						$('<td class="spreadsheet-cell spreadsheet-item"><input><span></span></td>').appendTo($currentRowL);
					}
				}
			}
		}

		$allCells = $('td');
		$allCells.on('click', function(ev){
			//console.log($(this));
			$(this).addClass("selected");
			$parent= $($(this).parent());
			$first = $(($parent).children()[0]);
			$first.addClass("selected");

			var index = $(this).eq();
			console.log(index);
			//$first =($(this)).parent().children()[0];
			//console.log(($(this)).parent().children()[0]);

			//$first.addClass("selected");

			$($parent).addClass("selected");
		});

	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if(typeof module !== 'undefined') {
	module.exports = solve;
}
