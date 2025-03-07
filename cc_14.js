/////////////////////////////////////////
// Task 1: Creating the Base Structure //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating the Base Structure");

// Created base structure in HTML

///////////////////////////////////////////////
// Task 2: Adding Support Tickets Dynamically //
///////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Adding Employee Cards Dynamically");

function createTicket(name, description, priority) {
    const ticketContainer = document.getElementById("ticketContainer");
  
    if (ticketContainer) {
      const ticket = document.createElement("div");
  
      card.setAttribute("class", "ticket-card");
      card.setAttribute("id", "ticketCard");
  
     setTicketDetails(card, name, description, priority);
  
      card.addEventListener("dblclick", (event) => {
        editTicketCard(card);
      });
  
      ticketContainer.appendChild(card);
    }
  }
  