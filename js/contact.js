const form = document.getElementById("contactForm");
const responseEl = document.getElementById("response");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  responseEl.innerText = "⏳ Sending...";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message })
    });

    const data = await res.json();
    if (data.success) {
      responseEl.innerText = "✅ Message Sent Successfully!";
      form.reset();
    } else {
      responseEl.innerText = "❌ Failed to send message.";
    }
  } catch (err) {
    console.error(err);
    responseEl.innerText = "⚠️ Error connecting to server.";
  }
});
