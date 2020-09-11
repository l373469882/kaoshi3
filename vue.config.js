const data = require("./mock/data")

module.exports = {
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data.list))
        }
    }
}