const router = require('express').Router()
const adminController = require('../controllers/adminController')
const { upload, uploadMultiple } = require('../middlewares/multer')

// Dashboard
router.get('/dashboard',  adminController.viewDashboard);

// Category
router.get('/category',  adminController.viewCategory);
router.post('/category',  adminController.addCategory);
router.put('/category',  adminController.editCategory);
router.delete('/category/:id',  adminController.deleteCategory);

// Bank
router.get('/bank',  adminController.viewBank);
router.post('/bank', upload, adminController.addBank);
router.put('/bank', upload, adminController.editBank);
router.delete('/bank/:id',  adminController.deleteBank);

// Item
router.get('/item',  adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);

router.get('/booking',  adminController.viewBooking);

module.exports = router