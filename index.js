// script.js

let cardCounter = 1; // Counter for unique card IDs

// Allow dropping by preventing default behavior
function allowDrop(event) {
    event.preventDefault();
}

// When dragging starts, set the dragged element's id
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// When dropping, get the dragged data and append it to the target section
function drop(event) {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text");
    const card = document.getElementById(cardId);

    // Only append if dropping into a section, not onto another card or button
    if (event.target.classList.contains('section')) {
        event.target.appendChild(card);
    }
}

// Function to create a new card in the specified section
function createCard(sectionId) {
    const section = document.getElementById(sectionId);
    const cardText = prompt("Enter task description:");

    if (cardText) {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.id = `card${cardCounter++}`; // Unique ID for each new card
        newCard.draggable = true;
        newCard.ondragstart = drag; // Attach drag event

        // Create a text node for card description
        const cardContent = document.createElement("span");
        cardContent.textContent = cardText;

         // Create a delete button
         const deleteBtn = document.createElement("button");
         deleteBtn.classList.add("delete-btn");
         deleteBtn.textContent = "X";
         deleteBtn.onclick = () => newCard.remove();
         
 
         // Append content and delete button to card
         newCard.appendChild(cardContent);
         newCard.appendChild(deleteBtn);
         

        // Append card to the section
        section.appendChild(newCard);
    }
    
         
}
