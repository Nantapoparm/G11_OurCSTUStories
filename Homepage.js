document.addEventListener("DOMContentLoaded", () => {
    const guestForm = document.getElementById("guestForm");
    const entriesList = document.getElementById("entriesList");

    // ฟังก์ชันบันทึกข้อมูลใน localStorage
    function saveEntries(entries) {
        localStorage.setItem("guestEntries", JSON.stringify(entries));
    }

    // ฟังก์ชันโหลดข้อมูลจาก localStorage
    function loadEntries() {
        const savedEntries = localStorage.getItem("guestEntries");
        return savedEntries ? JSON.parse(savedEntries) : [];
    }

    // ฟังก์ชันเพิ่มความคิดเห็นในหน้า
    function addEntryToList(name, email, rating, suggestions) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>ชื่อ:</strong> ${name}<br>
            <strong>อีเมล:</strong> ${email}<br>
            <strong>ความพึงพอใจ:</strong> ${rating}<br>
            <strong>ความคิดเห็น:</strong> ${suggestions}<br>
        `;
        entriesList.appendChild(listItem);
    }

    // โหลดความคิดเห็นเมื่อเริ่มต้น
    const entries = loadEntries();
    entries.forEach((entry) => {
        addEntryToList(entry.name, entry.email, entry.rating, entry.suggestions);
    });

    // เมื่อผู้ใช้ส่งฟอร์ม
    guestForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(guestForm);

        const name = formData.get("name");
        const email = formData.get("email");
        const rating = formData.get("rating");
        const suggestions = formData.get("suggestions");

        // เพิ่มความคิดเห็น
        addEntryToList(name, email, rating, suggestions);

        // อัปเดตความคิดเห็นใน localStorage
        entries.push({ name, email, rating, suggestions });
        saveEntries(entries);

        // แสดงข้อความขอบคุณ
        alert("ขอบคุณที่ส่งความคิดเห็นของคุณ!");

        // ล้างฟอร์ม
        guestForm.reset();
    });
});

// ฟังก์ชันสำหรับ toggle เมนูใน navbar
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}
