    // create a variable to select individual lists of the elements in arrow and movielist class
    const arrows_class = document.querySelectorAll(".arrow");
    // console.log(arrows_class);
    
    const movieList_class = document.querySelectorAll(".movie-lists");
    // console.log(movieList_class);

    // create a click function to select using .addEventListner, to try something
    // using the arrow class

    arrows_class.forEach((arrow,i)=>{ // the forEach is targeting individual element of the arrow class
        arrow.addEventListener("click", ()=> {
            // console.log("you clicked the :" + i + " row arrow" );   THIS CHECKS THE ARROW THAT WAS CLICKED
            movieList_class[i].style.backgroundColor = "blue";
        })
        //Next is to find initial position of div after every click
    }) 