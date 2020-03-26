$("document").ready(function () {

    console.log("Hello")

    $("#submit-burger").on("click", function (event) {
        event.preventDefault();
        console.log($("#new-burger").val())
        $.post("/", { name: $("#new-burger").val() }).done(function (data) {
            location.reload();
        });
    });
    $(".eat-burger").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id")
        console.log(id);
        $.ajax({
            url: '/' + id,
            type: 'PUT',
            success: function (response) {
                location.reload();
            }
        })
    })


});