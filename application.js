$(document).ready(function () {
  $("tbody tr").each(function (i,ele) {
   var price = parseFloat($(ele).children(".price").text());
   var Quantity = parseFloat($(ele).children(".qty").text());

      var itemTotal = price * Quantity;
      console.log(itemTotal);
   });
});