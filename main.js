const axios = require("axios");
const vision = require("@google-cloud/vision");

axios
  .post(
    "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAOy_S14NgYNSmvKh0XyPWoFhapzVnLgcU",
    {
      requests: [
        {
          image: {
            content: "",
          },
          features: [
            {
              type: "TEXT_DETECTION",
            },
          ],
        },
      ],
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
