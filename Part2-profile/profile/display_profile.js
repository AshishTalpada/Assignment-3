"use strict";

$(document).ready(() => {
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");
    const postal = sessionStorage.getItem("postal");
    const dob = sessionStorage.getItem("dob");

    $("#email").text(email);
    $("#phone").text(phone);
    $("#postal").text(postal);
    $("#dob").text(dob);

    $("#back").click(() => {
        history.back();
    });
});
