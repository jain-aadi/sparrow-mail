class EmailService():
    def __init__(self, provider):
        self.provider = provider

    def send(self, email_to: str, subject: str, body: str):
        return self.provider.send(email_to, subject, body)