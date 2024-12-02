document.addEventListener("DOMContentLoaded", () => {
    const guestForm = document.getElementById("guestForm");
    const entriesList = document.getElementById("entriesList");

    // ฟังก์ชันสำหรับเพิ่มความคิดเห็นในรายการ
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

    // ดักจับการส่งฟอร์ม
    guestForm.addEventListener("submit", (event) => {
        event.preventDefault(); // ป้องกันไม่ให้รีเฟรชหน้าเว็บ
        const formData = new FormData(guestForm);

        // ดึงค่าจากฟอร์ม
        const name = formData.get("name");
        const email = formData.get("email");
        const rating = formData.get("rating");
        const suggestions = formData.get("suggestions");

        // เพิ่มข้อมูลลงใน Guest Book
        addEntryToList(name, email, rating, suggestions);

        // ล้างฟอร์มหลังจากส่ง
        guestForm.reset();
    });
});
