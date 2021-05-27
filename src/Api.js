

const createApi = (baseURL = `https://5f7335deb63868001615f557.mockapi.io/`) => {
  const headers = {
    "Content-Type": "application/json"
  }; 


const getList = async () => {
  var data;
  await fetch(baseURL + "list", {
    method: "GET",
    headers: headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (parsedData) {
      data = parsedData;
      console.log(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return data;
};


return {
  getList
};
};

export default {
  createApi
};
