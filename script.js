$(function () {
    var buttons = $('.add-element');
    var boxContainer = $('#box-container');
    var boxCounter =0;
    var kupmnie =$('#buy');
    var usun =$('#dell');
    var sumOfPrices =0;
    var dellMe = $('.dellMe');
    buttons.on('click',function () {
        if(boxCounter<=7){
            var children =$(this).parent().children();
            var name =$(children[1]).text();
            var price =$(children[2]).text();
            var parsedPrice =parseInt(price);
            sumOfPrices = sumOfPrices + parsedPrice;
            $('#suma').text(sumOfPrices);
            var newElement =$('<div class="box">' +
                   name+'<br>'+ '<span>'+price+'</span>'+' zł'+'<br>'+'<button class="dellMe">Usun</button>'+
                '</div>');
            boxContainer.append(newElement);
            boxCounter++;
            dellMe =$('.dellMe');

            dellMe.off();

            dellMe.on('click',function () {

                boxCounter--;
                var children = $(this).parent().children();
                var price = $(children[1]).text();
                sumOfPrices -=parseInt(price);
                $('#suma').text(sumOfPrices);
                $(this).parent().remove();

            });
        }

    });


    kupmnie.on('click',function () {
        window.alert('Dziękujemy za zakupy');
    });

    usun.on('click',function () {
        $('.box').remove();
        sumOfPrices =0;
        $('#suma').text(sumOfPrices);
        boxCounter =0;

    });




});

