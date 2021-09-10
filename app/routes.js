const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/what_service_answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var whatService = req.session.data['what_service']
  
    // Check whether the variable matches a condition
    if (whatService == "request-title-information"){
      // Send user to next page
      res.redirect('/requestTitleInformation/LD_prototype/request_title_information/Request-title-information-1-1')
    } else {
      // Send user to ineligible page
      res.redirect('/requestTitleInformation/LD_prototype/bulk_request/Official-searches-2-32')
    }
  
  })


module.exports = router
