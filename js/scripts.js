$(document).ready(function () {
  $("#sentForm").submit(function (event) {
    event.preventDefault();
    var preSplit = $("input#sentence").val();

    const indWords = preSplit.split(' ');
    const newWords = [];
    indWords.forEach(function (indWord) {
      if (indWord.length >= 3) {
        newWords.push(indWord);
      }
    });
    newWords.reverse();
    $("#outDiv").removeClass("hide");
    $("#out").text(newWords.join(' '));


  });


});