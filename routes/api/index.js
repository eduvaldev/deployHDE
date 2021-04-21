const router = require("express").Router();
const userRoutes = require("./userRoutes");
const inventoryRoutes = require("./inventoryRoutes");
const orderRoutes = require("./orderRoutes");
const todoRoutes = require("./todoRoutes");

router.use("/users", userRoutes);
router.use("/inventory", inventoryRoutes)
router.use("/order", orderRoutes);
router.use("/todos", todoRoutes);

router.get( '/test', (req, res)=>{
  res.send('Hola Prueba');
})

module.exports = router;
