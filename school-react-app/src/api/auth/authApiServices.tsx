import { UserInterface } from "../../interfaces/UserInterface";
import axiosInstanceAuth from "../../util/AxiosInstanceAuth";

export const loginUser = async (credentials: { email: string; password: string }) => {

    console.log("------ Start login ------")
    try {
        const response = await axiosInstanceAuth.post('/auth/signin', credentials);
        console.log(response.data + ' - Login successful');
        return response.data;
    } catch (error) {
        console.error('Failed to login:', error);
        throw new Error('Failed to login');
    }
};

export const onSignUp = async (newUser: UserInterface) => {

    console.log("------ Start login ------")
    try {
        const response = await axiosInstanceAuth.post('/auth/signup', newUser);
        console.log(response.data + ' - Login successful');
        return response.data;
    } catch (error) {
        console.error('Failed to login:', error);
        throw new Error('Failed to login');
    }
};