import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const getPlacesData = async (ne, sw) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": RAPID_API_KEY,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
