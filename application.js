$(document).ready(function () {
   var updateTotalPrice = function () {
      var priceTotal = 0;

      $("tbody tr").each(function (i,ele) {
         var price = parseFloat($(ele).find('.price').text());
         var Quantity = parseFloat($(ele).find('.qty input').val());
         // console.log(ele)
         var itemTotal = price * Quantity;
         // console.log(itemTotal)
         $(ele).find(".itemTotal").html(itemTotal);
         priceTotal += itemTotal;
         return itemTotal;
      });
      
      // console.log(priceTotal);
      $('#priceTotal').text(priceTotal);
   }
   updateTotalPrice();

   $(document).on("click", ".btn.remove", function (event) {
      $(this).closest("tr").remove();
      updateTotalPrice();
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
