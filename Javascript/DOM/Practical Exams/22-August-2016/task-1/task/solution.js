function solve() {
    return function (selector, tabs) {
        var root = document.querySelector(selector),
            all = document.createDocumentFragment();

        var ul = document.createElement('ul');
        ul.classList.add("tabs-nav");
        tabs.forEach(function(tab, index){
        if(index === 0){
            ul.innerHTML += '<li><a href="#" class="tab-link visible" tab="' + index + '">'+tab.title+'</a></li>';
        }
            else{
            ul.innerHTML += '<li><a href="#" class="tab-link" tab="' + index + '">'+tab.title+'</a></li>';
        }
        });
        var ulContent = document.createElement('ul');
        ulContent.classList.add("tabs-content");
        tabs.forEach(function(tab, index){
            if(index === 0){
                ulContent.innerHTML += '<li class="tab-content visible"><p>'+tab.content+'</p><button class="btn-edit">Edit</button></li>';
            }
            else{
                ulContent.innerHTML += '<li class="tab-content">'+tab.title+
                '<p>'+tab.content+'</p>'+
                '<button class="btn-edit">Edit</button>'+
                '</li>';
            }
        });
        var childrenElements = ulContent.childNodes;
        ul.addEventListener('click', function(e){
            var currentIndex = e.target.getAttribute('tab');

            childrenElements.forEach(function(tab, index){
                //console.log(index);
                //console.log(currentIndex);
                if(index==currentIndex){

                    tab.className = 'tab-content visible';
                }else{
                    tab.className = 'tab-content';
                }

            })
        });

        all.appendChild(ul);
        all.appendChild(ulContent);
        root.appendChild(all);
    }
}

if (typeof module !== 'undefined') {
    module.exports = solve;
}