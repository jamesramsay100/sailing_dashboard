const axios = require("axios");
require("dotenv").config();

exports.handler = async (event) => {
  const sensor = event.queryStringParameters.sensor;
  console.log(`Fetching data for sensor ${sensor}`);
  const GET_DATA = `
    query{
        allData(_size: 999){
          data{
            TimeStamp
            ${sensor}
          }
        }
      }
    `;

  const { data } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_DATA,
      variables: {},
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
