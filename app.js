"use strict";
$(document).ready(function () {
    $('.box').css({
        "padding": "30px",
        "margin-top": "80px",
        "border-radius": "40px",
        "background-color": "#804c24",
        "width": "380px",
        "height": "300px"
    });
    $('.textbox h1').css({
        'font-size': '50px',
        'color': '#ffff',
        'font-weight': '700'
    });
    $('.minibox').css({
        'display':'flex',
        'align-items':'center',
        'flex-direction':'column'
    });
    $('input').css({
        "width": "300px",
        'margin':'30px 0 30px',
        'padding':'20px 0px 20px 20px',
        'font-size': '20px',
        "border-radius": "25px"
    });
    $('.btn').css({
        "width": "100px",
        'font-size': '20px',
        "background-color": "#ffff",
        "border-radius": "25px",
        "padding": "8px 0",
        'margin-top': "6px",
        'cursor':'pointer'
    });
});