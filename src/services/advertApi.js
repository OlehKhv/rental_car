import axios from "axios";

axios.defaults.baseURL = "https://65bbccd452189914b5bd184f.mockapi.io/api";
axios.defaults.headers.get["Content-Type"] = "application/json";

export const getAllAdverts = async ({ page, limit }) => {
    // const params = { page, limit };
    const { data } = await axios.get("/advert", {
        params: { page, limit },
    });
    return data;
};

export const getAllMakes = async () => {
    const { data } = await axios("/makes");
    return data;
};
