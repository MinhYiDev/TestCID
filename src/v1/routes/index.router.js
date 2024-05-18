const express = require("express");
const router = express.Router();

router.get("/checkstatus", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "api ok",
    });
});
router.get("/api/users", (req, res, next) => {
    res.status(200).json({
        status: "success api",
        message: "api ok",
        metaData: [
            {
                name: "AWS",
                description: "EC2",
            },
            {
                name: "BackEnd",
                description: "NodeJS",
            },
            {
                name: "FrontEnd",
                description: "React",
            },
            {
                name: "Docker",
                description: "Pull",
            },
        ],
    });
});

module.exports = router;
