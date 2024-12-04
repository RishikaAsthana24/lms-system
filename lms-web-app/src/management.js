document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    // Toggle between login and register sections
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Form validation function
    function validateForm(form) {
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            return false;
        }
        return true;
    }

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(loginForm)) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log('Login attempted:', email);
            // Add actual login logic here
        }
    });

    // Registration form submission with advanced validation
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('register-password');
        const confirmPassword = document.getElementById('confirm-password');

        // Password strength validation
        if (password.value.length < 8) {
            password.setCustomValidity('Password must be at least 8 characters');
            return;
        }

        // Password match validation
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
            return;
        }

        if (validateForm(registerForm)) {
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('register-email').value;
            console.log('Registration attempted:', fullName, email);
            // Add actual registration logic here
        }
    });
});
