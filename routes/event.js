const eventReviewController = require("../controllers/event");

module.exports = app => {
    app.get("/eventreviews", eventReviewController.findAll);
    app.post("/eventreviews", eventReviewController.create);
    app.get("/eventreviews/:id", eventReviewController.findOne);
    app.patch("/eventreviews/:id", eventReviewController.update);
    app.delete("/eventreviews/:id", eventReviewController.delete)
}