function sendMail(contactForm) {
    emailjs.send("service_hbrvgbp", "template_kfla9db", {
            project_request: contactForm.projectsummary.value,
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
        })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    
    return false;
}