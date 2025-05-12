function encrypt() {
  const message = document.getElementById("inputText").value;
  const password = document.getElementById("password").value;

  if (!message || !password) {
    alert("Message and password are required.");
    return;
  }

  const encrypted = CryptoJS.AES.encrypt(message, password).toString();
  document.getElementById("outputText").value = encrypted;
}

function decrypt() {
  const ciphertext = document.getElementById("inputText").value;
  const password = document.getElementById("password").value;

  if (!ciphertext || !password) {
    alert("Ciphertext and password are required.");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) throw new Error("Invalid password or input.");
    document.getElementById("outputText").value = decrypted;
  } catch (e) {
    alert("Decryption failed: " + e.message);
  }
}
function openAdmin() {
  document.getElementById("adminOverlay").classList.remove("hidden");
  document.getElementById("adminPassword").value = "";
  document.getElementById("adminResult").textContent = "";
}

function validateAdmin() {
  const password = document.getElementById("adminPassword").value;
  if (password === "dolor sit") {
    const key = generateTodaysKey();
    document.getElementById("adminResult").textContent = `Today's Key: ${key}`;
  } else {
    document.getElementById("adminResult").textContent = "Access denied.";
  }
}

function generateTodaysKey() {
  const today = new Date();
  const seed = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
  const hash = CryptoJS.SHA256(seed).toString(CryptoJS.enc.Hex);
  return hash.slice(0, 16); // You can change length as needed
}
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    document.getElementById("adminOverlay").classList.add("hidden");
  }
});
