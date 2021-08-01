import * as mockroblog from './mockroblog.js'

let user_list = mockroblog.return_Users();
//let user_timeline = mockroblog.getUserTimeline();
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
    btn.onclick = function display_user_data(){
        
        if (user_list[i] == "ProfAvery"){
            let current_content = document.getElementById("posts");
            current_content.style.display = "none";
            
            
            for(let j = 0; j < mockroblog.getUserTimeline(user_list[i]).length; j++){
                // make div, blockquote, and p
                let man = document.createElement("div");
                let quote = document.createElement("blockquote");
                let post_time = document.createElement("p");
                // Retrieve text from an array from getUserTimeline
                let bro = mockroblog.getUserTimeline(user_list[i]);
                let text = document.createTextNode(bro[j].text);
                // Add the text to the blockquote
                quote.appendChild(text);
                // Adding classes to div
                for(let i = 0; i < tailwind_class.length; i++){
                    man.classList.add(tailwind_class[i]);
                }
                // Add Timestamp
                post_time.innerHTML = bro[j].timestamp;
                man.appendChild(quote);
                man.appendChild(post_time);
                let new_content = document.getElementById("user_info");
                new_content.appendChild(man);
            }
        }

        if (user_list[i] == "KevinAWortman"){
            let current_content = document.getElementById("posts");
            current_content.style.display = "none";
            
            
            for(let j = 0; j < mockroblog.getUserTimeline(user_list[i]).length; j++){
                // make div, blockquote, and p
                let man = document.createElement("div");
                let quote = document.createElement("blockquote");
                let post_time = document.createElement("p");
                // Retrieve text from an array from getUserTimeline
                let bro = mockroblog.getUserTimeline(user_list[i]);
                let text = document.createTextNode(bro[j].text);
                // Add the text to the blockquote
                quote.appendChild(text);
                // Adding classes to div
                for(let i = 0; i < tailwind_class.length; i++){
                    man.classList.add(tailwind_class[i]);
                }
                // Add Timestamp
                post_time.innerHTML = bro[j].timestamp;
                man.appendChild(quote);
                man.appendChild(post_time);
                let new_content = document.getElementById("user_info");
                new_content.appendChild(man);
            }
        }

        if (user_list[i] == "Beth_CSUF"){
            let current_content = document.getElementById("posts");
            current_content.style.display = "none";
            
            
            for(let j = 0; j < mockroblog.getUserTimeline(user_list[i]).length; j++){
                // make div, blockquote, and p
                let man = document.createElement("div");
                let quote = document.createElement("blockquote");
                let post_time = document.createElement("p");
                // Retrieve text from an array from getUserTimeline
                let bro = mockroblog.getUserTimeline(user_list[i]);
                let text = document.createTextNode(bro[j].text);
                // Add the text to the blockquote
                quote.appendChild(text);
                // Adding classes to div
                for(let i = 0; i < tailwind_class.length; i++){
                    man.classList.add(tailwind_class[i]);
                }
                // Add Timestamp
                post_time.innerHTML = bro[j].timestamp;
                man.appendChild(quote);
                man.appendChild(post_time);
                let new_content = document.getElementById("user_info");
                new_content.appendChild(man);
            }
        }
    };



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


