import axios from 'axios';
export async function registerRequest(data) {
    const { name, surname, university, department, email, password } = data;

    try {
        const response = await axios.post(
            import.meta.env.REACT_APP_BASE_URL + 'auth/register',
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

export const loginRequest = async (email, password) => {
    try {
        const response = await axios.post(
            import.meta.env.REACT_APP_BASE_URL + 'auth/login',
            {
                email: email,
                password: password,
            }
        );
        return response.data;
    } catch (e) {
        throw e.response.data;
    }
};
