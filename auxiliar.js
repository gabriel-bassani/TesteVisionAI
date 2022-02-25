const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient({
  keyFilename: "D:\\Documentos_HDD\\testeai-339522-04098fdf05ed.json",
});
client
  .documentTextDetection("C:\\Users\\Gabriel\\Pictures\\Leviathan_Wakes.jpg")
  .then((results) => {
    const texts = results[0].textAnnotations;

    console.log("Texts:");
    texts.forEach((text) => console.log(text.description));
  })
  .catch((err) => {
    console.error("ERROR:", err);
  });

/*
client
  .labelDetection("C:\\Users\\Gabriel\\Pictures\\0_7jYE1-Za4AzaJdru.jfif")
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log("Labels:");
    labels.forEach((label) => console.log(label.description));
  })
  .catch((err) => {
    console.error("ERROR:", err);
  });
*/
