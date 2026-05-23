import { userData } from '#db/index.js'
import { calculateStreak } from '#lib/analytics.js'
import nodemailer from 'nodemailer'
import { didLogToday, mailDataGen, makeHtmlBody1, makeHtmlBody2 } from './helpers'

console.log(process.env.SMTP_USER)
console.log(process.env.SMTP_PASS)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

export async function sendMail() {
  try {
    const users = await userData()

    for (let i = 0; i < users.length; i++) {
      if (users[i].habits.length === 0) {
        transporter.sendMail(
          mailDataGen(users[i].email, "You're all set — now let's build your first habit", 'hello world', makeHtmlBody1(users[i].name))
        )
      } else {
        if (!didLogToday(users[i].habits[0].logs)) {
          const { currentStreak } = calculateStreak({ habit_logs: users[i].habits[0].logs })
          transporter.sendMail(
            mailDataGen(
              users[i].email,
              'Your habits are waiting for you today',
              'hello world',
              makeHtmlBody2({
                name: users[i].name,
                habit_count: users[i].habits.length,
                habits: users[i].habits.slice(0, 3).map((h) => ({ name: h.name })),
                streak_days: currentStreak,
                has_more: users[i].habits.length > 3,
                remaining_count: users[i].habits.length - 3
              })
            )
          )
        }
      }
    }
  } catch (err) {
    throw new Error('Error sending email')
  }
}
