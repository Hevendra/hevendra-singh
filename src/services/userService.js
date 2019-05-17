export const userService = {
  fetchUsers
};

function fetchUsers(pageNo, limit) {
  return fetch(
    "https://reqres.in/api/users?page=" + pageNo + "&per_page=" + limit
  )
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      return user;
    })
    .catch(e => {
      alert("Something went wrong!!");
    });
}
