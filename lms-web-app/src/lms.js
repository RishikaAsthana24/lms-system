document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthText = document.getElementById('password-strength');

    if (password.length < 6) {
        strengthText.textContent = 'Password is too weak';
        strengthText.className = 'text-danger';
    } else if (password.length < 10) {
        strengthText.textContent = 'Password is medium strength';
        strengthText.className = 'text-warning';
    } else {
        strengthText.textContent = 'Password is strong';
        strengthText.className = 'text-success';
    }
});