function navsearch() {
    var term = document.getElementById('navsearch').value.toLowerCase()
    search(term)
}

function search(term) {
    var i;
    searchids = []
    for (i = 0; resources.length > i; i++) {
        if (resources[i].name.includes(term) == true) {
            searchids.push(resources[i].id)
        }
    }

    console.log(searchids)

    showsearchresults()
}

function download(url) {
    var link = document.createElement("a");
    link.classList.add('hidden')
    link.download = "";
    link.href = url;
    link.click();
}

function showsearchresults() {
    var html = "";
    var i;
    for (i = 0; i < searchids.length; i++) {
        var html = html + `
        <div class="icon" title="${resources[searchids[i]].name}" onclick='download("/brand/${resources[searchids[i]].name}.zip")'>
            <table>
                <tbody>
                    <tr>
                        <td><img src="${resources[searchids[i]].img}"><br><br>${resources[searchids[i]].name}</td>
                    </tr>
                </tbody>
            </table>
        </div>`
    }

    document.getElementById('results').innerHTML = html
}

var searchids = [];
var resources = [{
    id: 0,
    img: '/img/twitter.png',
    name: 'twitter'
}, {
    id: 1,
    img: '/img/discord.png',
    name: 'discord'
}, {
    id: 2,
    img: '/img/facebook.png',
    name: 'facebook'
}, {
    id: 3,
    img: '/img/instagram.png',
    name: 'instagram'
}];