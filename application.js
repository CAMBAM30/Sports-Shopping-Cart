$(document).ready(function () {
  $("tbody tr").each(function (i,ele) {
   var price = parseFloat($(ele).children('.price').text());
   var Quantity = parseFloat($(ele).children('.qty').text());

      var itemTotal = price * Quantity;
      $(ele).children(".itemTotal").html(itemTotal);

      return itemTotal;
   });
   var priceTotal = 0;
   $('td[class*=".itemTotal"]').each(function () {
      priceTotal += parseFloat($(this).children(".itemTotal").text());
   });
   $('#priceTotal').text(priceTotal);

  

   $(document).on("click", ".btn.remove", function (event) {
      $(this).closest("tr").remove();
   });

   $(document).on("input", "tr input", function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
         updateTotalPrice();
      }, 1000);
   });

   $("#addItem").on("submit", function (event) {
      event.preventDefault();
      var name = $(this).children("[name=name]").val();
      var price = $(this).children("[name=price]").val();
      var qty = $(this).children("[name=qty]").val();
      var itemTotal = $(this).children("[name=itemTotal]").val();

      $("tbody").append('<tr>' +' <td class="name">' + name + "</td>" +
      '<td class="price">' + price + "</td>" + '<td class="qty">' + qty + "</td>" +
      '<td><button class="btn btn-light btn-sm remove">remove</button></td>' + '<td class="itemTotal">' + itemTotal + "</td>");

   });
});
