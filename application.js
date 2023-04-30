$(document).ready(function () {
   var updateTotalPrice = function () {
      $("tbody tr").each(function (i,ele) {
         var price = parseFloat($(ele).find('.price').text());
         var Quantity = parseFloat($(ele).find('.qty input').val());
         console.log(ele)
         var itemTotal = price * Quantity;
         console.log(itemTotal)
         $(ele).find(".itemTotal").html(itemTotal);

         return itemTotal;
      });
      var priceTotal = 0;
      $('td[class*=".itemTotal"]').each(function () {
         priceTotal += parseFloat($(this).children(".itemTotal").text());
      });
      $('#priceTotal').text(priceTotal);
      }
      updateTotalPrice();

   $(document).on("click", ".btn.remove", function (event) {
      $(this).closest("tr").remove();
   });
   var timeout = undefined;
   $(document).on("keyup", ".qty input", function() {
      if (timeout) {
         clearTimeout(timeout);
      }
      timeout = setTimeout(function () {
         updateTotalPrice();
      },200);
   });
   $("#addItem").on("submit", function (event) {
      event.preventDefault();
      var name = $(this).children("[name=name]").val();
      var price = $(this).children("[name=price]").val();
      var qty = $(this).children("[name=qty]").val();
      $("tbody").append('<tr>' + ' <td class="name">' + name + "</td>" +
      '<td class="price">' + price + "</td>" + '<td class="qty input"><input min="0" type="number" value="' + qty + '"></td>' +
      '<td><button class="btn btn-light btn-sm remove">remove</button></td>' + '<td class="itemTotal"></td></tr>');
      updateTotalPrice();
   });
});
