function loginUser() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (!name || !phone) {
    alert("Please fill in all fields");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userPhone", phone);
  localStorage.setItem("paymentApproved", "false");

  window.location.href = "index.html";
}

function submitPayment() {
  const plan = document.getElementById("plan").value;
  const fileInput = document.getElementById("paymentProof");
  
  if (!fileInput.files[0]) {
    alert("Please upload a payment proof screenshot.");
    return;
  }

  // Simulate sending payment proof to admin
  localStorage.setItem("selectedPlan", plan);
  localStorage.setItem("paymentProofUploaded", "true");

  document.getElementById("status").innerText = 
    "Payment proof uploaded successfully. Please wait for admin approval.";

  // Block dashboard access until approved
  localStorage.setItem("paymentApproved", "false");
}

function checkAccess() {
  const name = localStorage.getItem("userName");
  const approved = localStorage.getItem("paymentApproved");

  if (!name) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  if (approved !== "true") {
    alert("Your payment is still pending approval. Please wait.");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("welcome").innerText = `Welcome, ${name}`;
}

// Simulate admin approval (You can run this manually in browser dev tools for testing)
function approvePayment() {
  localStorage.setItem("paymentApproved", "true");
}
