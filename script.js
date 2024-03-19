const image_1 = document.getElementsByClassName('image')[0];
const image_2 = document.getElementsByClassName('image')[1];
const image_3 = document.getElementsByClassName('image')[2];
const image_4 = document.getElementsByClassName('image')[3];
const image_5 = document.getElementsByClassName('image')[4];
const image_6 = document.getElementsByClassName('image')[5];

const display_1 = document.getElementsByClassName('full-image')[0];
const display_2 = document.getElementsByClassName('full-image')[1];
const display_3 = document.getElementsByClassName('full-image')[2];
const display_4 = document.getElementsByClassName('full-image')[3];
const display_5 = document.getElementsByClassName('full-image')[4];
const display_6 = document.getElementsByClassName('full-image')[5];

const close_1 = document.getElementsByClassName('full-image active')[0];


image_1.addEventListener('click', () => {
    display_1.classList.toggle('active');
})

image_2.addEventListener('click', () => {
    display_2.classList.toggle('active');
})

image_3.addEventListener('click', () => {
    display_3.classList.toggle('active');
})

image_4.addEventListener('click', () => {
    display_4.classList.toggle('active');
})

image_5.addEventListener('click', () => {
    display_5.classList.toggle('active');
})

image_6.addEventListener('click', () => {
    display_6.classList.toggle('active');
})


const form = document.querySelector('form');
const fullName = document.getElementById('name');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Nume: ${fullName.value}<br> 
    Telefon: ${phone.value}<br>
    Mesaj: ${message.value}`;
    console.log(bodyMessage);

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fanatn654@gmail.com",
        Password : "C1111E326415A447C76C58F1F5DACCA87980",
        To : 'fantan654@gmail.com',
        From : "fantan654@gmail.com",
        Subject : "Cerere noua!",
        Body : bodyMessage
    }).then(
      message => {
        if (message == 'OK') {
            Swal.fire({
                title: "Mesajul a fost trimis!",
                text: "Vei fi contactat in cel mai scurt timp!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()

    if ( !fullName.classList.contains('errorr') &&
    !phone.classList.contains('error') &&
    !message.classList.contains('error')) {
        sendEmail();
        form.reset();
        return false;
    }
    
})

function checkInputs() {
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        if (item.value =='') {
            item.classList.add('error');
        }

        item.addEventListener('keyup', () => {
            if (item.value != '') {
                item.classList.remove('error');
            }
            else {
                item.classList.add('error');
            }
        })
    }
}

function openBtn() {
    document.getElementById('sidebar').style.width = '300px';
    document.getElementById('closex').style.width = '60px';
}

function closeBtn() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('closex').style.width = '0';
}

function scrollHome() {
    var elem = document.getElementById("prezentare");
    elem.scrollIntoView();
}

function scrollPortofoliu() {
    var elem = document.getElementById("portofoliu");
    elem.scrollIntoView();
}

function scrollContact() {
    var elem = document.getElementById("contact");
    elem.scrollIntoView();
}

document.addEventListener('click', (e) => {
    const hamburger = document.getElementById('hamburger');
    const bar_1 = document.getElementById('bar-1');
    const bar_2 = document.getElementById('bar-2');
    const bar_3 = document.getElementById('bar-3');
    const sidebar = document.getElementById('sidebar')
    let targetE = e.target;
    if (targetE == hamburger) {
        console.log('a');
    }
    else if (targetE == bar_1){
        console.log('a');
    }
    else if (targetE == bar_2){
        console.log('a');
    }
    else if (targetE == bar_3){
        console.log('a');
    }
    else if (targetE == sidebar){
        console.log('a');
    }
    else {
        closeBtn();
    }

})