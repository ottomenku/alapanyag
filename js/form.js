function selectlist(selectlistid,lang) {
    formrekord.forEach(myFunction)

    function myFunction(item, index) {
      $('#matlist').append(`<option value="'+item[0]+'">
                                      '+item[lang]+'
                                  </option>`);
    }

}
