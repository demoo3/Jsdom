"use strict";
$(document).ready(function () {

   //$('#todo').click(function (e) {
   //    e.preventDefault();
   //    function myel(myclass = "") {
   //        if (!$.trim($('#inputme').val()) == '') {
   //            let vall = $('#inputtodo').val()
   //                , newH2 = $('<h2> </h2>')
   //                , newDiv = $('<div class="line"> </div>')
   //                , bigDiv = $(`<div ${myclass} > </div>`)
   //            $(newH2).append(vall)
   //            $(newDiv).append(newH2)
   //            $(bigDiv).append(newDiv)
   //            return bigDiv
   //        }
   //        else {
   //            return
   //        }
   //    }
   //    $("#messagetodo").append(myel())
   //    $("#messagetodo").append(myel('class="end"'))
   //    $("#inputtodo").val("")
   //    document.querySelector("#messagetodo").scrollTo(0, document.querySelector("#messagetodo").scrollHeight)
   //    document.querySelector("#messagetodo").scrollTo(0, document.querySelector("#messagetodo").scrollHeight)
   //});

    $('.btn').click(function (e) {
        e.preventDefault();

        let a = (a) => {
            for (let i = 0; i < a; i++) {
                $('.col-md-12').append(`<h2>${a}</h2>`);
                
                $('h2').css({
                    'font-size':'25px',
                    'border':'2px solid #8d8b8b',
                    'width':'290px',
                    'border-radius':'25px',
                    'text-align':'center',
                    'margin': '20px 0 0',
                    'padding': '15px 0 15px'
                });
            }
        }
        a($('input').val())
    });
});

