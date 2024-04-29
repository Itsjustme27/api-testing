$(document).ready(function () {
    $("#helpId").hide();
    $("#emailHelpId").hide();
    $("#passwordHelp").hide();

    $("#fname").keyup(function(){
        validateFullName();
    });

    $("#email").keyup(function(){
        validateEmail();
    })

    $("#passwordHelp").keyup(function(){
        validatePassword();
    })

    function validateFullName(){
        let fullNameValue = $("#fname").val();
        if(fullNameValue.length == ""){
            $("#helpId").show();
        }
    }

    function validateEmail(){
        let emailValue = $("#email").val();
        if(emailValue.length == ""){
            $("#emailHelpId").show();
        }
    }

    function validatePassword(){
        let passwordValue = $("#password").val();
        if(passwordValue.length == ""){
            $("#passwordHelp").show();
        }

        if(passwordValue.length < 8){
            $("#passwordHelp").html("***Atleast 8 characters!");
        }
    }
});

