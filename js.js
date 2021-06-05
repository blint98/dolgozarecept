
var etelekTomb = [];

$(function () {

   $("article").on("click", "div", Megjelenit);
       
                        
       
   });
     $("article").on("click", ".modosit", function(){     
                        var index = Number($(this).attr("index")); 
                        urlapModosit(index);      
                        
   });
   
   $.ajax(
            {url: "etelek.json", success: function (result) {
                    console.log(result);
                    etelekTomb = result;  
                  
                    etlap();
                     urlapMegjelenit();
                    
                   
                }});
  
    });



    



function etlap(){
   $("article").empty();
    for (var item in etelekTomb) {
        var etelRekord ="<p><b>Étel neve</b>: "+etelekTomb[item]["nev"]+"</p>\n\
                          <p><b>Kategória</b>: "+etelekTomb[item]["kategoria"]+"</p>\n\
                          <p> <b>Elkészítési idő</b>: "+etelekTomb[item]["elkeszitesi_ido"]+"</p>\n\
                           <img src='" + etelekTomb[item]['eleresi_ut'] + "' alt='" + etelekTomb[item]['eleresi_ut'].slice(6,etelekTomb[item]['eleresi_ut'].length-4) + "' >\n\
                            <p><b>Ár</b>: "+etelekTomb[item]["ar"]+" Ft</p>\n\
                           <p><b>Db</b>: <input type='text' id='"+etelekTomb[item]["nev"]+"_db'></p>\n\
                            <div id=gombok><input type='button' class='modosit' index='"+item+"' value='Módosít'><input type='button' class='torol' index='"+item+"' value='Töröl'></div>"; 
                        $("article").append("<div id='"+etelekTomb[item]["nev"]+"'>"+etelRekord+"</div>");
         
                        }    

    }



function urlapMegjelenit(){
$("section").empty();
$("section").append("<div id = urlap><h2>Új adat felvitele</h2>\n\
                        <form >\n\
                        <div>\n\
                        <label for='nev'>Név: </label><input type='text' name='nev' id='nev' >\n\
                        <label for='kategoria'>Kategória: </label><input type='text' id='kategoria' name='kategoria'>\n\
                        <label for='elkeszitesi_ido'>Elkészítési idő</label><input type='number' id='elkeszitesi_ido' name='elkeszitesi_ido'>\n\
                        <label for='eleresi_ut'>Kép elérési útja: </label><input type='text' id='eleresi_ut' name='eleresi_ut'>\n\
                        \n\ <label for='ar'>Ár: </label><input type='number' id='ar' name='ar'> \
                        <input type='button' id ='beszur' value='Beszúr'> \n\
                        </div>\n\
                        </form>\n\
                        </div>");





}

function urlapModosit(index){
$("section").empty();
$("section").append("<div id = urlap><h2>Új adat felvitele</h2>\n\
                        <form >\n\
                        <div>\n\
                        <label for='nev'>Név: </label><input type='text' name='nev' id='nev' value='"+etelekTomb[index]["nev"]+"' >\n\
                        <label for='kategoria'>Kategória: </label><input type='text' id='kategoria' name='kategoria' value='"+etelekTomb[index]["kategoria"]+"'>\n\
                        <label for='elkeszitesi_ido'>Elkészítési idő</label><input type='number' id='elkeszitesi_ido' name='elkeszitesi_ido' value='"+etelekTomb[index]["elkeszitesi_ido"]+"'>\n\
                        <label for='eleresi_ut'>Kép elérési útja: </label><input type='text' id='eleresi_ut' name='eleresi_ut' value='"+etelekTomb[index]["eleresi_ut"]+"'>\n\
                        \n\ <label for='ar'>Ár: </label><input type='number' id='ar' name='ar' value='"+etelekTomb[index]["ar"]+"'> \
                        <input type='button' id ='mentes' value='Mentés'> \n\
                        </div>\n\
                        </form>\n\
                        </div>");

$("#urlap").addClass("urlapFormaz");
$("#mentes").click(etelObjektumFelulir(index));


}



function etelObjektumFelulir(index){
        
        var etelObjektum = {
        nev: $("#nev").val(),
        elkeszitesi_ido: $("#elkeszitesi_ido").val(),
        eleresi_ut: $("#eleresi_ut").val(),
        ar: $("#ar").val(),
        kategoria: $("#kategoria").val()                    
        };
        console.log("felülírt: "+etelObjektum);
        etelekTomb[index]=etelObjektum;
        console.log(etelekTomb);
        kinalatMegjelenit();
}

