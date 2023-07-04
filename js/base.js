mat = 'ms';
cat = 'rag';
subcat = 'rag';
fomenulist = [];
oldalmenuobj = {};
//["ms", "rag", "sok", "kep", "note"],
function oldalmenutomb() {
    rekord.forEach(myFunction);
    //document.getElementById("demo").innerHTML = text;

    function myFunction(item, index) {
        if (mat == item[0]) {
            if (!oldalmenuobj.includes(item[1])) {
                oldalmenuobj.push(item[1]);
            } else {
                if (!oldalmenuobj[item[1]].includes(item[2])) {
                    oldalmenuobj[item[1]].push(item[2]);
                }
            }
        }

    }
}
function oldalmenu() {
   oldalmenuobj.forEach(myFunction);

    function myFunction(item, index) {
        blockindex="oldalmenublock"+index;
        block = $("#oldalmenublock").clone();
        $(block).attr("id","oldalmenublock"+index );
      $("#oldalmenu").append(menuitem);
        menukat=$("#oldalmenukat").clone();
        $(menukat).attr("id", index);
         $(menukat).text(linktext[index]);
        $("#oldalmenublock"+ index).append(menuitem); 
       item.forEach(myFunction2);
    function myFunction2(item, index) {
        menuitem=$("#oldalmenu").clone()
        $(menuitem).attr("onclick", "oldalmenuactiv(this); listaz(" + item + "); ");
         $(menuitem).attr("id", item)
         $(menuitem).text(linktext[item]);
        $("#"+blockindex).append(menuitem);
    }
    }
}
function fomenu() {
   // $("#fomenu").html('');

    fomenulist.forEach(myFunction);

    function myFunction(item, index) {
        menuitem = $("#menu").clone()
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
