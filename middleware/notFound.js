function notFoundFunction (req, res) {
    res.statusCode = 404;
    res.json({
        error: "True",
        message: "Not found"
    })
};

module.exports = notFoundFunction;