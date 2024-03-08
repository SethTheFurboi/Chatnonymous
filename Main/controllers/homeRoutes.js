const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/main", async (req, res) => {
    try {
        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
