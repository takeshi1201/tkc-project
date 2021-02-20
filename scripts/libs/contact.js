let $form = $('#js-form');
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          $form.slideUp();
          $(' #js-sucees ').slideDown();
          //送信に成功したときの処理 
        }, 
        200: function() { 
          $form.slideUp();
          $(' #js-error ').slideDown();
          //送信に失敗したときの処理 
        }
      } 
    });
    return false; 
  }); 


