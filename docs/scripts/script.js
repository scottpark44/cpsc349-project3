import * as mockroblog from './mockroblog.js'

let timeline = mockroblog.getPublicTimeline()

for(let i = 0; i < timeline.length; i++){
    // Create an <div></div>
    let foo = document.createElement("div");
    // Retrieve text from an array from getdivublicTimeline()
    let text = document.createTextNode(timeline[i].text + " - " + mockroblog.getUserName(timeline[i].user_id));
    // Add the text to the <div></div>
    foo.appendChild(text);
    // Adding classes to foo
    foo.classList.add("text-xl");
    // Find an element with ID "posts", and place the <div></div> in there.
    let element = document.getElementById("posts");
    element.appendChild(foo);
}

