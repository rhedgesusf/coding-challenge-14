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

    // add a double click listener to the card
    card.addEventListener("dblclick", (event) => {
      // switch to edit mode
      editTicketCard(card);
    });

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

createTicket("Joe Johnson", "Password Issue", "High");
createTicket("Bill Myers", "Cracked Screen", "Medium");
createTicket("Mike Mob", "Broken Cable", "Low");
createTicket("Ethan Pitta", "Stolen Laptop", "High");

/////////////////////////////////////////////////////////////
// Task 3: Converting NodeLists to Arrays for Bulk Updates //
/////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Converting NodeLists to Arrays for Bulk Updates");

function highlightCards() {
  // set background color of all cards to "lightcoral"
  const cards = document.querySelectorAll(".ticket-card");

  if (cards) {
    const cardsArray = Array.from(cards);

    const highCards = cardsArray.filter(
      (card) => card.querySelector("label").textContent === "High"
    );

    highCards.forEach((card) => {
      card.style.backgroundColor = "lightcoral";
    });
  }
}

highlightCards();

////////////////////////////////////////////////////////////////
// Task 4: Implementing Ticket Resolution with Event Bubbling //
////////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Implementing Ticket Resolution with Event Bubbling");

// add a click event listener to the parent container
const ticketContainer = document.getElementById("ticketContainer");

ticketContainer.addEventListener("click", () => {
  console.log(`Parent Ticket clicked`);
});

//////////////////////////////////////////////////////////////////////
// Task 5: Additional Challenge - Inline Editing of Support Tickets //
//////////////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Additional Challenge - Inline Editing of Support Tickets");

// create function to allow editing of the data
function editTicketCard(card) {
  // first get the values of the static content
  let name = card.querySelector("h3").innerText;
  let description = card.querySelector("p").innerText;
  let priority = card.querySelector("label").innerText;

  // change content of the card to <input> elements for editing
  card.innerHTML = `
                <div>
                    <input type="text" id="name" value="${name}">
                    <input type="text" id="description" value="${description}">
                    <input type="text" id="priority" value="${priority}">
                </div>
            `;

  // create a Save button
  const button = document.createElement("button");
  button.textContent = "Save";
  button.addEventListener("click", () => {
    // call save method when button is clicked
    saveTicket(card);
  });
  card.appendChild(button);
}

// save the support tickets and switch back to static content
function saveTicket(card) {
  // get the values of the <input> elements
  let name = card.querySelector("#name").value;
  let description = card.querySelector("#description").value;
  let priority = card.querySelector("#priority").value;

  // call this method to set static content
  setTicketDetails(card, name, description, priority);
  highlightCards();
}
