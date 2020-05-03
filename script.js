$(document).ready(function () {
  console.log('halo');
  $.get("http://api.kawalcorona.com/", function (data) {
    var array = data;

    function load(row, page) {
      $("tbody").html("");
      let limit = parseInt(row);
      let cur_page = parseInt(page);
      let total_page = Math.ceil(array.length / limit);
      // console.log(array);
      let length = limit * (cur_page + 1);
      if (length >= array.length) {
        length = array.length;
      }
      let offset = cur_page * limit;
      $("#cur_page").text(cur_page + 1);
      $("#total_page").text(total_page);
      for (var i = offset; i < length; i++) {
        $('tbody').append('<tr>');
        $('tbody').append('<td>' + parseInt(i + 1) + '.' + '</td>');
        $('tbody').append('<td>' + array[i].attributes.Country_Region + '</td>');
        $('tbody').append('<td>' + array[i].attributes.Confirmed + '</td>');
        $('tbody').append('<td>' + array[i].attributes.Active + '</td>');
        $('tbody').append('<td>' + array[i].attributes.Deaths + '</td>');
        $('tbody').append('<td>' + array[i].attributes.Recovered + '</td>');
        $('tbody').append('</tr>');


      }


    }

    load(10, 0);



    $(document).on('click', ".page-item", function (e) {
      e.preventDefault();
      var key = $(this).attr("data");
      var total = $("#total_page").text();
      var cur_page = $("#cur_page").text();
      var page = parseInt(cur_page) - 1;
      var length = parseInt(total) - 1;
      if (key == "prev") {
        if (page <= 0) {
          page = 0;
        } else {
          page--;
        }
      } else if (key == "next") {
        if (page >= length) {
          page = length;
        } else {
          page++;
        }
      }
      load(10, page);
      console.log($('tbody tr'));
    })

  });


  if ($('tbody tr').text() == '') {
    console.log('ksg');
  }


})


// var array = ["shelli", "shari", "prapti", "rifkie", "jaka", "adi", "chelsea", "siti", "cucu", "neni", "jeji"];

// function show(row, page) {
//   $("tbody").html("");
//   let limit = parseInt(row);
//   let cur_page = parseInt(page);
//   let total_page = Math.ceil(array.length / limit);
//   let length = limit * (cur_page + 1);
//   if (length >= array.length) {
//     length = array.length;
//   }
//   let offset = cur_page * limit;
//   $("#cur_page").text(cur_page + 1);
//   $("#total_page").text(total_page);
//   for (var i = offset; i < length; i++) {
//     $("tbody").append(`<tr>
//                                     <td>${i + 1}</td>
//                                     <td>${array[i]}</td>
//                                     </tr>`);
//   }

// }
// show("4", "0");

