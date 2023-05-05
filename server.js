require("dotenv").config();

const runner = require("./test-runner");
const app = require("./app");

const portNum = process.env.PORT || 3000;

// Start our server and tests!
app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
  if (process.env.NODE_ENV === "test") {
    console.log("Running Tests...");
    setTimeout(function () {
      try {
        runner.run();
      } catch (error) {
        console.log("Tests are not valid:");
        console.error(error);
      }
    }, 1500);
  }
});
