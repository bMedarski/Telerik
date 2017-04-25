//<ul class="nav">
//    {{#if logo}}
//<li class="nav-item logo">
//    <a href="{{logo.url}}">
//    <img src="{{logo.image}}" />
//    </a>
//    </li>
//    {{/if}}
//{{#each items}}
//<li class="nav-item">
//    <a href="{{url}}">{{title}}</a>
//
//{{#if items}}
//<ul class="subnav">
//    {{#each items}}
//<li class="nav-item">
//    <a href="{{url}}">{{title}}</a>
//</li>
//{{/each}}
//</ul>
//{{/if}}
//</li>
//{{/each}}
//</ul>/

function solve() {
    return function() {
        var template =

            '<ul class="nav">'+
            '{{#if this.logo}}'+
            '<li class="nav-item logo">'+
            '<a href="{{logo.url}}/">'+
            '<img src="./{{logo.image}}">'+
            '</a>'+
            '</li>'+
            '{{/if}}'+
            '{{#items}}'+
            '<li class="nav-item">'+
            '<a href="{{this.url}}">{{this.title}}</a>'+
            '{{#if this.items}}'+
            '<ul class="subnav">'+
            '{{#items}}'+
            '<li class="nav-item">'+
            '<a href="{{this.url}}">{{this.title}}</a>'+
            '</li>'+
            '{{/items}}'+
            '</ul>'+
            '{{/if}}'+
            '</li>'+
            '{{/items}}'+
            '</ul>';

        return template;
    };
}