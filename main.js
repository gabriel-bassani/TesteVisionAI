const axios = require("axios");

axios
  .post("https://vision.googleapis.com/v1/images:annotate", {
    "requests": [
        {
          object (AnnotateImageRequest)
        }
      ],
    "parent": string
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
