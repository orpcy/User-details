//adding new user
const postUser = event => {
  event.preventDefault();

  fetch("/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      sex: document.getElementById("sex").value
    })
  })
    .then(res => res.json())
    .then(resp => {
      if (!resp.data) {
        document.getElementById("errorHandler").innerHTML = resp.msg;
      } else {
        alert(resp.msg);
        window.location.href = './index.html';
      }
    })
    .catch(err => console.log("error occured", err));
};

//adding event listener to form
document.getElementById("regForm").addEventListener("submit", postUser);


//rendering people's details
fetch("/users", {
  method: "GET"
})
  .then(res => res.json())
  .then(resp => {
    if (resp.reason) {
      document.getElementById("errorHandler").innerHTML = resp.msg;
    } else {
      resp.forEach(data => {
        let details = document.createElement("tr");
        details.innerHTML = `<td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.sex}</td>
        <td>${data.date}</td>
        `;
        document.querySelector("#tableBody").append(details);
      });
    }
  })
  .catch(err => console.log("error occured", err));
