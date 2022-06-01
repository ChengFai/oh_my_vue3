//这是一个专门用来测试typescript的文件夹
var num1 = 60;
var num2 = 10;
var num3 = 5;
var res = 0;
function optionalArgs(n1, n2) {
    if (n2) {
        return n1 + n2 + "";
    }
    else {
        return n1 + "";
    }
}
console.log(optionalArgs(num1, 90));
