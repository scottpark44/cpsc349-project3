import * as mockroblog from './mockroblog.js'

let user_list = mockroblog.return_Users();
let user_timeline = mockroblog.getUserTimeline();
let tailwind_class = mockroblog.tailwind_css();

/*  need to find ways to:
1.******* somehow get the correct user name ****** 
2. use that user name to print the data on the page
*/
/*
    1. Maybe save as variable the user name that is chosen 
    (let a = element.innerHTML), then use that variable to call information.
*/
for(let i = 0; i < 3; i++){
    // making div and button
    let foo = document.createElement("div");
    let btn = document.createElement("button");

    //  setting btn to have the username inside
    btn.innerHTML = user_list[i];

    //  Adding onclick to button (display_user_data is in mockroblog.js)
    //btn.onclick = mockroblog.display_user_data(user_list[i]);

    // Adding classes to foo
    for(let i = 0; i < tailwind_class.length; i++){
        foo.classList.add(tailwind_class[i]);
    }

    //  Add button to div.
    foo.appendChild(btn);

    // Find an element with ID "posts", and place the <div></div> in there.
    let element = document.getElementById("posts");
    element.appendChild(foo);
}

;
