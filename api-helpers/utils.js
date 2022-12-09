import mongoose from "mongoose";

export const connectToDatabase = async () => {
    if(mongoose.connections[0]){
        return;
    }
    await mongoose
    .connect(
        'mongodb+srv://divyavikash83:D9xtH9RUfUlURpZV@cluster0.yfihht1.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err));
};