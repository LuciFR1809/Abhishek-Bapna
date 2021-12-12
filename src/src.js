setInterval(hello,2000);
setInterval(desig,3500);

const hellos=['Hello','Hi','Wassup','Hola','Bonjour',' 你好',
            '안녕하세요','Guten Tag',' नमस्ते',' γεια σας','السلام علیکم',
            'Hej','કેમ છો','ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ','வணக்கம்','నమస్కరం','ನಮಸ್ತೆ',
            'Aloha','Salve','Olá','Привет','Pẹlẹ o','שלום'];
const helloLen=hellos.length;
function hello(){
    document.getElementById("greeting").innerHTML=hellos[Math.floor(Math.random() * helloLen)]
};

const desigs=['A Software Developer <span class="emoji">💻</span>','A Coder <span class="emoji">👨🏻‍💻</span>','A UI Enthusiast <span class="emoji">✨</span>',
            'A Frontend Developer <span class="emoji">💫</span>','A Python Coder <span class="emoji">🐍</span>','A C++ Coder <span class="emoji">©</span>',
            'A JavaScript Coder <span class="emoji">☕</span>','An Engineer <span class="emoji">👷🏻‍♂️</span>','A Science Geek <span class="emoji">👨🏻‍🔬</span>',
            'A Tech Junkie <span class="emoji">👨🏻‍🔧</span>','An Android Developer <span class="emoji">🤖</span>','An Alien <span class="emoji">👽</span>',
            'A Doggo Lover <span class="emoji">🐶</span>','A Noob Chess Player <span class="emoji">♟</span>','A Music Connoisseur <span class="emoji">🎧</span>',
            'A Bookworm <span class="emoji">📚</span>','A Really PUN\'ny Person <span class="emoji">🤡</span>','A Curious Soul <span class="emoji">🧠</span>',
            'A Beach Bum <span class="emoji">🌴</span>','A Ravenclaw <span class="emoji">🦅</span>','A Hustler <span class="emoji">💪🏻</span>',
            'The Pirate King <span class="emoji">🏴‍☠️</span>','A Water Type Gym Leader <span class="emoji">💧</span>','A Son Of Poseidon <span class="emoji">🌊</span>',
            'A Water Bender <span class="emoji">🏄🏻‍♂️</span>','A History Nut <span class="emoji">🦕</span>','A Certified Foodie <span class="emoji">👨🏻‍🍳</span>'
            ,'A Theatre Weirdo <span class="emoji">🎭</span>','A Proud Indian <span class="emoji">🇮🇳</span>'];
const desigLen=desigs.length;
function desig(){
    document.getElementById("designation").innerHTML=desigs[Math.floor(Math.random() * desigLen)]
};