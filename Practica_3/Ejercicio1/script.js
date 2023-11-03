const personForm = document.getElementById("personForm");
const personTable = document.getElementById("personTable");
const people = [];

personForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const birthDate = document.getElementById("birthDate").value;

  const person = {
    firstName,
    lastName,
    gender,
    birthDate,
  };

  people.push(person);
  updateTable();
  personForm.reset();
});

const updateTable = () => {
  personTable.innerHTML = `
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Género</th>
        <th>Fecha de Nacimiento</th>
        <th>Acciones</th>
      </tr>
      ${people
        .map(
          (person, index) => `
        <tr>
          <td>${person.firstName}</td>
          <td>${person.lastName}</td>
          <td>${person.gender === "male" ? "Masculino" : "Femenino"}</td>
          <td>${person.birthDate}</td>
          <td>
            <button onclick="editPerson(${index})">Editar</button>
            <button onclick="deletePerson(${index})">Borrar</button>
          </td>
        </tr>
      `
        )
        .join("")}
    </table>
  `;
}

const deletePerson = (index) => {
  people.splice(index, 1);
  updateTable();
}

const editPerson = (index) => {
  const person = people[index];
  const { firstName, lastName, gender, birthDate } = person;

  document.getElementById("firstName").value = firstName;
  document.getElementById("lastName").value = lastName;
  document.getElementById("gender").value = gender;
  document.getElementById("birthDate").value = birthDate;

  deletePerson(index);
}

updateTable();
