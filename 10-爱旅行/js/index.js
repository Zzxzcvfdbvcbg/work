; (function () {
  //返回顶部
  $(window).scroll(function () {
    let $top = $('html').scrollTop()
    console.log($top)
    if ($top >= 200) {
      $('.gotop').stop().fadeIn(1000)
    } else {
      $('.gotop').stop().fadeOut(1000)
    }
  })
  $('.gotop').click(function () {
    $('html').animate({
      scrollTop: 0
    })
  })
  //意见反馈
  $('.suggest').click(function () {
    $('.sugform').slideDown()
  })
  $('.close').click(function () {
    $('.sugform').slideUp()
  })
  // 自动轮播
  function autoPlay() {
    let $last = $('.wblist').last()
    // console.log($last);
    $('.wbdesc').prepend($last)
    let height = $last.outerHeight(true)
    $('.wbdesc').css('top', -height)
    $('.wbdesc').delay(2000).animate({
      top: 0
    }, function () {
      autoPlay()
    })
  }
  autoPlay()

})()