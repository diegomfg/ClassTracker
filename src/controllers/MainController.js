class MainController {
    constructor () {}

    handleIndex = (req, res) => {
        res.render("indexViews/home", {notice: `Welcome to ${req.originalUrl}`})
    }
}

exports.MainController = new MainController;