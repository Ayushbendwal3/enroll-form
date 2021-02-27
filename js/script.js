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

  data.push(...data, {
    name: name,
    email: email,
    website: website,
    image: image,
    gender: gender,
    skills: [...skills]
  });

  console.log(data);
};
