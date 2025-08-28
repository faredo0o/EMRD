// Function to initialize theme settings for new users
function initializeDefaultThemeSettings() {
  // Set default theme to light mode
  setTheme('light');
  showThemeNotification();
  logDefaultThemeAssignment();
}

// Function to apply the theme
function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
}

// Function to show notification of the default theme
function showThemeNotification() {
  const notification = document.createElement('div');
  notification.innerText = 'Default theme (light mode) has been applied. You can change it in settings.';
  notification.style.position = 'fixed';
  notification.style.bottom = '10px';
  notification.style.right = '10px';
  notification.style.padding = '10px';
  notification.style.backgroundColor = '#f0f0f0';
  notification.style.border = '1px solid #ccc';
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transition = 'opacity 0.5s ease-out';
    notification.style.opacity = '0';
    setTimeout(() => document.body.removeChild(notification), 500);
  }, 3000);
}

// Function to log default theme assignment
function logDefaultThemeAssignment() {
  console.log('Default theme set to light for new user at ' + new Date().toISOString());
  // Implement server-side logging here if needed
}

export default initializeDefaultThemeSettings;