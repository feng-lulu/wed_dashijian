$(function() {
    // 点击 去注册 的链接
$('#link_reg').on('click', function(){
    $('.login-box').hide()
    $('.reg-box').show()
})


// 点击去登录链接
$('#link_login').on('click', function(){
    $('.login-box').show()
    $('.reg-box').hide()

})
})