const Joi = require('joi');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      message: Joi.string().required().max(4096)
    });
    if (schema.validate(req.body).error) return res.status(400).json({error: 'Invalid JSON', detailedError: schema.validate(req.body).error.details[0].message});
    const request = await fetch(process.env.DISCORD_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [{
          title: 'New message',
          author: {
            name: req.body.email,
          },
          description: req.body.message,
          footer: {
            text: req.headers['x-forwarded-for'] ?? req.connection.remoteAddress ?? 'N/A'
          },
        }]
      })
    });
    return res.status(200).json({success: 'Message sent'});  
  } else {
    return res.status(405).json({error: 'Invalid method'})
  }
}