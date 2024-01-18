const userDetails = JSON.parse(localStorage.getItem('UserDetails'));
const roles = userDetails.roles; // Accessing the 'roles' array
show = roles.includes('formsflow-reviewer') && data.applicationStatus === 'New';
