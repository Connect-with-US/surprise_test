

const fs = require("fs");

exports.Listdata = (req, res) => {
    try {
        // Create readable stream
        var readerStream = fs.createReadStream('./Data.json', "utf-8");

        if (!readerStream) {
            res.status(200).json({
                message: "File is empty",
                success: true
            });
        } 
            readerStream.pipe(res, { end: 1 });
        
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong while reading the file',
            success: false,
            err: err.message
        });
        console.log(`Something went wrong with the stream: ${err.message}`);
    }
};

