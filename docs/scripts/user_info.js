import * as mockroblog from './mockroblog.js'
import * as auth from './auth.js'

let user_list = mockroblog.return_Users();
//let user_timeline = mockroblog.getUserTimeline();
let tailwind_class = mockroblog.tailwind_css2();


/*  need to find ways to:
1.******* somehow get the correct user name ****** 
2. use that user name to print the data on the page
*/
/*
    1. Maybe save as variable the user name that is chosen 
    (let a = element.innerHTML), then use that variable to call information.
*/

//      Function for implementing getUserTimeline
function print_new_content(user_content){
    let current_content = document.getElementById("posts");
    current_content.style.display = "none";
            
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

        document.getElementById("content_name").innerHTML = mockroblog.getUserName(user_content[j].user_id)+"'s Previous Posts";
    }
}

for(let i = 0; i < 3; i++){
    // making div and button
    let foo = document.createElement("div");
    let btn = document.createElement("button");
    let btn2 = document.createElement("button");
    let followed = false;
    //  setting btn to have the username inside
    btn.innerHTML = user_list[i];
    btn2.innerHTML = "Follow";
    //  Adding onclick to button (display_user_data is in mockroblog.js)
    btn.onclick = function display_user_data(){
        print_new_content(mockroblog.getUserTimeline(user_list[i]));
    };

    btn2.onclick = function is_follow(){
        followed = !followed;
        if(followed == false){
            btn2.innerHTML = "Follow";
        }
        else {
            btn2.innerHTML = "Unfollow";
        }
    }

  

    //  CSS STYLING FOR NAME BOXES Adding classes to foo
    for(let i = 0; i < tailwind_class.length; i++){
        foo.classList.add(tailwind_class[i]);
    }

    //  Add button to div.
    foo.appendChild(btn);

    // Find an element with ID "posts", and place the <div></div> in there.
    let element = document.getElementById("posts");


    element.appendChild(foo);
    element.appendChild(btn2);


}


