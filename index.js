function logMessage(message, delay = 2000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const para = document.createElement("p");
        para.innerHTML = message;
        document.getElementById("log_txt")?.appendChild(para);
        document.querySelector(".button").style.backgroundColor = "rgb(128, 128, 128)"
        document.querySelector(".button").style.borderColor = "grey"
        resolve();
      }, delay);
    });
  }
  
  async function executeSteps() {
    await logMessage("შევდივართ ბოსტონის ბანკის ფილიალში", 1000);
    await logMessage("ვტეხავთ კოდს");
    await logMessage("ვიგებთ ანგარიშის ნომერს");
    await logMessage("აი კოდიც და ანგარიშის ნომერიც");
    await logMessage("100 000 საკმარისია?");
    await logMessage("აი ესეც... გადმოირიცხა 100 000 დოლარი თქვენს ანგარიშზე", 4000);
  }
  
  // Add event listener to the button
  document.getElementById("start").addEventListener("click", executeSteps);
  