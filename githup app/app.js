function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    if (confirm("Login successful! ")) {
      window.location.href = "github.html";
    }
  } else {
    alert("Please enter both email and password.");
  }
}

function loginWithGoogle() {
  if (confirm(" login successful! ")) {
    window.location.href = "github.html";
  }
}
function fetchUser() {
    let username = document.getElementById('username').value;
    let profileDiv = document.getElementById('profile');
    let errorDiv = document.getElementById('error');
    profileDiv.style.display = 'none';
    errorDiv.textContent = '';
  
    if (!username) {
      errorDiv.textContent = 'Please enter a username.';
      return;
    }
  
    fetch('https://api.github.com/users/' + username)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(function(data) {
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || 'N/A';
        document.getElementById('bio').textContent = data.bio || 'N/A';
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
        document.getElementById('profile-link').href = data.html_url;
  
        profileDiv.style.display = 'block';
      })
      .catch(function(error) {
        errorDiv.textContent = error.message;
      });
  }
