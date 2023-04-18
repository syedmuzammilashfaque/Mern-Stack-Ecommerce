import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        });
};