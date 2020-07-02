$(function() { // 販売利益の計算
  $('.containt__main__container__fifth__box__maney--box2').on('input', function () {
    var data = $('.containt__main__container__fifth__box__maney--box2').val();
    var profit = Math.floor(data * 0.9)
    var fee = (data - profit)
    if (data >= 300 && data <= 9999999){
      $('.containt__main__container__fifth__box__commission__up--number').html(fee.toLocaleString())
      $('.containt__main__container__fifth__box__commission__up--number').prepend('¥')
      $('.containt__main__container__fifth__box__commission__2__down--number').html(profit.toLocaleString())
      $('.containt__main__container__fifth__box__commission__2__down--number').prepend('¥')
    }
    else {
      $('.containt__main__container__fifth__box__commission__up--number').html('-');
      $('.containt__main__container__fifth__box__commission__2__down--number').html('-');
    }
  });
});