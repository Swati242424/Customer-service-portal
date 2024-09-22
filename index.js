// Support tickets data
let tickets = [];

// Function to submit form and create support ticket
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        const ticket = {
            id: tickets.length + 1,
            name: name,
            email: email,
            message: message,
            status: "Pending"
        };

        tickets.push(ticket);
        displayTickets();
        alert("Support request submitted!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to display support tickets
function displayTickets() {
    const ticketList = document.getElementById("ticketList");
    ticketList.innerHTML = "";  // Clear the list

    tickets.forEach(ticket => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = `
            <strong>Ticket #${ticket.id}</strong> - ${ticket.name} (${ticket.email})<br>
            <em>${ticket.message}</em><br>
            Status: <span class="badge badge-warning">${ticket.status}</span>
        `;
        ticketList.appendChild(listItem);
    });
}
