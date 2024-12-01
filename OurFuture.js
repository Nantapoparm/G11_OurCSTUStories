//ฟังก์ชัน toggleMenu
function toggleMenu(){
    const menu  = document.querySelector("nav ul");
    menu.classList.toggle("active");
}
// ฟังก์ชันเพื่อคลิกแล้วแสดงข้อความ
function toggleText(card) {
    card.classList.toggle('clicked');
}