import { NextRequest, NextResponse } from "next/server"
import Mailjet from "node-mailjet"

const mailjet = Mailjet.apiConnect(process.env.MAILJET_API_KEY || '', process.env.MAILJET_SECRET_KEY || '')

export async function POST(request: NextRequest, response: NextResponse) {

    const data = await request.json();

    const res = await mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: 'jeremiah@fusionintel.io',
                        Name: 'Jeremiah Lena'
                    },
                    To: [
                        {
                            Email: "jeremiahlena13@gmail.com",
                            Name: "Jeremiah Lena"
                        }
                    ],
                    Subject: "Message from " + data.name,
                    TextPart: data.message,
                }
            ]
        })

    return new Response('Success', { status: res.response.status })
}
