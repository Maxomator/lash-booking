document.getElementById("datePicker").addEventListener("change", function() {
    const slotsDiv = document.getElementById("slots");
    slotsDiv.innerHTML = "";
    const times = ["10:00", "12:00", "14:00", "16:00", "18:00"];
    times.forEach(time => {
        let slot = document.createElement("div");
        slot.className = "slot";
        slot.innerText = time;
        slot.onclick = () => {
            if (!slot.classList.contains("booked")) {
                alert("Вы записаны на " + document.getElementById("datePicker").value + " в " + time);
                slot.classList.add("booked");
            }
        };
        slotsDiv.appendChild(slot);
    });
});
