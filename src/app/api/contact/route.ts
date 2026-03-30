import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, projectType, message } = await request.json()

    if (!name || !email || !projectType || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const to = process.env.CONTACT_EMAIL
    if (!to) {
      return Response.json({ error: 'Server misconfiguration.' }, { status: 500 })
    }

    const { error } = await resend.emails.send({
      from: 'dreaminwithori <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `New inquiry from ${name} — ${projectType}`,
      html: `
        <table style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111;border-collapse:collapse;">
          <tr>
            <td style="padding:32px 0 16px;font-size:22px;font-weight:700;">
              New project inquiry
            </td>
          </tr>
          <tr>
            <td style="padding:0 0 24px;font-size:13px;color:#666;letter-spacing:.05em;text-transform:uppercase;">
              dreaminwithori — contact form
            </td>
          </tr>
          <tr>
            <td style="padding:20px;background:#f5f5f5;border-radius:8px;">
              <p style="margin:0 0 12px;"><strong>Name</strong><br>${name}</p>
              <p style="margin:0 0 12px;"><strong>Email</strong><br><a href="mailto:${email}" style="color:#19647E;">${email}</a></p>
              <p style="margin:0 0 12px;"><strong>Project Type</strong><br>${projectType}</p>
              <p style="margin:0;"><strong>Message</strong><br>${message.replace(/\n/g, '<br>')}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 0 0;font-size:12px;color:#999;">
              Reply directly to this email to respond to ${name}.
            </td>
          </tr>
        </table>
      `,
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
