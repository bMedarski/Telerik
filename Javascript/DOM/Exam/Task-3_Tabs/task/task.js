function solve() {
	var template = [
		'<div class="tabs-control">',
			'{{#if titles}}',
			'<ul class="list list-titles">',
				'{{#each titles}}',
				'<li class="list-item">',
				'<label for="{{link}}" class="title">{{text}}</label>',
				'</li>',
				'{{/each}}',
			'</ul>',
			'{{/if}}',
			'{{#if contents}}',
			' <ul class="list list-contents">',
				'{{#each contents}}',
					'<li class="list-item">',
					'<input class="tab-content-toggle" id="{{link}}" name="tab-toggles" checked="checked/" type="radio">',
						'<div class="content">',
						'{{{text}}}',
						'</div>',
					'</li>',
				'{{/each}}',
			' </ul>',
			'{{/if}}',
		'</div>'
	].join('\n');

	return template;
}

if(typeof module !== 'undefined') {
	module.exports = solve;
}
//<div class="tabs-control">
//	<ul class="list list-titles">
//	<li class="list-item">
//	<label for="tab-1" class="title">Tab 1</label>
//</li>
//<li class="list-item">
//	<label for="tab-2" class="title">Tab 2</label>
//</li>
//<li class="list-item">
//	<label for="tab-3" class="title">Tab 3</label>
//</li>
//</ul>
//<ul class="list list-contents">
//	<li class="list-item">
//
//	<input class="tab-content-toggle" id="tab-1" name="tab-toggles" checked="checked/" type="radio">
//	<div class="content">
//	Tab 1, no so special...
//</div>
//</li>
//<li class="list-item">
//	<input class="tab-content-toggle" id="tab-2" name="tab-toggles" type="radio">
//	<div class="content">
//	<p>Some text in a p</p><a href="#">a link</a>
//</div>
//</li>
//<li class="list-item">
//	<input class="tab-content-toggle" id="tab-3" name="tab-toggles" type="radio">
//	<div class="content">
//	<strong>And a list</strong>
//<ul>
//<li>Just</li>
//<li>a</li>
//<li>regular</li>
//<li>list</li>
//</ul>
//</div>
//</li>
//</ul>
//</div>