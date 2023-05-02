// CRUD

// Create
const profile = { name: 'Amit', city: 'Jabalpur', state: 'MP' };

// Read
console.log(profile.name); // Amit
console.log(profile['name']); // Amit
console.log(profile.details); // Undefined

// Error handling - Optional Chaining
console.log(profile?.details?.something); //

// Handle inside try catch
try {
  console.log(profile.details.something); //
} catch (err) {
  // console.log("Error: ", err);
}

// Update
profile.name = 'Shrivardhan'; // Key was already present
profile.userName = 'Shrivardhan'; // This is a new key
profile["city"] = 'Hyderabad'; // This is another way
profile.details = { gender: 'male', citizen: 'Indian' };
profile.details.citizen = 'International';
// profile.something.something = true;
profile.name = 'Shrivardhan 1'; // Key was already present
profile.name = 'Shrivardhan 2'; // Key was already present
profile.name = 'Shrivardhan 3'; // Key was already present
profile.name = 'Shrivardhan 4'; // Key was already present
profile.name = 'Shrivardhan 5'; // Key was already present

console.log(profile);

// Deletion
delete profile.name;
delete profile['city'];
