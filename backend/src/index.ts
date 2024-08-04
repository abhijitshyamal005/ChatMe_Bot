import { error } from "console";
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// ------------CONNECTIONS------------
const PORT = process.env.PORT || 8800;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
