function Reset(){
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("ketqua").value = null;

}
function Cong(){
    var a = parseInt(document.getElementById("a").value) || 0
    var b = parseInt(document.getElementById("b").value) || 0
    document.getElementById("ketqua").value = a + b;
}
function Tru(){
    var a = parseInt(document.getElementById("a").value) || 0
    var b = parseInt(document.getElementById("b").value) || 0
    document.getElementById("ketqua").value = a - b;
}
function Nhan(){
    var a = parseInt(document.getElementById("a").value) || 0
    var b = parseInt(document.getElementById("b").value) || 0
    document.getElementById("ketqua").value = a * b;
}
function Chia(){
    var a = parseInt(document.getElementById("a").value) || 0
    var b = parseInt(document.getElementById("b").value) || 0
    if(b == 0){
        alert("Khong chia được cho b");
        document.getElementById("ketqua").value = null;
    }
    else document.getElementById("ketqua").value = a / b;
}