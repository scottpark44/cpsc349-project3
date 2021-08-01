import * as mockroblog from './mockroblog.js'

let user_list = mockroblog.return_Users();
let tailwind_class = mockroblog.tailwind_css();


function print_new_content(user_content){        
    for(let j = 0; j < user_content.length; j++){
        // make div, blockquote, and p
        let man = document.createElement("div");
        let quote = document.createElement("blockquote");
        let post_time = document.createElement("p");
        // Retrieve text from an array from getUserTimeline
        let text = document.createTextNode(user_content[j].text);
         // Add the text to the blockquote
        quote.appendChild(text);
         // Adding classes to div
        for(let i = 0; i < tailwind_class.length; i++){
            man.classList.add(tailwind_class[i]);
        }
        // Add Timestamp
        post_time.innerHTML = user_content[j].timestamp;

        man.appendChild(quote);
        man.appendChild(post_time);
        let new_content = document.getElementById("user_info");
        new_content.appendChild(man);

        document.getElementById("content_name").innerHTML = mockroblog.getUserName(user_content[j].user_id)+"'s Feed";
    }
}