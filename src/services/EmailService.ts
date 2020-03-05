interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

export default class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`email enviado para ${to.name}:${message.subject}`);
  }
}
