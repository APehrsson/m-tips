function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simulera inloggning
    if (username && password) {
      alert("Inloggad som " + username);
      document.getElementById("login").style.display = "none";
      document.getElementById("matches").style.display = "block";
      showMatches();
    } else {
      alert("Fyll i användarnamn och lösenord");
    }
  }
  
  function showMatches() {
    const matches = [
      { lag1: "Sverige", lag2: "Spanien", datum: "2025-06-12" },
      { lag1: "Tyskland", lag2: "Frankrike", datum: "2025-06-13" }
    ];
  
    const list = document.getElementById("match-list");
    list.innerHTML = "";
    matches.forEach(match => {
      const div = document.createElement("div");
      div.innerText = `${match.lag1} vs ${match.lag2} – ${match.datum}`;
      list.appendChild(div);
    });
  }
  