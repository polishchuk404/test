$.getJSON( "categories.json", function( data ) {
  var createTable = '';
  $.each(data.categories, function (i, item) {
      createTable += '<tr style="height:100px;"><td style="width:140px;background-color: ' + item.categoryColor + ';">' + item.categoryName + '</td><td style="display:flex;min-height:100px;min-width:140px" class="drag"></td></tr>';
  });
  $('#records_table').append(createTable);
}).done(function() {
  getImages();
}).fail(function(){
    console.log("An error has occurred.");
});

function getImages() {
  var $set = $("#set option:checked").val();
  $.getJSON( "data/"+ $set +".json",  function( data ) {
    var createImages = '';
    $.each(data.images, function (i, item) {
      createImages += '<img class="draggable droppable" style="display:block; margin:1px" data-name="' + item.imageName + '"  src="' + item.imagePath + '" alt="">';
    });
    $('#create_images').append(createImages);
  }).done(function() {
    dragNdrop();
    sortImages();
  }).fail(function(){
      console.log("An error has occurred.");
  });
};
$( "button" ).click(function() {
  getImages();
});
function dragNdrop() {
  $('#create_images, .drag').sortable({
    connectWith: '.drag, #create_images'
  });
};
function sortImages() {
  var $sort_images = $('#create_images');
  var $images = $sort_images.find('img');
  var sortList = Array.prototype.sort.bind($images);
  sortList(function ( a, b ) {
    var x = a.outerHTML;
    var y = b.outerHTML;
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  $sort_images.append($images);
};











    