// - Create a function called addTitle(), which will find the h1 element and adds the following title inside of it: "Harry Potter Character Selection".

        //getElementsByTagName()
        // setAttribute?
        //what is the attribute to use?
        // what triggers the function running?


addTitle = () => {
    // document.getElementsByTagName("h1").innerText("title", "Harry Potter Character Selection");
    // document.getElementsByTagName("h1").innerText = "Harry Potter Character Selection";
    document.querySelector("h1").textContent = "Harry Potter Character Selection"
}

addTitle();


// - Create a function called flexIt(), which should find the first element with the class called 'needFlex' and add the class flexIt to that element and then toggle the flexIt class on and off.

    //get the .needFlex element
    //add the class flexIt - setAttribute
    // implement toggle? - toggle adds it

flexIt = () => {
    // document.querySelector(".needFlex").setAttribute("class", ".needFlex")
    document.querySelector(".needFlex").classList.toggle("flexIt") 
}


//3. Create a function called addHouses(), which will find all the paragraphs that have a class called "description" and will set another class name. The new class name should be the name of the Hogwarts house the text is describing. Example: If the paragraph is about Ravenclaw, find that paragraph and set the class attribute to include ravenclaw as the 2nd class.
    //make a function
    //find all the p.description
    //assign a new class to each:  
        //if text contains (or first word in string?) Gryffindor, assign class gryffindor etc.
    //loop?

function addHouses(){

    for (let i=0; i<document.querySelectorAll('.description').length; i++) {
        if (document.querySelectorAll('.description')[i].textContent.includes('Gryffindor')) {
              document.querySelectorAll('.description')[i].classList.add('gryffindor');
        }
        if (document.querySelectorAll('.description')[i].textContent.includes('Hufflepuff')) {
            document.querySelectorAll('.description')[i].classList.add('hufflepuff');
        }
      if (document.querySelectorAll('.description')[i].textContent.includes('Ravenclaw')) {
        document.querySelectorAll('.description')[i].classList.add('ravenclaw');
        } 
        if (document.querySelectorAll('.description')[i].textContent.includes('Slytherin')) {
            document.querySelectorAll('.description')[i].classList.add('slytherin');
      }
    }

}

addHouses();

//4.

//when the button is clicked, apply .emphasis to everything with the .house class
//
//.toggle(emphasis)


function emphasize(house){
    for (let i=0; i<document.querySelectorAll("."+house).length; i++){
          document.querySelectorAll("."+house)[i].classList.toggle('emphasis'); 
    }
}


// 5. Create a new function called hideTheSnitch() that makes the words "The Snitch" appear and disappear.  To do this, you can adjust the element's display attribute to be either "none" or not.

//check to see if a css display: none class exists: .snitch
// make the hidetheSnitch() function
// get The Snitch text with #golden
// use toggle to add/remove the .snitch class with the display:none CSS

function hideTheSnitch() {
    document.querySelector("#golden").classList.toggle("snitch")
}



