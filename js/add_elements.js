
function add_elements(id, file){
    
    function parseHTML(html) {
        var t = document.createElement('template');
        t.innerHTML = html;
        return t.content;
    } 

    function done(items){
        for (let i in items){
            const title = items[i]["title"];
            const text =  items[i]["text"];
            const link = items[i]["link"];
            const txt = `<div class="card bg-light" style="width: 18rem; height: 15rem; display: inline-block;"> 
                            <div class="card-body card-body d-flex flex-column h-100">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${text}</p>
                                <a href="${link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-auto">Download</a>
                            </div>
                        </div>`;

            const html = parseHTML(txt);
            const node = document.getElementById(id);
            console.log(node)
            node.appendChild(html);
        }
    }

    fetch(file)
        .then(response => response.json())
        .then(json => done(json[id]));
    
}

