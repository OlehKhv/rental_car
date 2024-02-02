import axios from "axios";

axios.defaults.baseURL = "https://65bbccd452189914b5bd184f.mockapi.io/api";

export const getAllAdverts = async () => {
    const { data } = await axios("/advert");
    return data;
};

export const getAllMakes = async () => {
    const { data } = await axios("/makes");
    return data;
};
