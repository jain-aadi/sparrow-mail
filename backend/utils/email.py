import resend

resend.api_key = "re_Ea8iUFWL_Ajtahrpd6XG1fewb5XLYtna8"

class ResendProvider():
    def send(self, email_to: str, subject: str, body: str):
        try:
            resend.Emails.send({
                "from": "onboarding@resend.dev",
                "to": email_to,
                "subject": subject,
                "html": f"<p>{body}</p>"
            })
            print(f"Sending to {email_to}")
        except Exception as e:
            print(f"Failed: {e}")