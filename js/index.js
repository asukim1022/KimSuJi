$(".listInner").click(function () {
    newProjectPopup(true);
});

function newProjectPopup(checked) {
    if (checked == true) {
        $(".projectMain_newProjectPopup").css({
            "display": "block"
        });
        $(".projectMain_newProjectPopup_wrapClose").css({
            "display": "block"
        });

    } else {
        $(".projectMain_newProjectPopup").css({
            "display": "none"
        });
        $(".projectMain_newProjectPopup_wrapClose").css({
            "display": "none"
        });
    }
}