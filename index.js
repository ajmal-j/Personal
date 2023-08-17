function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

const serviceID="service_b6598le";
const templateID="template_56mi5ua";

emailjs.send(serviceID,templateID,params).then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Mail Sended.");
    }
)
.catch((err)=>console.log(err))
;
}