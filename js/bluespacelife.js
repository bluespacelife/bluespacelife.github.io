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

/**
 * 获取URL地址栏中的参数
 * @param {参数名称} name 
 * @returns 
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}