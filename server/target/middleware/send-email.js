import nodemailer from "nodemailer";
import { emailTransporter } from "config/nodemailer";
export const sendVerificationEmail = async (recipient, url) => {
    const info = await emailTransporter.sendMail({
        from: '"Underground Dance Music" <noreply@udmx.net>',
        to: recipient,
        subject: "Confirm email address",
        text: `Click the following link to confirm your email address: ${url}`,
        html: `Click the following link to confirm your email address: ${url}`,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
