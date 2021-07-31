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
    let foo = document.createElement("div");
    let btn = document.createElement("button");

    let user_name = user_list[i];


    //btn.onclick = mockroblog.display_user_data(user_list[i]);
    btn.innerHTML = user_list[i];

    let output_test = 'mockroblog.display_user_data("'+ user_name +'")';

    console.log(output_test);




    // Retrieve text from an array from getdivublicTimeline()
    // let text = document.createTextNode(user_list[i]);
    // Add the text to the <div></div>
    //let text = document.createTextNode(user_list[i]);
    //
    //console.log(user_name);
    
    btn.innerHTML = user_name;



    // Adding classes to foo
    for(let i = 0; i < tailwind_class.length; i++){
        foo.classList.add(tailwind_class[i]);
    }
    //foo.appendChild(text);
    // Find an element with ID "posts", and place the <div></div> in there.
    
    
    foo.appendChild(btn);
    
    let element = document.getElementById("posts");
    element.appendChild(foo);
}

;
