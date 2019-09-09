
var divisions = divisions_data;
var locations = locationsData;
var searchParams = new URLSearchParams(window.location.search);

let app = new Vue({
    el: '#app',
    data: {
        divisions: divisions_data,
        matchDetail: {},
        locationsDetail: {}
        }
    })

console.log(divisions);

function positions() {
    var winner = "";
    for(var i = 0; i < divisions.U1.length; i++) {
        
        
        winner = divisions.U1[i].home_team;

    }
    return winner;
}



function searchGame(divisionslist) {
    console.log(divisionslist)
    console.log(divisionslist.match_ID)
    app.matchDetail = divisionslist
    searchLocation(locations)
    
    /* ---ESTO ERA CUANDO TENIA LINK A GAME_DETAIL.HTML--
    //var gameId = searchParams.get("gameId")
    var gameId = divisions.match_ID

    for (division in divisionslist) {
        for (var i = 0; i < divisionslist[division].length; i++) {
            if (divisionslist[division][i].match_ID == gameId) {
                app.matchDetail = divisionslist[division][i]
            }
        } 
    }*/
}


function searchLocation(locations) {
    console.log(locations)
    
    for (var i = 0; i < locations.length; i++) {
        if (locations[i].school == app.matchDetail.home_team) {
            app.locationsDetail = locations[i]
        }


    /*var locacion = searchParams.get("locacion")


        for (var i = 0; i < locationlist.length; i++) {
            if (locationlist[i].school == locacion) {
                app.locationsDetail = locationlist[i]
            }
        }*/
    
}
}

//SPA----
$(document).ready(function() {
    var mainPage = $("#main-page").height();
    var about = $("#about").height();
    var rules = $("#rules").height();
    var contact = $("#contact").height();
    var back = $("#back").height();
    var gD = $("#gameDetail").height();

    $("#main-page,#about,#rules,#contact,#back").height(Math.max(mainPage, about, rules, contact, back, gD));
    $("#about,#rules,#contact,#gameDetail").hide();

});

$("#about-link").click (function() {
    $("#about").show();
    $(".main-page").hide();
    $("#rules").hide();
    $("#back").show();
    $("#contact").hide();
});

$("#rules-link").click (function() {
    $("#about").hide();
    $(".main-page").hide();
    $("#rules").show();
    $("#contact").hide();
    $("#back").show();
});

$("#contact-link").click (function() {
    $("#contact").show();
    $("#about").hide();
    $(".main-page").hide();
    $("#rules").hide();
});


$(".gameDetail-link").click (function() {
    $("#contact").hide();
    $("#about").hide();
    $(".main-page").hide();
    $("#rules").hide();
    $("#gameDetail").show();
    $("#back").show();
});


//SPA----

//searchLocation(locationlist);

console.log(searchParams.get("gameId"));
console.log(searchParams.get("locacion"));


