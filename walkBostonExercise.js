// Artis-Mickens, K.
// June 04, 2022
// ------------------
// Walk Boston Data Coding Assignment - - Week #005
// Manipulate JSON data using JavaScript code
// (Week 5 - Functions: Array Manipulation And Scope)
// ------------------

//
// MIT xPRO - Professional Certificate in Coding: Full Stack Development with MERN - April 2022

//Walk Boston Data Coding Assignment


/*

//PART 'A' of Assignment//

Display the top 5 earners in Boston

Display the top five earner's names and salaries.

The Html element containing the top earners should have and id of "topSalaries"


//PART 'B' of Assignment//

Display all employees who make a minimum of 200000 in salary

Display any employees who make a minimum of 200k per year

    The Html element containing the top earners should have and id of "topEmployees"
    You should display the name of the employee, and the total earned



*/



function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length; 
  //var topEmployees = people.filter((a) => a[11] > 200,000);
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "data">' + html + "</ul>";
}

function renderTopSalaries(boston, container){
  const people = boston.data;
  const len = boston.data.length; 
  var topEmployees = people.filter((a) => a[11] > 200000);
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' + '<h2>' + topEmployees[i][8] + '</h2>' + '<h3>' + topEmployees[i][11] + '</h3>';
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "topEmployees">' + html + "</ul>";

}
renderPosts(boston, document.getElementById('container'));
renderTopEmployees(boston, document.getElementById('container'));
