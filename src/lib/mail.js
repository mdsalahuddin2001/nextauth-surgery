import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email, token) => {
  await resend.emails.send({
    from: "mail@mdsalahuddin.com",
    to: email,
    subject: "Two Factor Authentication",
    html: `<p>Your 2FA code is: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "mail@mdsalahuddin.com",
    to: email,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
  });
};

export const sendVerificationEmail = async (email, token) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "mail@mdsalahuddin.com",
    to: email,
    subject: "Verify Your Email",
    html: `<p>Click <a href="${confirmLink}">here</a> to verify your email</p>`,
  });
};
