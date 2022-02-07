const SENDGRID_API = 'https://api.sendgrid.com/v3/marketing/contacts';

const emailSignup = async ({ email }) => {
  console.log(email)
  await fetch(SENDGRID_API, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      list_ids: ['0417a2c7-c006-44be-9d6c-9e763788ebe8'],
      contacts: [ {email: email} ] 
    })
  })
}

export { emailSignup }