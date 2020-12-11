const express = require('express');
const announcementController = require('../controllers/announcement');

const router = express.Router();

router.route('/postannouncement').post(announcementController.postAnnouncement);
router
  .route('/getannouncement/:id')
  .get(announcementController.getAnnouncement);

module.exports = router;
