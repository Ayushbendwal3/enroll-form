const onSubmit = () => {
  console.log('Hello I am working');
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;
  const website = document.getElementById('inputWebsite').value;
  const image = document.getElementById('inputImage').value;
  const gen = document.getElementsByName('gender');
  let gender;
  let data = [];
  let skills = [];
  for (let i = 0; i < gen.length; i++) {
    if (gen[i].checked) {
      gender = gen[i].value;
    }
  }
  const ele = document.getElementsByName('skills');
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      skills.push(ele[i].value);
    }
  }

  data.push({
    name: name,
    email: email,
    website: website,
    image: image,
    gender: gender,
    skills: [...skills]
  });

  addRow(data);
};

const addRow = (data) => {
  console.log(data);
  let table = document.getElementById('table-data');
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML = `<td>
    <span class="font-weight-bold">${data[0].name}</span><br />
    <span>${data[0].gender}</span><br />
    <span>${data[0].email}</span><br />
    <a
      href="https://${data[0].website}"
      target="_blank"
      rel="noopener noreferrer"
      ><u>${data[0].website}</u></a
    ><br />
    ${data[0].skills.map((skill) => {
      return `<span>${skill}</span>`;
    })}
  </td>`;

  row.insertCell(1).innerHTML = `<td style="width:100px;height:120px">
                      <img src="${data[0].image}" 
                      onerror="this.src='assets/fallback-image.jpg'"
                      alt="image"/>
                  </td>`;
};
