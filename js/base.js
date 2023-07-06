mat = 'db';
cat = 'rag';
subcat = 'rag';
fomenulist = [];
oldalmenuobj = {};
//["ms", "rag", "sok", "kep", "note"],
function inobj(obj, keres) {
    var found = false;
    for (var i = 0; i < obj.length; i++) {
        if (vendors[i].Name == keres) {
            found = true;
            break;
        }
    }
    return found;
}

function itemlistaz(e) {
    id = e.id;
    const myArray = id.split("_");
    let kat0 = myArray[0];
    let subkat0 = myArray[1];
    $("#content").html("");
    rekord.forEach(itemlista);

    function itemlista(item, index) {
        // console.log('fff');
        note = item[4];
        src = item[3];
        subkat = item[2];
        kat = item[1];
        mat = item[0];

        itemblock = $("#itemblock").clone();
        $(itemblock).attr("id", 'itemblock' + index);

        imageblock = $("#imageblock").clone();
        $(imageblock).attr("id", 'imageblock' + index);
        $(imageblock).html(' <img id="image" src=" image/doboz.jpg " width="90% ">');

        itemnote = $("#itemnote").clone();
        $(itemnote).attr("id", "itemnote" + index);
        // $(menukat).text(linktext[note]);
        $(itemnote).html(note);

        $(itemblock).append(imageblock);
        $(itemblock).append(itemnote);
        $("#content").append(itemblock);


    }
}

function oldalmenu() {
    $("#oldalmenu").html('');
    rekord.forEach(oldalmenus);

    function oldalmenus(item, index) {

        kat = item[1];
        menuitem = item[2];


        if (mat == item[0]) {

            if (!$('#block' + kat).length) {
                oldalmenublock(kat);
            }

            if (!$('#kat' + kat).length) {
                oldalmenukat(kat);
            }
            if (!$('#' + kat + '_' + menuitem).length) {
                oldalmenuitem(kat, menuitem);
            }

        }
    }

}




function oldalmenublock(kat) {

    block = $("#oldalmenublock").clone();
    $(block).attr("id", 'block' + kat);
    $("#oldalmenu").append(block);

}

function oldalmenukat(kat) {

    menukat = $("#oldalmenukat").clone();
    $(menukat).attr("id", 'kat' + kat);
    $(menukat).text(linktext[kat]);
    $("#block" + kat).append(menukat);
}

function oldalmenuitem(kat, itemid) {

    item = $("#oldalmenuitem").clone();
    $(item).attr("id", kat + "_" + itemid);
    $(item).text(linktext[itemid]);
    $("#block" + kat).append(item);
}

function fomenu() {
    // $("#fomenu").html('');

    fomenulist.forEach(myFunction);

    function myFunction(item, index) {
        menuitem = $("#menu").clone()
        $(menuitem).text(linktext[item]);
        $(menuitem).attr("id", item);
        //   $(menuitem).attr("onclick", "fomenuactiv(this); listaz(" + item + "); ");
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

function fomenulistaz(e) {
    fomenuactiv(e);
    mat = e.id;
    oldalmenu();

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
    // alert(mat);
}

function basefomenuactiv() {
    $(".fomenu").removeClass("active");
    $("#" + mat).addClass("active");
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