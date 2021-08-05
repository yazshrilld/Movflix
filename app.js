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
            // const ratio = Math.floor(window.innerWidth/270);
            clickingCount++;
            if( itemNumber - (4 + clickingCount) >= 0 ) {
                 // console.log("you clicked the :" + i + " row arrow" );   THIS CHECKS THE ARROW THAT WAS CLICKED
                movieList_class[i].style.transform = `translateX(${
                movieList_class[i].computedStyleMap().get("transform")[0].x.value-370
            }px)`;
            }
            else {
                movieList_class[i].style.transform = "translateX(0)";
                clickingCount = 0;
            }
        })
        //Next is to find initial position of div after every click
    }) 

    const ball  = document.querySelector(".toggle-ball");
    const items = document.querySelectorAll(".content, .movie-list-release, .movie-desc, .movie-title-span, .navbar-container, .sidebar, .sidebar-icon, .toggle, .arrow");

    ball.addEventListener("click", ()=> {
        items.forEach(myIndividualItem => {
            myIndividualItem.classList.toggle("active");
        }); 
        ball.classList.toggle("active");
    });