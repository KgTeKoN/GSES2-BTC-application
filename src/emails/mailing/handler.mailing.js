const { sendEmails } = require('');

const errorList = async () => {
    try {
        sendEmails(emailList())
    }
}