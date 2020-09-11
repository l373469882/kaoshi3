const Mock = require("mockjs")

module.exports = Mock.mock({
    "list|20": [{
        "url": "@image(200x300,@color)",
        "id": "@id",
        "title": "@ctitle(6)"
    }]
})