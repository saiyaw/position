$(document).ready(function() {

    $("#btnsave").click(function() {
        $.ajax({
            url: '/insertpatient',
            type: 'POST',
            async: false,
            //            dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
            data: {
                "name": $("#ipname").val(),
                "age": $("#ipage").val(),
                "gender": $("#sgender").val()
            },
        }).done(function(output) {
            //alert(output);
        }).fail(function() {
            console.log("error");
            alert("error");
        }).always(function() {
            console.log("complete");
        });

    });

    $('#example').DataTable({
   //     "processing": true,
        "serverSide": true,
        "ajax" : {
            "url":"/getpatients",
            "datasrc" :""
        },
        "columns": [
            { "data": "Id" },
            { "data": "Name" },
            { "data": "Age" },
            { "data": "Gender" },
            { "data": "Istrained" },
            { "data": "Created" },
            { "data": "Updated" }

        ]
    });




});