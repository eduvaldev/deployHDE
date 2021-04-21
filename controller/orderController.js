const db = require("../models");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'smartdeveloper33@gmail.com',
    pass: 'rum0303326478' // naturally, replace both with your real credentials or an application-specific password
  }
});

const sendMail = (to) => {
    var html = '<!doctype html><html> <head> <meta name="viewport" content="width=device-width"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <title>Simple Transactional Email</title> <style>@media only screen and (max-width: 620px){table[class=body] h1{font-size: 28px !important; margin-bottom: 10px !important;}table[class=body] p, table[class=body] ul, table[class=body] ol, table[class=body] td, table[class=body] span, table[class=body] a{font-size: 16px !important;}table[class=body] .wrapper, table[class=body] .article{padding: 10px !important;}table[class=body] .content{padding: 0 !important;}table[class=body] .container{padding: 0 !important; width: 100% !important;}table[class=body] .main{border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important;}table[class=body] .btn table{width: 100% !important;}table[class=body] .btn a{width: 100% !important;}table[class=body] .img-responsive{height: auto !important; max-width: 100% !important; width: auto !important;}}@media all{.ExternalClass{width: 100%;}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;}.apple-link a{color: inherit !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; text-decoration: none !important;}#MessageViewBody a{color: inherit; text-decoration: none; font-size: inherit; font-family: inherit; font-weight: inherit; line-height: inherit;}.btn-primary table td:hover{background-color: #34495e !important;}.btn-primary a:hover{background-color: #34495e !important; border-color: #34495e !important;}}</style> </head> <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"> <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">A new order has been created.</span> <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;"> <tr> <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td><td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;"> <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;"> <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;"> <tr> <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"> <tr> <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;"> <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there,</p><p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">A new order has been created</p><table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;"> <tbody> <tr> <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;"> <tbody> <tr> <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="http://146.59.230.26/order_management" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">View orders</a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></table> </td></tr></table> <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"> <tr> <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;"> Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">IHDE</a>. </td></tr></table> </div></div></td><td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td></tr></table> </body></html>';
    
    const mailOptions = {
      from: "ihde@dev.com",
      to: to,
      subject: 'A new order has been created',
      html: html
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Email ERROR: ', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}

const getFromDate = (date) => {
  const t = new Date(date)
  console.log("T: ", t)
  return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`
}

const getToDate = (date) => {
  const t = new Date(date)

  return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate() + 1}`
}


// Defining methods for the booksController
module.exports = {
  findAll: async function(req, res) {
    if (req.body.user.role === 'client') {
      const createdOrder = await  db.Order
                                    .find({client: req.body.user.id, isDraft: false})
                                    .sort({ createdAt: -1 })
                                    .populate('client')
                                    .populate({ path: 'referencia', model: 'implement.implement'})
                                    //.populate('implants.implant')
      const draftedOrder = await  db.Order
                                    .find({client: req.body.user.id, isDraft: true})
                                    .sort({ createdAt: -1 })
                                    .populate('client')
                                    //.populate('implants.implant')
      console.log('CradaOrdenes ------------>', createdOrder);
      console.log(draftedOrder);
      return res.json({created: createdOrder, drafted: draftedOrder})
    }
    const condition = {}
    if (req.body.user.role === 'stuff') {
      
      const customers = await db.User.find({manager: req.body.user.id})
      condition['client'] = customers.map(item=>item._id)
      if (req.body.picker) {
        condition['createdAt'] = req.body.picker
      }
      db.Order
      .find(condition)
      .sort({ createdAt: -1 })
      .populate('client')
      .populate('implants.implant')
      .populate('manager')
      .populate('rejectedImplants.implant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    } else {
      condition['isDraft'] = false
      if (req.body.picker) {
        const startDate = getFromDate(req.body.picker)
        const toDate = getToDate(req.body.picker)
        // console.log("Date: ", strDate)
        condition['createdAt'] = {$gte: new Date(startDate), $lt: new Date(toDate)}
        // condition['createdAt'] = { $gte: req.body.picker[0], $lte: req.body.picker[0] }
      }
      console.log("Condition: ", condition)
      db.Order
          .find(condition)
          .sort({ createdAt: -1 })
          .populate('client')
          //.populate('implants.implant')
          .populate('rejectedImplants.implant')
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
  },
  findById: function(req, res) {
    db.Order
      .findById(req.body._id)
      .populate('client', 'implants.implant')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    db.Order
      .create(req.body)
      .then(async dbModel => {
        if (dbModel.isDraft) {
          //remove after 3 hours
          setTimeout(() => {
            console.log("Remove: Drafted")
            db.Order.findByIdAndRemove(dbModel._id)
          }, 3600*3)
        }
        //decrease inventory
        dbModel.implants.map(implant => {
          db.Inventory.findOne({"referencia": implant.implant})
          .then(model => {
            model.cantidad -= implant.qty
            model.save()
          })
          .catch(err =>{
            console.log(err)
          })
        })
        
        const client = await db.User.findById(req.body.client);
        if (client) {
          const manager = await db.User.findById(client.manager)
          const admins = await db.User.find({'role':'admin'})
          const recipient = []
          recipient.push(manager.email)
          recipient.push("savelyanpasha1986@gmail.com")
          admins.forEach(item => {
            recipient.push(item.email)
          })
          sendMail(recipient.join(" ,"))
        }
        res.json({status: true, data: dbModel})
      })
      .catch(err => {
        console.log(err)
        res.json({status:false, msg: err.toString()})
      });
  },
  update: function(req, res) {
    db.Order
      .findByIdAndUpdate(req.body._id, req.body)
      .then(dbModel => res.json({data:dbModel,status: true}))
      .catch(err => res.json({status: true}));
  },
  remove: function(req, res) {
    db.Order
      .findByIdAndRemove(req.body._id)
      .then(dbModel => res.json({status: true, data: dbModel}))
      .catch(err => res.status(422).json(err));
  },
  findReplacements: function(req, res){
    db.Replacement
      .findOne({ referencia: req.body.referencia })
      .then(async dbModel => {
        if(dbModel){
          const replacement1 = await db.Inventory.findOne({referencia: dbModel.replacement1})
          const replacement2 = await db.Inventory.findOne({referencia: dbModel.replacement2})
          res.json({status: true, data: [replacement1, replacement2]})
        }
        else{
          res.json({status: false, msg: 'There is no replacement'})
        }
      }) 
      .catch(err => res.json({status: false, msg: err.toString()}));
  }
};