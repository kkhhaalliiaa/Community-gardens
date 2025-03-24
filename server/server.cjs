const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const plantRoute = require("./routes/plantRoute.cjs");
const chatbotRoute = require("./routes/chatbotRoute.cjs");
const customizeRoutes = require("./routes/customizeRoutes.cjs"); // Import customize routes

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const PORT = process.env.PORT || 3002;

app.use(cors({
  origin: "https://community-gardens-henna.vercel.app", // Allow frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true // Allow cookies if needed
}));
app.use(helmet());
app.use(express.json());

app.use("/login", require("./routes/loginRoute.cjs")); // Ensure loginRoute.cjs handles POST requests
app.use("/register", require("./routes/registerRoute.cjs"));
app.use("/users", require("./routes/userRoute.cjs"));
app.use("/comments", require("./routes/commentsRoute.cjs"));

app.use("/api/listPlants", plantRoute);
app.use("/api", chatbotRoute);
app.use("/api", customizeRoutes); // Add customize routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
