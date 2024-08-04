import { connect, disconnect } from "mongoose";
// ----------Connection  to  Database --------
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB!");
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not connect to MongoDB");
    }
}
// ---------- Disconnect to Database --------
async function disconnectFromDatabase() {
    try {
        await disconnect();
        console.log("Disconnected from MongoDB!");
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map