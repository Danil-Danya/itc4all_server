import nodemailer from "nodemailer";
import generateVerifyTemplate from '../static/email/templates/verify.templates.js';
import generateZoomMentorTemplate from "../static/email/templates/zoom.mentor.templates.js";
import generateZoomUserTemplate from "../static/email/templates/zoom.user.templates.js";

class EmailService {
    constructor () {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail (to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            subject: 'Verify account ACT4ALL',
            html: generateVerifyTemplate(link),
            to,
        })
    }

    async sendZoomSessionLinkToUser (to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            subject: 'Join Zoom Session ACT4ALL',
            html: generateZoomMentorTemplate(link),
            to,
        })
    }

    async sendZoomSessionLinkToMentor (to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            subject: 'Start Zoom Session ACT4ALL',
            html: generateZoomMentorTemplate(link),
            to,
        })
    }

    async sendCheckFromBuyedProduct () {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            subject: 'Verify account ACT4ALL',
            html: `
                <div>
                    <h1>Your zoom session link:</h1>
                    <a href="${link}">${link}</a>
                </div>
            `,
            text: '',
            to,
        })
    }
}

export default new EmailService();