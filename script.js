$.getJSON( "categories.json", function( data ) {
  $.each(data.categories, function (i, item) {
    $('#template_table').tmpl(item).appendTo('#records_table');
  });
}).done(function() {
  getImages();
}).fail(function(){
    console.log("An error has occurred.");
});

function getImages() {
  var set = $("#set option:checked").val();
  $.getJSON( "data/"+ set +".json",  function( data ) {
    $.each(data.images, function (i, item) {
      $('#template_img').tmpl(item).appendTo('#create_images');
    });
  }).done(function() {
    dragNdrop();
    sortImages();
  }).fail(function(){
      console.log("An error has occurred.");
  });
}
$( "button" ).click(function() {
  getImages();
});

function dragNdrop() {
  $('#create_images, td:last-of-type').sortable({
    connectWith: 'td:last-of-type, #create_images',
    update: function(event, ui) {
      var sort_container = $('#' +ui.item.parent().attr('id'));
      var images = $(sort_container.children());
      images.sort(function ( a, b ) {
        return ($(b).data('name').toUpperCase()) < ($(a).data('name').toUpperCase()) ? 1 : -1;
      });
      sort_container.append(images);
    }
  });
}
function sortImages() {
  var sort_images = $('#create_images');
  var images = sort_images.find('img');
  images.sort(function ( a, b ) {
    return ($(b).data('name').toUpperCase()) < ($(a).data('name').toUpperCase()) ? 1 : -1;
  });
  sort_images.append(images);
}


    