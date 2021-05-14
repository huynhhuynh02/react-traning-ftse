//top chart
import tinhbandieuki from "./images/tinhbandieuki.jpg";
import tinhban from "./songs/tinhban.mp3";
import phaichangem from "./songs/phaichangem.mp3";
import phaichang from "./images/phaichang.jpg";
import mood from "./images/mood.jpg";
import moodmusic from "./songs/moodmusic.mp3";
import oknottobeok from "./images/oknotok.jpg";
import oknotok from "./songs/oknotok.mp3";
import monstermusic from "./songs/monstermusic.mp3";
import monster from "./images/Monster.jpg";
import summer from "./images/summer.jpg";
import summermusic from "./songs/summer.mp3";
import animal from "./images/marron5.jpg";
import animalmusic from "./songs/animal.mp3";
import intheroom from "./images/travis-scott.jpg";
import intheroommusic from "./songs/intheroom.mp3";
import thunder from "./images/sia.jpg";
import thundermusic from "./songs/thunder.mp3";
import icecream from "./images/icecream.jpg";
import icecreammusic from "./songs/icecream.mp3";
//album
//coffe
import cafe from "./images/cafe.jpg";
import exehateme from "./images/exehateme.jpg";
import exehatememusic from "./songs/exehateme.mp3";
//edm
import edm from "./images/edm.jpg";
import itook from "./images/itook.jpg";
import itookmusic from "./songs/itook.mp3"; 
//chill
import chill from "./images/chill.jpg";
import nangtho from "./images/nangtho.jpg";
import nangthomusic from "./songs/nangtho.mp3";
import ok from "./images/ok.jpg";
import okmusic from "./songs/ok.mp3";
//playgame
import playgame from "./images/playgame.jpg";
import onmyway from "./images/onmyway.jpg";
import onmywaymusic from "./songs/onmyway.mp3";
//motivation
import motivation from "./images/motivation.jpg";
//vietnamese
import vietnamese from "./images/vietnamese.jpg";
//usuk
import usuk from "./images/usuk.jpg";
//kpop
import kpop from"./images/kpop.jpg";
//db
import randb from "./images/randb.jpg";
//romantic
import romantic from "./images/romantic.jpg";
//rapparty
import rapparty from "./images/rapparty.jpg";
//relax
import relax from "./images/relax.jpg";
const data = [
    {
      "id": "1",
      "song": "Tình bạn diệu kì",
      "artist": "Amee & Lăng LD",
      "picture": tinhbandieuki,
      "link": tinhban
    },
    {
      "id": "2",
      "song": "Phải chăng em đã yêu",
      "artist": "Juky San",
      "picture": phaichang,
      "link": phaichangem
    },
    {
      "id": "3",
      "song": "Mood",
      "artist": "24KGoldn, Iann Dior",
      "picture": mood,
      "link": moodmusic
    },
    {
      "id": "4",
      "song": "Ok not to be Ok",
      "artist": "Marshmello,Demi Lovato",
      "picture": oknottobeok,
      "link": oknotok
    },
    {
      "id": "5",
      "song": "Monster",
      "artist": "Shawn Mendes,Justin Bieber",
      "picture": monster,
      "link": monstermusic
    },
    {
      "id": "6",
      "song": "Summer",
      "artist": "Shawn Mendes,Justin Bieber",
      "picture": summer,
      "link": summermusic
    },
    {
      "id": "7",
      "song": "Animal",
      "artist": "Maroon 5",
      "picture": animal,
      "link": animalmusic
    },
    {
      "id": "8",
      "song": "Highest in the room",
      "artist": "Travis Scott",
      "picture": intheroom,
      "link": intheroommusic
    },
    {
      "id": "9",
      "song": "Thunderclound",
      "artist": "LSD,Sia,Diplo,Labrinth",
      "picture": thunder,
      "link": thundermusic
    },
    {
      "id": "10",
      "song": "Ice Cream",
      "artist": "BlackPink,Selena Gomez",
      "picture": icecream,
      "link": icecreammusic
    }
  ]

export const albums = [
    {
      "id":'coffe',
      "name":'Coffe',
      "image":cafe,
      "list":[
        { 
          "id":"1",
          "song":"Ice Cream",
          "artist":"BlackPink,Selena Gomez",
          "picture": icecream,
          "link":icecreammusic
        },
        { 
          "id":"2",
          "song":"Exe'hate me",
          "artist":"Amee, Bray",
          "picture": exehateme,
          "link":exehatememusic
        },
        {
          "id":"3",
          "song":"On My way",
          "artist":"Alan Walker",
          "picture":onmyway,
          "link":onmywaymusic
        }
      ]
    },
    {
      "id":"edm",
      "name":"EDM",
      "image":edm,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    },
    {
      "id":"chill",
      "name":"Chill",
      "image":chill,
      "list":[
        {
          "id":"1",
          "song":"Nàng thơ",
          "artist":"Hoàng Dũng",
          "picture":nangtho,
          "link":nangthomusic
        },
        {
          "id":"2",
          "song":"OK",
          "artist":"Binz",
          "picture":ok,
          "link":okmusic
        }
      ]
    },
    {
      "id":"playgame",
      "name":"Play game",
      "image":playgame,
      "list":[
        {
          "id":"1",
          "song":"On My way",
          "artist":"Alan Walker",
          "picture":onmyway,
          "link":onmywaymusic
        },
        {
          "id":"2",
          "song":"OK",
          "artist":"Binz",
          "picture":ok,
          "link":okmusic
        }
      ]
    },
    {
      "id":"motivation",
      "name":"Motivation",
      "image":motivation,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    },
    {
      "id":"vietnamese",
      "name":"Vietnamese Music",
      "image":vietnamese,
      "list":[
        { 
          "id":"1",
          "song":"Exe'hate me",
          "artist":"Amee, Bray",
          "picture": exehateme,
          "link":exehatememusic
        },
        { 
          "id":"2",
          "song":"Exe'hate me",
          "artist":"Amee, Bray",
          "picture": exehateme,
          "link":exehatememusic
        }
      ]
    },
    {
      "id":"uk",
      "name":"Us/Uk",
      "image":usuk,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    },
    {
      "id":"kpop",
      "name":"K-Pop Badass",
      "image":kpop,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    },
    {
      "id":"randb",
      "name":"R & B",
      "image":randb,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    },
    {
      "id":"romantic",
      "name":"Romantic",
      "image":romantic,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    },
    {
      "id":"rapparty",
      "name":"Rap Party",
      "image":rapparty,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    },
    {
      "id":"relax",
      "name":"ReLax",
      "image":relax,
      "list":[
        {
          "id":"1",
          "song":"Summer",
          "artist":"Kevin Haris",
          "picture":summer,
          "link":summermusic
        },
        {
          "id":"2",
          "song":"I Took A Pill In Ibiza",
          "artist":"Mike Posner",
          "picture":itook,
          "link":itookmusic
        }
      ]
    }
  ]
export default data;

  
