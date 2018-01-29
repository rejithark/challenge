var challenge = function () {
    return {
        init: function () {                       
            $("#date").change(function () {
                var dateOfBirth = $("#date").val();
                var dob = new Date(dateOfBirth);
                var today = new Date();
                var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
                if (age >= 18) {
                    $("#proceed").prop("disabled", false).removeClass("disabled");

                } else {
                    $("#proceed").prop("disabled", true).addClass("disabled");
                }
            });                  
            
            $("#proceed").click(function () {
                var dateOfBirth = $("#date").val();
                window.alert(dateOfBirth);
                
            });
        }
    }
}();


