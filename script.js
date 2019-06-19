/*
$(".js-dog-button").click(function() { // this create a button an then change the text everytime a user presses the button
$(this).text('Generating Doggo...'); // creating the "this" allows the action to happen within that function 
$.get('https://dog.ceo/api/breeds/image/random') // get this data from this source 
    .then(function(data){ // once it grabs the datta from the source then do this
        $(document.body).append('<img class="dog-img" src="'+data.message+'"/>') //then add then new data within the body element to the button
        
    })
    .then(function(){ // once the new data pops up the screen then do this
        $(`.js-dog-button`).text('Generate Doggo'); // make the button go back to "generate doggo"
    });   
});

*/
//JQUERY LIBRARY
var image= $('<img class="dog-img" src="" />'); // define img to use on the screen 
$(document.body).append(image); // THIS IS APPENDING THE IMAGE TO THE SCREEN THE SRC HAS NOT BEEN SET 
$.get('https://dog.ceo/api/breeds/list')
    .then(function (data){
        var dogBreeds = data.message;
        dogBreeds.forEach(breed => {
           $('.js-dog-select').append(`<option value="${breed}">${breed}</option>`)
        });
    });

$('.js-dog-select').change(function(){ // add an event listener to the dog select
    $.get(`https://dog.ceo/api/breed/${this.value}/images/random`) // get an api response for a random image 
        .then(function(data) { // once you grab the data do this...
            image.attr('src',data.message); // set this img attribute to the 'message' ( it is grabbing the the data from the url and "message = which is the next picture" will then show on the page )
        });
});