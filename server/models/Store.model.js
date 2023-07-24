const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be at least 3 characters long"],
            validate: {
                validator: function(v) {
                    return /^[a-zA-Z0-9 ]*$/.test(v);
                },
                message: "Store Name must only contain alphanumeric characters and spaces",
            },
        },
        Number: {
            type: Number,
            required: [true, "Note is required"],
            validate: {
                validator: function(v) {
                    return v > 0;
                },
                message: "Number must be greater than 0",
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Store", StoreSchema);
console.log(`middleware works`);
