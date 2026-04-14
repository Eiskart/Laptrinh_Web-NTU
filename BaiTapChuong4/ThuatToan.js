
var a = 5
var b = 6
document.writeln(a+'+'+b+'='+TongHaiSo(a,b))
document.writeln(a+'-'+b+'='+HieuHaiSo(a,b))

document.writeln(a+'*'+b+'='+TichHaiSo(a,b))
document.writeln(a+'/'+b+'='+ThuongHaiSo(a,b))


var TongHaiSo = (a,b)=>{
    return a+b;
}
var HieuHaiSo = (a,b) =>{
    return a-b;
}
var TichHaiSo = (a,b)=>{
    return a*b;
}
var ThuongHaiSo = (a,b)=>{
    if(b!=0){
        return a/b;
    }
    else{
        return null
    }
}