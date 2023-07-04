mat = 'ms';
cat = 'rag';
subcat = 'rag';
fomenulist = [];
oldalmenutomb = [];

function almenutomb() {
    rekord.forEach(myFunction);
    //document.getElementById("demo").innerHTML = text;

    function myFunction(item, index) {
        if (mat == item[0])) {
        if (!oldalmenutomb.includes(item[1])) {
            oldalmenutomb.push(item[1]);
        } else {
            if (!oldalmenutomb[item[1]].includes(item[2])) {
                oldalmenutomb[item[1]].push(item[2]);
            }
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
        $(menuitem).attr("onclick", "oldalnuactiv(this); listaz(" + item + "); ");
        $("#fomenu").append(menuitem);

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
        $(menuitem).attr("onclick", "fomenuactiv(this); listaz(" + item + "); ");
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
    mat = e.id;
    // alert(mat);
}

function oldalmenuactiv(e) {
    $(".oldalmenu").removeClass("active");
    $(e).addClass("active");
    subcat = e.id;
    cat = $(e).parent().attr('id');
    // alert(cat);
    // alert(subcat);
}