// SCROLL REVEAL 
window.sr = ScrollReveal();
    sr.reveal('.hero h1', {
        duration: 1000,
        origin:'left',
        distance:'300px',
    });
    sr.reveal('.hero h2', {
        duration: 1000,
        origin:'bottom',
    });
    sr.reveal('.profile-pic, .pic-bg', {
        duration: 1000,
        origin:'right',
        distance:'300px',
    });
    sr.reveal('.current-projects', {
        duration: 1000,
        origin:'bottom',
    });

//  REMOVED BECAUSE IT EFFECTED CSS HOVER STATE
//    sr.reveal('.tile', { duration: 2000 }, 50);
    
    sr.reveal('.project-tn', {
        duration: 1000,
        origin:'bottom',
    });

    sr.reveal('.project-blurb', {
        duration: 1000,
        origin:'left',
        distance:'200px',
    });

// SCROLL TO TOP 



// ARRAY OPACITY



$( document ).ready(function() {

});


var tiles = Array('.t01','.t02','.t03','.t04','.t05','.t06','.t07');
var rand = tiles[Math.floor(Math.random()*tiles.length)];
console.log(rand);

var inst = tiles;

inst = jQuery.grep(inst, function(value) {
  return value != removeItem;
});


//$(window).ready(function(){
//    console.log(instance);
//    $(rand).css("opacity","1");
//});



// NEW ATEMPT
// TODO: Switch JS to slide up HUD
//
//var tiles = Array('.t01','.t02','.t03','.t04','.t05','.t06','.t07');
////var rand = tiles[Math.floor(Math.random()*tiles.length)];
//
//for (tiles; tiles; tiles) {
//    $( window ).ready(function() {
//        var rand = tiles[Math.floor(Math.random()*tiles.length)]
//        console.log(rand);
//        console.log("ready!");
//        $(tiles.random).css("opacity",".95");
//    });
//};


// THIRD ATEMPT

//var tiles = Array('.t01','.t02','.t03','.t04','.t05','.t06','.t07',);
//var rand = tiles[Math.floor(Math.random()*tiles.length)];
//
//console.log("The selected tiles is" + rand)
//
//$( )(function(){
//   $(rand).css("opacity", ".95"); 
//});



