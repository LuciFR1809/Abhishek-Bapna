const hellos=['Hello','Hi','Wassup','Hola','Bonjour',' 你好',
            ' 你好','안녕하세요','Guten Tag',' नमस्ते',' γεια σας','السلام علیکم',
            'Hej','કેમ છો','ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ','வணக்கம்','నమస్కరం','ನಮಸ್ತೆ',
            'Aloha','Salve','Olá','Привет','Pẹlẹ o','שלום'];

const helloLen=hellos.length;
setInterval(hello,2000);
function hello(){
    document.getElementById("greeting").innerHTML=hellos[Math.floor(Math.random() * helloLen)]
};
