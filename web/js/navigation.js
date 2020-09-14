$(document).ready(function() {
    // When the document is ready/loaded, execute function

    // $("#createCategory").hide();



    $("#createCategory").click(function() {
        //alert("button");

        //document.getElementById("#dialogCreateCategory").style.display = 'none';
        $("#dialogCreateCategory").show();

        // $("#dialogCreateCategory").hide();
        // $("#dialogCreateCategory").style.display = "block";
    });



    $("#cancel").click(function() {
        $("#dialogCreateCategory").hide();
    });

    $("#create").click(function() {

        var text = $('#name').val();
        var category = [{ "name": text, "creationDate": Date.now() }];
        //alert(JSON.stringify(category))
        insertCategory(category);
        $("#dialogCreateCategory").hide();
    });
})