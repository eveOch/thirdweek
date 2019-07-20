function validateEmail(email) {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(email);
}

function localS() {
    $("#email").val(localStorage.getItem('email'));
}

localS();

function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
    $("#email").val(localStorage.getItem('email'));

    if (validateEmail(email)) {
        $result.text(email + " подтвержден.");
        $('#result').css('backgroundColor', 'green');
        //$('form').css('display', 'none');
        $('#result').css('backgroundColor', 'green');
        localStorage.setItem('email', email)
            //console.log(localStorage.getItem('email'))
    } else {
        $result.text("Введите почту в формате xxx@xxx.xx");
        $('#result').css('backgroundColor', 'red');
    }
    return false;
}
$("#validate").bind("click", validate);