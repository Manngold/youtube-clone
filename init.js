import dotenv from "dotenv";
import "./db";
import app from "./app";
dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListener = () => {
    console.log(`Server is online on http://localhost:${PORT}`);
};

app.listen(PORT, handleListener);
