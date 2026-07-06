function didLogToday(logs: { log_date: Date }[]) {
  const today = new Date()

  for (const log of logs) {
    const { log_date } = log

    if (log_date.getDate() === today.getDate() && log_date.getMonth() === today.getMonth() && log_date.getFullYear() === today.getFullYear()) {
      return true
    }
  }

  return false
}

function mailDataGen(email: string | string[], subject: string, text: string, html: string) {
  return {
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    html: html,
    subject: subject,
    text: text,
    to: email instanceof Array ? email.join(',') : email
  }
}

function makeHtmlBody1(name: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Create your first habit — HabitFlow</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: #f4f4f5;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #18181b;
      padding: 40px 16px;
    }
    .wrapper {
      max-width: 560px;
      margin: 0 auto;
    }
    .logo {
      text-align: center;
      margin-bottom: 24px;
      font-size: 20px;
      font-weight: 600;
      color: #534AB7;
      letter-spacing: -0.3px;
    }
    .card {
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e4e4e7;
    }
    .card-header {
      background: #EEEDFE;
      padding: 32px 32px 28px;
      text-align: center;
      border-bottom: 1px solid #CECBF6;
    }
    .card-header .icon {
      font-size: 36px;
      margin-bottom: 12px;
      display: block;
    }
    .card-header h1 {
      font-size: 20px;
      font-weight: 600;
      color: #3C3489;
      line-height: 1.3;
    }
    .card-body {
      padding: 32px;
    }
    .card-body p {
      font-size: 15px;
      line-height: 1.7;
      color: #3f3f46;
      margin-bottom: 16px;
    }
    .card-body p:last-of-type {
      margin-bottom: 0;
    }
    .ideas-box {
      background: #f4f4f5;
      border-radius: 8px;
      padding: 16px 20px;
      margin: 20px 0;
    }
    .ideas-box p {
      font-size: 13px !important;
      color: #71717a !important;
      margin: 0 !important;
      line-height: 1.8 !important;
    }
    .ideas-box strong {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: #534AB7;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }
    .cta-wrap {
      text-align: center;
      margin-top: 28px;
    }
    .cta-btn {
      display: inline-block;
      background: #534AB7;
      color: #ffffff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      padding: 12px 28px;
      border-radius: 8px;
      letter-spacing: -0.1px;
    }
    .card-footer {
      border-top: 1px solid #e4e4e7;
      padding: 20px 32px;
      font-size: 12px;
      color: #a1a1aa;
      text-align: center;
      line-height: 1.6;
    }
    .card-footer a {
      color: #a1a1aa;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="logo">HabitFlow</div>
    <div class="card">
      <div class="card-header">
        <span class="icon">🌱</span>
        <h1>You're all set — now let's build your first habit</h1>
      </div>
      <div class="card-body">
        <p>Hey ${name},</p>
        <p>Welcome to HabitFlow! Your account is ready, but it looks like you haven't created any habits yet.</p>
        <p>Habits work best when they're small and specific. Start with just one thing — something you've been meaning to do consistently.</p>

        <div class="ideas-box">
          <strong>A few ideas</strong>
          <p>
            Read for 10 minutes &nbsp;·&nbsp; Drink 2L of water<br />
            Go for a short walk &nbsp;·&nbsp; Journal one sentence<br />
            Stretch for 5 minutes &nbsp;·&nbsp; No phone before breakfast
          </p>
        </div>

        <p>Pick one, add it to your list, and check it off tomorrow. That's the whole game.</p>

        <div class="cta-wrap">
          <a href="{{app_url}}/habits/new" class="cta-btn">Create your first habit →</a>
        </div>
      </div>
      <div class="card-footer">
        You're receiving this because you signed up for HabitFlow.<br />
        <a href="{{unsubscribe_url}}">Unsubscribe</a>
      </div>
    </div>
  </div>
</body>
</html>`
}
function makeHtmlBody2({
  habit_count,
  habits,
  has_more,
  name,
  remaining_count,
  streak_days
}: {
  habit_count: number
  habits: { name: string }[]
  has_more: boolean
  name: string
  remaining_count: number
  streak_days: number
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your habits are waiting — HabitFlow</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: #f4f4f5;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #18181b;
      padding: 40px 16px;
    }
    .wrapper { max-width: 560px; margin: 0 auto; }
    .logo {
      text-align: center;
      margin-bottom: 24px;
      font-size: 20px;
      font-weight: 600;
      color: #534AB7;
      letter-spacing: -0.3px;
    }
    .card {
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e4e4e7;
    }
    .card-header {
      background: #E1F5EE;
      padding: 32px 32px 28px;
      text-align: center;
      border-bottom: 1px solid #9FE1CB;
    }
    .card-header .icon { font-size: 36px; margin-bottom: 12px; display: block; }
    .card-header h1 { font-size: 20px; font-weight: 600; color: #085041; line-height: 1.3; }
    .card-body { padding: 32px; }
    .card-body p { font-size: 15px; line-height: 1.7; color: #3f3f46; margin-bottom: 16px; }
    .streak-box {
      background: #f4f4f5;
      border-radius: 8px;
      padding: 16px 20px;
      margin: 20px 0;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .streak-icon { font-size: 28px; flex-shrink: 0; }
    .streak-text strong { display: block; font-size: 15px; font-weight: 600; color: #18181b; }
    .streak-text span { font-size: 13px; color: #71717a; }
    .habit-list {
      list-style: none;
      margin: 20px 0;
      border: 1px solid #e4e4e7;
      border-radius: 8px;
      overflow: hidden;
    }
    .habit-list li {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      font-size: 14px;
      color: #3f3f46;
      border-bottom: 1px solid #f4f4f5;
    }
    .habit-list li:last-child { border-bottom: none; }
    .habit-list li .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #9FE1CB;
      flex-shrink: 0;
    }
    .more-label {
      font-size: 12px;
      color: #a1a1aa;
      text-align: center;
      padding: 10px;
      background: #fafafa;
      border-top: 1px solid #f4f4f5;
    }
    .cta-wrap { text-align: center; margin-top: 28px; }
    .cta-btn {
      display: inline-block;
      background: #0F6E56;
      color: #ffffff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      padding: 12px 28px;
      border-radius: 8px;
      letter-spacing: -0.1px;
    }
    .card-footer {
      border-top: 1px solid #e4e4e7;
      padding: 20px 32px;
      font-size: 12px;
      color: #a1a1aa;
      text-align: center;
      line-height: 1.6;
    }
    .card-footer a { color: #a1a1aa; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="logo">HabitFlow</div>
    <div class="card">
      <div class="card-header">
        <span class="icon">✅</span>
        <h1>Your habits are waiting for you today</h1>
      </div>
      <div class="card-body">
        <p>Hey ${name},</p>
        <p>You haven't logged any of your habits yet today. You've got <strong>${habit_count.toString()} habit${habit_count > 1 ? 's' : ''}</strong> on your list — a quick check-in keeps your streak alive.</p>

        <ul class="habit-list">
          ${habits
            .slice(0, 3)
            .map(
              (h) => `
          <li>
            <span class="dot"></span>
            ${h.name}
          </li>`
            )
            .join('')}
          ${has_more ? `<li class="more-label">+ ${remaining_count.toString()} more</li>` : ''}
        </ul>

        <div class="streak-box">
          <span class="streak-icon">🔥</span>
          <div class="streak-text">
            <strong>${streak_days.toString()}-day streak</strong>
            <span>Don't break the chain — log before midnight.</span>
          </div>
        </div>

        <p>Every small log adds up. You've done it before, you can do it today.</p>

        <div class="cta-wrap">
          <a href="" class="cta-btn">Log today's habits →</a>
        </div>
      </div>
      <div class="card-footer">
        You're receiving this because reminders are enabled on your account.<br />
        <a href="">Manage preferences</a> &nbsp;·&nbsp; <a href="">Unsubscribe</a>
      </div>
    </div>
  </div>
</body>
</html>`
}
export { didLogToday, mailDataGen, makeHtmlBody1, makeHtmlBody2 }
