import nodemailer from 'nodemailer'

import { userData } from '../../db/index.js'
import { calculateStreak } from '../analytics.js'

import { didLogToday, mailDataGen, makeHtmlBody1, makeHtmlBody2 } from './helpers.js'

const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS

if (!smtpUser || !smtpPass) {
  throw new Error('SMTP_USER and SMTP_PASS must be set in .env')
}

const transporter = nodemailer.createTransport({
  auth: {
    pass: smtpPass,
    user: smtpUser
  },
  host: 'smtp.gmail.com',
  port: 587,
  requireTLS: true,
  secure: false
})

export async function sendMail() {
  try {
    await transporter.verify()
    console.log('Server is ready to take our messages')

    const users = await userData()

    for (const user of users) {
      if (user.habits.length === 0) {
        await transporter.sendMail(
          mailDataGen(user.email, "You're all set — now let's build your first habit", 'hello world', makeHtmlBody1(user.name))
        )
      } else {
        if (!didLogToday(user.habits[0].logs)) {
          const { currentStreak } = calculateStreak({ habit_logs: user.habits[0].logs })
          await transporter.sendMail(
            mailDataGen(
              user.email,
              'Your habits are waiting for you today',
              'hello world',
              makeHtmlBody2({
                habit_count: user.habits.length,
                habits: user.habits.slice(0, 3).map((h: (typeof user.habits)[0]) => ({ name: h.name })),
                has_more: user.habits.length > 3,
                name: user.name,
                remaining_count: user.habits.length - 3,
                streak_days: currentStreak
              })
            )
          )
        }
      }
    }
  } catch (err) {
    console.log(err)
  }
}
