$(document).ready(function () {
    $("#emailHelpId").hide();
    $("#passwordHelpId").hide();
    $("#lengthCount").hide();


    $("#email").keyup(function () { 
        validateEmail();
    });

    $("#password").keyup(function () { 
        validatePassword();
    });

    function validateEmail(){
        let emailValue = $("#email").val();
        if(emailValue.length == " "){
            $("#emailHelpId").show();
            $("#email").css("border-color", "red");
            return false;
        }else{
            $("#emailHelpId").hide();
            $("#email").css("border-color", "grey");
            return true;
        }
    }
    
    
    function validatePassword(){

        let passwordValue = $("#password").val();

        if(passwordValue.length == ""){
            $("#passwordHelpId").show();
            $("#password").css("border-color", "red");
            return false;
        }else{
            $("#passwordHelpId").hide();
            $("#password").css("border-color", "grey");
            return true;
        }
    }

    $("#login").click(function (e) {
        const validEmail = validateEmail();
        const validPassword = validatePassword();

        // If any validation fails, prevent submission
        if (!validEmail || !validPassword) {
            e.preventDefault();
        }
    });
});