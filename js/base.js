mat = 'ms';
cat = 'rag';
subcat = 'rag';
fomenulist = [];


function fomenutomb() {
    rekord.forEach(myFunction);
    //document.getElementById("demo").innerHTML = text;

    function myFunction(item, index) {
        if (!fomenulist.includes(item[0])) {
            fomenulist.push(item[0]);
        }
    }

}


function fomenutomb() {
    rekord.forEach(myFunction);
    //document.getElementById("demo").innerHTML = text;

    function myFunction(item, index) {
        if (!fomenulist.includes(item[0])) {
            fomenulist.push(item[0]);
        }
    }

}

function fomenu() {
    $("#fomenu").html('');

    fomenulist.forEach(myFunction);

    function myFunction(item, index) {
        menuitem = $("#menu1").clone()
        $(menuitem).text(linktext[item]);
        $(menuitem).attr("id", item);
        $(menuitem).attr("onclick", "listaz(" + item + "); fomenuactiv(this);");
        $("#fomenu").append(menuitem);

    }
}

function listaz(ujcat) {
    alert("listaz");
}

function cat_change(ujcat) {
    cat = ujcat;
}

function kiir() {

    alert(cat);
}

function fomenuactiv(e) {
    $(".fomenu").removeClass("active");
    $(e).addClass("active");
}

function oldalmenuactiv(e) {
    $(".oldalmenu").removeClass("active");
    $(e).addClass("active");
}