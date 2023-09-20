import axios from "axios";
export async function register(data) {
  const { name, surname, university, department, email, password } = data;

  try {
    const response = await axios.post(
      process.env.BASE_URL + "/auth/register",

      {
        name: name + surname,
        email: email,
        password: password,
        university: university,
        department: department,
      }
    );

    return response.data;
  } catch (e) {
    throw e.response.data.message;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(process.env.BASE_URL + "/auth/login", {
      email: email,
      password: password,
    });
    console.log(response);
    return response;
  } catch (e) {
    throw e.response;
  }
}
