import * as mockroblog from './mockroblog.js'

let timeline = mockroblog.getPublicTimeline()
let bro = mockroblog.tailwind_css()

for(let i = 0; i < timeline.length; i++){
    let foo = document.createElement("div");
    let quote = document.createElement("blockquote");
    let user_name = document.createElement("p");
    // Retrieve text from an array from getdivublicTimeline()
    let text = document.createTextNode(timeline[i].text);
    // Add the text to the <div></div>
    quote.appendChild(text);
    // Adding classes to foo
    for(let i = 0; i < bro.length; i++){
        foo.classList.add(bro[i]);
    }

    user_name.innerHTML = mockroblog.getUserName(timeline[i].user_id);
    foo.appendChild(quote);
    foo.appendChild(user_name);
    // Find an element with ID "posts", and place the <div></div> in there.
    let element = document.getElementById("posts");
    element.appendChild(foo);
}




