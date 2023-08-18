import nodemailer from 'nodemailer'

export const sendEmail = async ({ email, id, username, correctAnswers, totalQuestions, percentage }: any) => {
    try {
        var transport = nodemailer.createTransport({
            host: process.env.HOST!,
            port: 2525,
            auth: {
                user: process.env.HOST_USER!,
                pass: process.env.HOST_PASS!
            }

        });
        const mailOptions = {
            from: 'aubair.akif.1998dev@gmail.com',
            to: email,
            subject: `${username} | ${id} |  Quiz Results`,
            html: `
                <h2>Hello ${username},</h2>
                <p>Your quiz results are as follows:</p>
                <ul>
                    <li>Correct Answers: ${correctAnswers}</li>
                    <li>Total Questions: ${totalQuestions}</li>
                    <li>Percentage Scored: ${percentage}%</li>
                </ul>
                <p>Thank you for taking the quiz!</p>
                <p>Best regards,</p>
                <p>Your Quiz Team</p>
            `,
        };

        // Send the email
        const info = await transport.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        return info;
    }
    catch (error: any) {
        throw new Error(error.message);
    }
};
