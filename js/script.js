var navToggle = document.querySelector('#main-nav-toggle');

var navList = document.querySelector('#main-nav-list'); //To detect a button click.

//if the element does exist, do some stuff

//Always check to see if elements exist before writing js involving those elements
if (navToggle && navList) {
  navToggle.addEventListener('click', function(){ //addEventListener is a method that takes two arguments. Also creating an anonymous function
  if (navToggle.classList.contains('close')) {//The class list property (which is an object itself). This is checking if the hamburger has the closed class. Close is when it turns into an X. Open is when it's a hamburger.

    //This is checking if the element has the closed class. If it does that means the nav is open. So to close it, I will remove the open class from the nav list and remove the close class from the hamburger (to make it look like a hamburger again).

    navToggle.classList.remove('close');
    navList.classList.remove('open');


  } else {
    navToggle.classList.add('close');
    navList.classList.add('open');
  }

  });
}
