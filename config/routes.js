
module.exports = function(router){
  router.get("/", function(req, res){
    res.render("home"); 
  });

  router.get("/saved", function(router){
    res.render("saved");
  })
}