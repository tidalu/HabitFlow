import cron from 'node-cron'

import { sendMail } from './nodemailer/transporter.js'

cron.schedule('0 8 * * *', sendMail)

console.log('Cron started')
