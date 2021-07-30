import * as mockroblog from './mockroblog.js'

let timeline = mockroblog.getPublicTimeline()
let bro = mockroblog.tailwind_css()

for(let i = 0; i < timeline.length; i++){
    // Create an <div></div>
    let foo = document.createElement("div");
    // Retrieve text from an array from getdivublicTimeline()
    let text = document.createTextNode(timeline[i].text + " - " + mockroblog.getUserName(timeline[i].user_id));
    // Add the text to the <div></div>
    foo.appendChild(text);
    // Adding classes to foo
    for(let i = 0; i < bro.length; i++){
        foo.classList.add(bro[0]);
    }
    // Find an element with ID "posts", and place the <div></div> in there.
    let element = document.getElementById("posts");
    element.appendChild(foo);
}




