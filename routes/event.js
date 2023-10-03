const eventReviewController = require("../controllers/event");

module.exports = app => {
    app.get("/api/eventreviews", eventReviewController.findAll);
    app.post("/api/eventreviews", eventReviewController.create);
    app.get("/api/eventreviews/:id", eventReviewController.findOne);
    app.patch("/api/eventreviews/:id", eventReviewController.update);
    app.delete("/api/eventreviews/:id", eventReviewController.delete)
}