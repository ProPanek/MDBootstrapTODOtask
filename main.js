$(function () {
    console.log("ready");

    $("#btAdd").on("click", function () {
        console.log("btAdd");
        if ($("#iTitle").val() === "") {
            return alert("To pole jest wymagane")
        } else {
            $.ajax({
                method: "POST",
                url: "app.php",
                data: {
                    title: $("#iTitle").val(),
                    description: $("#iDescription").val()
                },
                success: function (response) {
                    console.log(response)
                    let result = JSON.parse(response)
                    if (result.status) {
                        alert(result.message)
                        $("#taskList").append("<div><span> Title: " + result.title + " Description: " + result.description + "</span><br></div>")
                    } else {
                        alert(result.message)
                    }

                },
                error: function (xhr) {
                    if (xhr.status != 200) {
                        swal(xhr.responseText)
                        Promise.reject(Error(xhr.responseText))
                    }
                }
            })
        }
    })
    $("#btRemove").on("click", function () {
        $("#taskList").children().last().remove()
    })
    $("#btClear").on("click", function () {
        $("#taskList").children().remove()
    })
});