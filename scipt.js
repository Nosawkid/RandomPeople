function fetchRandomUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const user = data.results[0];
      const fullName = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const picture = user.picture.large;

      document.getElementById("user-name").innerText = fullName;
      document.getElementById("user-email").innerText = email;
      document.getElementById("user-img").src = picture;
    })
    .catch((error) => console.error("Error fetching user:", error));
}

document
  .getElementById("getUserBtn")
  .addEventListener("click", fetchRandomUser);

fetchRandomUser();
