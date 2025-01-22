const postArray = require("../dataBlog/dataBlog");
const notFoundFunction = require("../middleware/notFound");


const index = (req, res) => {
    const clientParams = req.query.tags;
    if (clientParams === undefined) {
        res.json({
            data: postArray,
            count: postArray.length
        });
    } else {
        const postArrayToShow = postArray.filter((currItem) => currItem.tags.includes(clientParams))
        res.json({
            show: postArrayToShow,
            message: "Array filtrato",
            counter: postArrayToShow.length
        });
    };
};


const show = (req, res) => {
    const clientId = req.params.id;
    const postToShow = postArray.find((currItem) => currItem.id === parseInt(clientId));

    if (postToShow != undefined) {
        res.json(postToShow);
    } else {
        notFoundFunction;
    };
};


const create = (req, res) => {
    const ingressData = req.body;
    console.log(ingressData);

    const lastIndex = postArray.length - 1;
    const lastId = postArray[lastIndex].id;
    const newId = lastId + 1;
    
    const newPost = {id: newId, ...ingressData};
    postArray.push(newPost);

    res.statusCode = 201;
    res.json(newPost);
};


const update = (req, res) => {
    const idDaModificare = parseInt(req.params.id);
    let elemDaModificare = null;

    for (let i = 0; i < postArray.length; i++) {
        const currItem = postArray[i];
        
        if (currItem.id === idDaModificare) {
            postArray[i] = {
                ...currItem,
                ...req.body
            };
            elemDaModificare = postArray[i];
            break;
        };
    };
    if (!elemDaModificare) {
        notFoundFunction;
    } else {
    res.json({
        message: "Elemento modificato"
    });        
    }
};


const destroy = (req, res) => {
    const clientId = parseInt(req.params.id);
    const postToDelete = postArray.find((currItem) => currItem.id === parseInt(clientId));
    const indexPost = postArray.indexOf(postToDelete);

    if (indexPost === -1) {
        notFoundFunction;
    } else {
        postArray.splice(indexPost, 1);
        res.status(204).end()
        console.log(postArray);
    };
};


module.exports = {
    index,
    show, 
    create, 
    update, 
    destroy
};