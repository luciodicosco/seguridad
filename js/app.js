var menulateral = false

$(function () {
    $('#hambButton').click(function () {
        checkHambMenu()
    })
})

function checkHambMenu() {
    if (menulateral == true){
        $('.menuContenedor').slideDown();
        menulateral = false
    } else {
        $('.menuContenedor').slideUp();
        menulateral = true
    }
}
