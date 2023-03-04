window.onload = (()=>{
    doTHisOnLoad();
});
const doTHisOnLoad = (() => {
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();
})
var b1 = document.getElementById("btn");
var b2 = document.getElementById("l1")
function togglebtn() {
    b1.classList.toggle("active");
    b2.classList.toggle("on");
}
