// SIDEBAR
const menuItmes = document.querySelectorAll('.menu-item');


// MESSAGES
const messagesNotification = document.querySelector('#messages-notification')
    ;
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');






// remove active class from all menu items

const changeActiveItem = () => {
    menuItmes.forEach(item => {
        item.classList.remove('active');
    })
}

menuItmes.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('.notification-count').
                style.display = 'none';
        }
    })
})

// ==================== MESSAGES ==============
//searchers chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}
// search chat
messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// THEME/DISPLAY CUSTOMIZATION
//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

//close modal
themeModal.addEventListener('click', closeThemeModal);


theme.addEventListener('click', openThemeModal);


// ===========================FONTS================
//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


//change primary
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //remove active class from colors
        changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})





//theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

//change background colors
Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
});


Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});


//REACT BUTTONS

var btnvar1 = document.getElementById('btnh1');

function Toggle1() {
    if (btnvar1.style.color == "red") {
        btnvar1.style.color = "grey"
    }
    else {
        btnvar1.style.color = "red"
    }
}

var btnvar2 = document.getElementById('btnh2');

function Toggle2() {
    if (btnvar2.style.color == "violet") {
        btnvar2.style.color = "grey"
    }
    else {
        btnvar2.style.color = "violet"
    }
}

var btnvar3 = document.getElementById('btnh3');

function Toggle3() {
    if (btnvar3.style.color == "green") {
        btnvar3.style.color = "grey"
    }
    else {
        btnvar3.style.color = "green"
    }
}

var btnvar4 = document.getElementById('btnh4');

function Toggle4() {
    if (btnvar4.style.color == "red") {
        btnvar4.style.color = "grey"
    }
    else {
        btnvar4.style.color = "red"
    }
}

var btnvar5 = document.getElementById('btnh5');

function Toggle5() {
    if (btnvar5.style.color == "violet") {
        btnvar5.style.color = "grey"
    }
    else {
        btnvar5.style.color = "violet"
    }
}

var btnvar6 = document.getElementById('btnh6');

function Toggle6() {
    if (btnvar6.style.color == "green") {
        btnvar6.style.color = "grey"
    }
    else {
        btnvar6.style.color = "green"
    }
}

var btnvar7 = document.getElementById('btnh7');

function Toggle7() {
    if (btnvar7.style.color == "red") {
        btnvar7.style.color = "grey"
    }
    else {
        btnvar7.style.color = "red"
    }
}

var btnvar8 = document.getElementById('btnh8');

function Toggle8() {
    if (btnvar8.style.color == "violet") {
        btnvar8.style.color = "grey"
    }
    else {
        btnvar8.style.color = "violet"
    }
}

var btnvar9 = document.getElementById('btnh9');

function Toggle9() {
    if (btnvar9.style.color == "red") {
        btnvar9.style.color = "grey"
    }
    else {
        btnvar9.style.color = "red"
    }
}
