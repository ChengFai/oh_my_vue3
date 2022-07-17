//这是一个专门用来测试typescript的文件夹
const num1:number = 60 ;
const num2:number = 10 ;
const num3:number = 5 ;
let res:number = 0;

function optionalArgs(n1:number, n2?:number):string{
    if(n2){
        return n1 + n2 + "";
    }else{
        return n1 + "";
    }
}
//冒号前加问号表示可选参数

console.log(optionalArgs(num1, 90));
