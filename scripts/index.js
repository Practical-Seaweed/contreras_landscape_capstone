import {
  API_KEY,
  PRIVATE_KEY,
  SERVICE_ID,
  TEPMLET_API_KEY,
} from "../scripts/dotenv.js";

const templateParams = {
  name: "James",
  notes: "Check this out!",
};

emailjs.init({
  publicKey: API_KEY,
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    // The variable contains the email address
    watchVariable: "wilfredojrcontreras@gmail.com",
  },
  limitRate: {
    // Set the limit rate for the application
    id: PRIVATE_KEY,
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

emailjs.send(SERVICE_ID, TEPMLET_API_KEY, templateParams).then(
  (response) => {
    console.log("SUCCESS!", response.status, response.text);
  },
  (error) => {
    console.log("FAILED...", error);
  }
);
