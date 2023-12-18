; (function () {
  //顶部高亮
  $(window).scroll(function () {
    let top = $('html').scrollTop()
    // console.log(top)
    if (top > 0) {
      $('.header').addClass('scrolled')
    } else {
      $('.header').removeClass('scrolled')
    }
  })
  //返回顶部
  $(window).scroll(function () {
    let top = $('html').scrollTop()
    // console.log(top)
    if (top > 200) {
      $('.gotop').css('display', 'block').click(function () {
        $('html').scrollTop(0)
      })
    } else {
      $('.gotop').css('display', 'none')
    }
  })
})()
