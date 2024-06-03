import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  "yourapikey"
);

async function main() {

    // db query
    const user = {
        name: "Juan Perez",
        email: "fazttech@gmail.com"
    }

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Hello world from brevo and Nodejs";
    sendSmtpEmail.to = [
      { email: user.email, name: user.name },
    //   { email: "fazttech@gmail.com", name: "Joe Mcmillan" },
    ];
    sendSmtpEmail.htmlContent = `<html><body><h1>Hola ${user.name}</h1><p>This is a test email</p><button>Click me</button><a href='https://www.faztweb.com'>Go to my website</a></body></html>`;
    sendSmtpEmail.sender = {
      name: "FaztWeb",
      email: "fazt@faztweb.com",
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();
