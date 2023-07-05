mat = 'ms';
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

function oldalmenutomb() {
    rekord.forEach(myFunction);
    //document.getElementById("demo").innerHTML = text;

    function myFunction(item, index) {
        kat = item[1];
        menu = item[2];
        if (mat == item[0]) {
            if (!inobj(oldalmenuobj, kat)) {
                oldalmenuobj[kat] = []
                    // oldalmenuobj.push({ kat: [] });
            } else {
                if (!oldalmenuobj[kat].includes(menu)) {
                    oldalmenuobj[kat].push(menu);
                }
            }
        }

    }
}

function oldalmenu() {


    Object.entries(oldalmenuobj).forEach(entry => {
        const [key, value] = entry;
        // console.log(key, value);
        blockindex = "oldalmenublock" + key;
        block = $("#oldalmenublock").clone();
        $(block).attr("id", blockindex);
        $("#oldalmenu").append(block);


        menukat = $("#oldalmenukat").clone();
        $(menukat).attr("id", key);
        $(menukat).text(linktext[key]);
        $("#oldalmenublock" + key).append(menuitem);

    });

}
/*

function oldalmenu() {
    oldalmenuobj.forEach(myFunction);

    function myFunction(item, index) {
        blockindex = "oldalmenublock" + index;
        block = $("#oldalmenublock").clone();
        $(block).attr("id", "oldalmenublock" + index);
        $("#oldalmenu").append(menuitem);
        menukat = $("#oldalmenukat").clone();
        $(menukat).attr("id", index);
        $(menukat).text(linktext[index]);
        $("#oldalmenublock" + index).append(menuitem);
        item.forEach(myFunction2);

        function myFunction2(item, index) {
            menuitem = $("#oldalmenu").clone()
            $(menuitem).attr("onclick", "oldalmenuactiv(this); listaz(" + item + "); ");
            $(menuitem).attr("id", item)
            $(menuitem).text(linktext[item]);
            $("#" + blockindex).append(menuitem);
        }
    }
}
*/
function fomenu() {
    // $("#fomenu").html('');

    fomenulist.forEach(myFunction);

    function myFunction(item, index) {
        menuitem = $("#menu").clone()
        $(menuitem).text(linktext[item]);
        $(menuitem).attr("id", item);
        $(menuitem).attr("onclick", "fomenuactiv(this); listaz(" + item + "); ");
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