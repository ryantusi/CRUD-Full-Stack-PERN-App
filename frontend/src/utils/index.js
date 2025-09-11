import api from "./api.js";

export const fetchData = async () => {
    try {
        const res = await api.get('/');
        return res.data;
    } catch (error) {
        return { error: error.message };
    };
};

export const createMember = async (name, job, status) => {
    try {
        const result = await api.post("/create", { name, job, status });
        return result.data;
    } catch (error) {
        return { error: error.message };   
    }
};

export const updateMember = async (id, name, job, status) => {
    try {
        const result = await api.put(`/update/${id}`, { name, job, status });
        return result.data;
    } catch (error) {
        return { error: error.message };
    }
};

export const deleteMember = async (id) => {
    try {
        const result = await api.delete(`/remove/${id}`);
        return result.data;
    } catch (error) {
        return { error: error.message };
    }
};