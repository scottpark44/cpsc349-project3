import * as mockroblog from './mockroblog.js'

let timeline = mockroblog.getPublicTimeline()

for(let i = 0; i < timeline.length; i++){
    // Create an <p></p>
    let foo = document.createElement("p");
    // Retrieve text from an array from getPublicTimeline()
    let text = document.createTextNode(timeline[i].text);
    // Add the text to the <p></p>
    foo.appendChild(text);
    // Find an element with ID "posts", and place the <p></p> in there.
    let element = document.getElementById("posts");
    element.appendChild(foo);
}

