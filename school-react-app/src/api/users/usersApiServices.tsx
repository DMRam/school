import { UserInterface } from "../../interfaces/UserInterface";
import axiosInstanceUser from "../../util/AxiosInstanceUsers";

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await axiosInstanceUser.get('/users');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

// Fetch all users
export const fetchUserByEmail = async (email: string) => {
    try {
        const response = await axiosInstanceUser.get(`/user/${email}`);

        console.log(response + " FETCH METHOD")
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

// Add a new user
export const addUser = async (userData: UserInterface) => {
    try {
        const response = await axiosInstanceUser.post('/users', userData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to add user');
    }
};

// Update user details
export const updateUser = async ({ userId, updatedUserData }: any) => {
    try {
        const response = await axiosInstanceUser.put(`/users/${userId}`, updatedUserData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update user');
    }
};

// Delete a user
export const deleteUser = async (userId: string) => {
    try {
        const response = await axiosInstanceUser.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete user');
    }
};