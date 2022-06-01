const GET_DATA = "src/redux/GET_DATA";
const URL = "http://localhost:3000/api/v1/greetings";

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getDataFromAPI = async () => (dispatch) => {
  const req = await fetch(URL);
  const res = await req.json();
  const data = res.data;
  dispatch(getData(data))
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;