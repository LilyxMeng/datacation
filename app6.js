//declares location of the website to go to
var page = "text";

//This function directs the user to their desired resource website
 function nextPage() {
    //  grabs values from index6
    // sub = subject
    //level = grade level
    var grade = document.getElementById("level").value;
    var subject = document.getElementById("sub").value;

    // document.getElementById("begin").onclick = function() {
    //     location.href="index6.html";
    // }

    if (grade == "Grade 9" || subject == "Math") {
        if (grade == "Grade 9" && subject == "Math") {
            page="index2.html#Math"
        }
        if (grade == "Grade 9" && subject == "Science") {
            
        }
        if (grade == "Grade 9" && subject == "English") {
            
        }
        if (grade == "Grade 9" && subject == "Social Studies") {
            
        }
        location = "index2.html";
        return;
    }

    if (grade == "Grade 10" || subject == "Math") {
        if (grade == "Grade 10" && subject == "Math") {
            page="index2.html#math"
        }
        if (grade == "Grade 10" && subject == "Science") {
            
        }
        if (grade == "Grade 10" && subject == "English") {
            
        }
        if (grade == "Grade 10" && subject == "Social Studies") {
            
        }
        location = "index3.html";
        return;
    }

    if (grade == "Grade 11" || subject == "Math") {
        if (grade == "Grade 11" && subject == "Math") {
            page="index2.html#math"
        }
        if (grade == "Grade 11" && subject == "Science") {
            
        }
        if (grade == "Grade 11" && subject == "English") {
            
        }
        if (grade == "Grade 11" && subject == "Social Studies") {
            
        }
        location = "index4.html";
        return;
    }

    if (grade == "Grade 12" || subject == "Math") {
        if (grade == "Grade 12" && subject == "Math") {
            page="index2.html#math"
        }
        if (grade == "Grade 12" && subject == "Science") {
            
        }
        if (grade == "Grade 12" && subject == "English") {
            
        }
        if (grade == "Grade 12" && subject == "Social Studies") {
            
        }
        location = "index5.html";
        return;
    }

}


/*  psudocode:
nextPage onclick {
    run function nextPage()
    redirect user here 
}

*/

// document.getElementById("begin").onclick = function() {
//     location.href=page;
// }
// if (grade == "Grade 9" || subject == "Math") {
//     location = "index2.html";
//     return;
// }