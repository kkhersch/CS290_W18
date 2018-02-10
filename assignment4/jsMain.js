
/**************
Not Jank Text Area Script
Ok, maybe a little janky
**************/

$(function() {
  $('#wrapperMainText p').dblclick(function() {
    var userText = $(this).text();
    $(this).hide();
    //shows the text area
    $(this).next().show();
    $(this).next().find('textarea').val(userText);
  })
})

$(function() {
  $('.textAreaBtn').click(function() {
    //get text from textarea
    var userText = $(this).prev().val();
    //replace back to p tag with new text
    $(this).parent().hide();
    $(this).parent().prev().show().text(userText);
  })
})


/**************
Tile Script
**************/

//toggle hide on Tiles
$(function() {
  $('.closebtn').click(function() {
    $(this).parent().fadeOut(200);
  });
});

//toggles all tiles' display back to visible
$(function() {
    $('#buttonResetTile').click(function() {
      $('.contentTile').show();
    });
});

//Clears all tiles by hiding them
$(function() {
    $('#buttonClearTile').click(function() {
      $('.contentTile').hide();
    });
});



/************************
Nav and Slideshow Script
************************/

$(function() {
    $('ul > li').hover(function() {
        $(this).find('ul.sub1').show(200);
    }, function() {
        $(this).find('ul.sub1').hide(200);
        });
    });

$(function() {
    $('.slideshow img:gt(0)').hide();
    setInterval(function() {
        $('.slideshow :first-child').fadeOut()
          .next('img').fadeIn()
          .end().appendTo('.slideshow');
      },
    10000);
});
