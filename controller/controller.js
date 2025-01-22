const notFoundFunction = require("../middleware/notFound");
const connection = require("../dataBlog/dataBlog");


const index = (req, res) => {
    const sql = "SELECT * FROM posts;"

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            status: "Error 500",
            message: "Internal error server"
        })

        res.json({
            status: 204,
            message: results
        });
    });
};


const show = (req, res) => {
    const postId = req.params.id;
    const sql = "SELECT * FROM posts WHERE id = ?;";

    connection.query(sql, [postId], (err, results) => {
        if (err) {
            return res.status(500).json({
            message: "Internal error server"
        })} else if (results.length === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        } else {
            return res.status(204).json({
                message: results
            });
        };
    });

};


const create = (req, res) => {
    
};


const update = (req, res) => {
    
};


const destroy = (req, res) => {
    const postId = req.params.id;
    const sql = "DELETE FROM posts WHERE id = ?";

    connection.query(sql, [postId], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Internal error server"
            });
        } 
        
        res.sendStatus(204)
    });
};


module.exports = {
    index,
    show, 
    create, 
    update, 
    destroy
};