var menulateral = false

$(document).ready(function () {
    if (menulateral == false) {
        console.log("menu cerrado")
    };
    if (menulateral == true) {
        console.log("menu abierto")
    };
}
)

$(function () {
    $('#hambButton').click(function () {
        $('.menuContenedor').slideDown();
    })

    $('#closeButton').click(function () {
        $('.menuContenedor').slideUp();
    })
})