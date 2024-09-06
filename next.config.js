/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        smtpUsername: `${process.env.SMTP_USERNAME}`,
        smtpPassword: `${process.env.SMTP_PASSWORD}`,
        smtpHost: `${process.env.SMTP_HOST}`,
        smtpFrom: `${process.env.SMTP_FROM}`,
        smtpToContact: `${process.env.SMTP_TO_CONTACT}`,
        smtpToEnquiry: `${process.env.SMTP_TO_ENQUIRY}`
    },
}

module.exports = nextConfig
