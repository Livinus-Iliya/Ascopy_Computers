function enrollNow() {
    alert('Thank you for your interest! Please fill out the contact form to enroll.');
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! We have received your message.`);
    document.getElementById('contactForm').reset();
});
