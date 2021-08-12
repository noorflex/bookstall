const db = require('../config/dbconfig');


// Get all the books

const getAllBooks = (request, response) => {
    db.query(`select * from bookstall.books`, (err, res) => {
        if (err) {
            res.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    });
}

const getBooksById = (request, response) => {
    console.log('Book Id' + request.params.id);
    db.query(`select * from bookstall.books books where books.book_id='${request.params.id}'`, (err, res) => {
        if (err) {
            res.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    });
}

module.exports = {
    getAllBooks,
    getBooksById
}