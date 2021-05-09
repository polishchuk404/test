$.getJSON( "categories.json", function( data ) {
  var createTable = '';
  for (var key in data){

  };
  $.each(data.categories, function (i, item) {
      createTable += '<tr style="height:100px;"><td style="background-color: ' + item.categoryColor + ';">' + item.categoryName + '</td><td style="width:140px" id="drag"></td></tr>';
  });
  $('#records_table').append(createTable);
}).fail(function(){
    console.log("An error has occurred.");
});
$.getJSON( "data/set1.json", function( data ) {
  var images = data.images;
  var createImages = '';
  $.each(images, function (i, item) {
    createImages += '<img class="draggable droppable" style="margin:5px" src=" ' + item.imagePath + '" alt="">';
  });
  $('#create_images').append(createImages);
}).fail(function(){
  console.log("An error has occurred.");
});


$(function() {
  $('#create_images').sortable({
      connectWith: '#records_table #drag'
  });
  $('#records_table #drag').sortable({
      connectWith: '#create_images'
  });
});






    