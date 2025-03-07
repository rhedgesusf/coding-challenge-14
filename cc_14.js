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
      const card = document.createElement("div");
  
      card.setAttribute("class", "ticket-card");
      card.setAttribute("id", "ticketCard");
  
     setTicketDetails(card, name, description, priority);
  
      ticketContainer.appendChild(card);
    }
  }

  function setTicketDetails(card, name, description, priority) {
    card.innerHTML = `<div><h3>${name}</h3>
      <p>${description}</p>
      <label>${priority}</label>
      </div>`;
  
    // create a button
    const button = document.createElement("button");
    button.textContent = "Resolve";
  
    // add click listener
    button.addEventListener("click", (event) => {
      // remove from container
      ticketContainer.removeChild(card);
      event.stopPropagation();
    });
    card.appendChild(button);
  }
  
createTicket('Joe Johnson', "Password Issue", 'High')
createTicket('Bill Myers', "Cracked Screen", 'Medium')
createTicket('Mike Mob', "Broken Cable", 'Low')
createTicket('Ethan Pitta', "Stolen Laptop", 'High')





