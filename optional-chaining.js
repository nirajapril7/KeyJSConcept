let user = { name: 'Alice', address: { city: 'Wonderland' } };
console.log(user?.address?.city); 
// Output: Wonderland

// Without optional chaining
let user1 = { name: 'Bill' };
console.log(user1.address.city); 
// Output: Error: Cannot read property 'city' of undefined

// With Optional Chaining:
let user2 = { name: 'Caleb' };
console.log(user2?.address?.city); // undefined

// Optional Chaining with Functions:
let user1 = {
  name: 'Alice',
  greet: () => 'Hello!'
};

console.log(user1.greet?.()); // Hello!
console.log(user1.sayGoodbye?.()); // undefined

// Optional Chaining with Arrays:
let users = [{ name: 'Alice' }, { name: 'Bob' }];
console.log(users[0]?.name); // Alice
console.log(users[2]?.name); // undefined

// Optional Chaining with Dynamic Properties:
let user2 = { name: 'Bill', preferences: { theme: 'dark' } };
let property = 'preferences';
console.log(user2?.[property]?.theme); // dark

property = 'settings';
console.log(user2?.[property]?.theme); // undefined

let user = { profile: { address: { city: 'Wonderland' } } };

// usage without optional chaining (using short-circuiting):
if (user && user.profile && user.profile.address && user.profile.address.city) {
  console.log(user.profile.address.city);
}

// usage with optional chaining (saving repititive null checks):
console.log(user?.profile?.address?.city); // Wonderland

// Example usage of Optional Chaining in React
function UserProfile({ user }) {
  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>City: {user?.address?.city ?? 'Unknown'}</p>
    </div>
  );
}

