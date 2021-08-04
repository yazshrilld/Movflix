    // create a variable to select individual lists of the elements in arrow and movielist class
    const arrows_class = document.querySelectorAll(".arrow");
    // console.log(arrows_class);
    
    const movieList_class = document.querySelectorAll(".movie-lists");
    // console.log(movieList_class);

    // create a click function to select using .addEventListner, to try something
    // using the arrow class

    arrows_class.forEach((arrow,i)=>{ // the forEach is targeting individual element of the arrow class
        const itemNumber = movieList_class[i].querySelectorAll("img").length;
        console.log(itemNumber);
        let clickingCount = 0;
        arrow.addEventListener("click", ()=> {
            clickingCount++;
            if( itemNumber - (3 + clickingCount) >= 0 ) {
                 // console.log("you clicked the :" + i + " row arrow" );   THIS CHECKS THE ARROW THAT WAS CLICKED
                movieList_class[i].style.transform = `translateX(${
                movieList_class[i].computedStyleMap().get("transform")[0].x.value-300
            }px)`;
            }
            else {
                movieList_class[i].style.transform = "translateX(0)";
                clickingCount = 0;
            }
        })
        //Next is to find initial position of div after every click
    }) 