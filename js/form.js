function selectlist(selectlistid,lang) {
    mattype.forEach(myFunction)

    function myFunction(item, index) {
      $('#matlist').append(`<option value="'+item[0]+'">
                                      '+item[lang]+'
                                  </option>`);
    }

}
