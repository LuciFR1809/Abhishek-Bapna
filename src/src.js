setInterval(hello,2000);
setInterval(desig,3500);

const hellos=['Hello','Hi','Wassup','Hola','Bonjour',' 你好',
            ' 你好','안녕하세요','Guten Tag',' नमस्ते',' γεια σας','السلام علیکم',
            'Hej','કેમ છો','ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ','வணக்கம்','నమస్కరం','ನಮಸ್ತೆ',
            'Aloha','Salve','Olá','Привет','Pẹlẹ o','שלום'];
const helloLen=hellos.length;
function hello(){
    document.getElementById("greeting").innerHTML=hellos[Math.floor(Math.random() * helloLen)]
};

const desigs=['A Software Developer 💻','A Coder 👨🏻‍💻','A UI Enthusiast ✨',
            'A Frontend Developer 💫','A Python Coder 🐍','A C++ Coder ©',
            'A JavaScript Coder ☕','An Engineer 👷🏻‍♂️','A Science Geek 👨🏻‍🔬',
            'A Tech Junkie 👨🏻‍🔧','An Android Developer 🤖','An Alien 👽',
            'A Doggo Lover 🐶','A Noob Chess Player ♟','A Music Connoisseur 🎧',
            'A Bookworm 📚','A Really PUN\'ny Person 🤡','A Curious Soul 🧠',
            'A Beach Bum 🏝','A Ravenclaw 🦅','A Hustler 💪🏻',
            'The Pirate King 🏴‍☠️','A Water Type Gym Leader 💧','A Son Of Poseidon 🌊',
            'A Water Bender 🏄🏻‍♂️','A History Nut 🦕','A Certified Foodie 👨🏻‍🍳'];
const desigLen=desigs.length;
function desig(){
    document.getElementById("designation").innerHTML=desigs[Math.floor(Math.random() * desigLen)]
};