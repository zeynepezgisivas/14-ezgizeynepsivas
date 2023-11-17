export const fetchUser = () => {
    return function (dispatch) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "SET_USER", payload: data });
        });
    };
  };
  