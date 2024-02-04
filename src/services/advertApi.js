import axios from "axios";

axios.defaults.baseURL = "https://65be29a8dcfcce42a6f1f447.mockapi.io/api";

export const fetchAdverts = async (params) => {
    const { data } = await axios.get("/adverts", {
        params,
    });
    return data;
};

export const getAllMakes = async () => {
    const { data } = await axios("/makes");
    return data;
};
