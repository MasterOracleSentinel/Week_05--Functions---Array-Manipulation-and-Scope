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
