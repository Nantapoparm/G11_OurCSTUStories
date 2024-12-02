document.addEventListener("DOMContentLoaded", () => 
    {
    const guestForm = document.getElementById("guestForm");
    const entriesList = document.getElementById("entriesList");


    function addEntryToList(name, email, rating, suggestions) 
    {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>ชื่อ:</strong> ${name}<br>
            <strong>อีเมล:</strong> ${email}<br>
            <strong>ความพึงพอใจ:</strong> ${rating}<br>
            <strong>ความคิดเห็น:</strong> ${suggestions}<br>
        `;
        entriesList.appendChild(listItem);
    }


    guestForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const formData = new FormData(guestForm);

   
        const name = formData.get("name");
        const email = formData.get("email");
        const rating = formData.get("rating");
        const suggestions = formData.get("suggestions");


        addEntryToList(name, email, rating, suggestions);


        guestForm.reset();
    });
});
