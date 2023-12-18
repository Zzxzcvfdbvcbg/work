; (function () {
  //计数
  function count() {
    $('.todo-count strong').text($('#todoList li').length)
  }
  // 新增
  $('#addTodo').keyup(function (e) {
    if (e.key === 'Enter') {
      let value = $(this).val()
      if (value !== '') {
        $('#todoList').append(`<li style="display:none">
            <div class="view">
              <label>${value}</label>
              <button class="destroy"></button>
            </div>
          </li>`)
        $('#todoList li').last().slideDown(function () {
          count()
        })
        $(this).val('')
      }
    }
  })
  // 删除
  $('#todoList').on('click', '.destroy', function () {
    $(this).parent().parent().fadeOut(function () {     //destory
      $(this).remove()
      // console.log(this)    li
      count()
    })
  })
  //计数

})()