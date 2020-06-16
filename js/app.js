function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

var ul = document.getElementById('albums');

fetch('https://api.jsonbin.io/b/5ee3db761f9e4e57881c7a80')
    .then(response => response.json())
    .then(data => {
        let albums = data;

        return albums.map(function(album) {
            let li = createNode('li');
            var span = createNode('span');

          li.innerHTML = "<a name='" + album.index + "'></a><img  width='100' height='100' src='" + album.url + "' alt='" + album.name + "' />" + album.index + '. ' + album.name;

            append(span, li);
            append(ul, li);

        });
    })

function filterAlbums() {
    var input, filter, ol, li, a, i, txtValue;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    ol = document.getElementById("albums");
    li = ol.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function clearFilter(){
    document.getElementById('filterInput').value = ''
    filterAlbums();
}
window.onscroll = function() {scrollMenu()};

function scrollMenu() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").className = "fixed";
    } else {
        document.getElementById("nav").className = "";
    }
}
