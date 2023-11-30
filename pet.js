document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const thanksMessage = document.getElementById("thanksMessage");

  contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
          // Assuming a successful form submission
          contactForm.style.display = "none";
          thanksMessage.style.display = "block";
      }
  });

  function validateForm() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const gender = document.getElementById("gender").value;
      const message = document.getElementById("message").value;

      if (name === "" || email === "" || gender === "" || message === "") {
          alert("All fields are required");
          return true;
      }

      // You can add more specific validation here, e.g., for the email format.

      return true;
  }
});


function openDonationForm() {
  document.getElementById('donationForm').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeDonationForm() {
  document.getElementById('donationForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

function submitDonationForm() {
  // Assuming a successful form submission
  document.getElementById('donationForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('thanksMessage').style.display = 'block';

  setTimeout(function () {
    document.getElementById('thanksMessage').style.display = 'none';
}, 4000);
}


