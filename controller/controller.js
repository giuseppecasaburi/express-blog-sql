const notFoundFunction = require("../middleware/notFound");
const connection = require("../dataBlog/dataBlog");


const index = (req, res) => {
    const sql = "SELECT * FROM posts;"

    connection.query(sql, (err, results) => {
        if (err) return res.Status(500).json({
            status: "Error 500",
            message: "Internal error server"
        })

        res.json({
            status: 200,
            message: results
        });
    });
};


const show = (req, res) => {
    
};


const create = (req, res) => {
    
};


const update = (req, res) => {
    
};


const destroy = (req, res) => {
    
};


module.exports = {
    index,
    show, 
    create, 
    update, 
    destroy
};