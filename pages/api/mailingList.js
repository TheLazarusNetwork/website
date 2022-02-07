// import axios from "axios";
 
// export default async function handler(req, res) {
//  if (req.method === "PUT") {
//    axios
//      .put(
//        "https://api.sendgrid.com/v3/marketing/contacts",
//        {
//          contacts: [{ email: `${req.body.mail}` }],
//          list_ids: [process.env.SENDGRID_MAILING_ID],
//        },
//        {
//          headers: {
//            "content-type": "application/json",
//            Authorization: `Bearer ${process.env.SENDGRID_SECRET}`,
//          },
//        }
//      )
//      .then((result) => {
//        res.status(200).send({
//          message:
//            "Your email has been succesfully added to the mailing list. Welcome 👋",
//        });
//      })
//      .catch((err) => {
//        res.status(500).send({
//          message:
//            "Oups, there was a problem with your subscription, please try again or contact us",
//        });
//      });
//  }
// }


const { body,validationResult } = require('express-validator/check')
const _ = require('lodash')
const isEmpty = require('lodash/isEmpty')
const SENDGRID_API_KEY = process.env.SENDGRID_MAILING_KEY

function validationCheck(req){
    const errors_array = validationResult(req).array();
    let errors = {}
    _.map(errors_array,(val)=>{
        if(!errors[val.param])
            errors[val.param]=[]
        errors[val.param].push(val.msg)
    });
    return errors  
}
export default async (req, res) => {
    try{    
        await body('email','').isEmail().run(req);
        let errors = validationCheck(req)
        if(isEmpty(errors)){
            let result = await fetch(`https://api.sendgrid.com/v3/marketing/contacts`, {
                method: 'PUT', 
                headers: {
                    "authorization": `Bearer ${SENDGRID_API_KEY}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    "list_ids": [
                        "0417a2c7-c006-44be-9d6c-9e763788ebe8"
                    ],
                    "contacts": [
                        {
                        "email": req.body.email
                        }
                    ]
                }) 
            })
            if(result.status==202){
                res.json({status:"success"})
                console.log('success 202')
            }
            else{
                console.log('error 400')
                res.json({status:"error"})
            }
        } else {
            console.log('validation error')
            res.json({status:"error"})
        }
    } catch(err){
        res.json({status:"error"})
    }
}