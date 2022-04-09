/**
 * 进入系统0
 */
function goToSystem0() {
    $("#home-gate").hide();
    $("html").css("background-color", "#111");
    $("body").css("background-color", "#111");
    $("#system0").show();
}

/**
 * 进入系统1
 */
function goToSystem1() {
    $("#home-gate").hide();
    $("#system1").show();
}