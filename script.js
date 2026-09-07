const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

emailjs.init({
  publicKey: "SalYGojUGoOIeZDJk",
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs
    .send("service_eu3dccp", "template_hz9n2ph", params)
    .then(() => {
      alert("Pesan berhasil dikirim ke email kamu!");
      contactForm.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Gagal mengirim pesan. Cek console browser.");
    });
});