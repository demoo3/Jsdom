"use strict";
$(document).ready(function () {
    
    
    
    $('.btn').click(function (e) {
        e.preventDefault();

        let a = (a) => {
            for (let i = 0; i < a; i++) {
                $('.col-md-12').append(`<h2>${a}</h2>`);
            }
        }
        a($('input').val())
    });
});


// $('#todo').click(function (e) {
//   e.preventDefault();
//   if (!$.trim($('#inputtodo').val()) == '') {
//
//   }
//  });