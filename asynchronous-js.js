//promise
function fetchUserDetails(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched user details");
      return { id: userId, name: data.name };
    });
}

function fetchPostsByUser(user) {
  return fetch(`https://api.example.com/users/${user.id}/posts`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    })
    .then((posts) => {
      console.log(`Fetched posts for ${user.name}`);
      return posts;
    });
}

// Chain promises
fetchUserDetails(1)
  .then((user) => fetchPostsByUser(user))
  .then((posts) => console.log(posts))
  .catch((error) => console.error("Error:", error));

// ES2017 async await
async function getUserAndPosts(userId) {
  try {
    const user = await fetchUserDetails(userId); // Waits for user details
    const posts = await fetchPostsByUser(user);  // Waits for posts
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserAndPosts(1);

/* Output:
Fetched user details
Fetched posts for John
Posts: ["Post 1", "Post 2"]
*/

//
