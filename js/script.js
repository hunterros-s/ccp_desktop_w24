window.addEventListener("load", function() {
    const now = new Date();
    this.document.getElementById('time').textContent = 'Date and time retrieved: ' + now.toLocaleString();
});