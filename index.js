var callBackGetSucess = function(data){
    console.log("donnees api, data")

}

function buttonClickGet(){
    var url = "http://localhost:3000/api/cameras" ;

    $.get(url, callBackGetSucess).done(function() {

    })
    .fail(function (){
        alert ( "error" );
    })
.always(function(){

});
}