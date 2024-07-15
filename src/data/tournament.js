import spore from "../assets/spore.svg"; 
import hearthstone from "../assets/hearthstone.svg"; 
import lol from "../assets/tournaments/block1.svg" 
import dota from "../assets/tournaments/block2.svg" 
import lollogo from "../assets/tournaments/lollogo.svg" 
import dotalogo from "../assets/tournaments/dotalogo.svg" 
import hearthstonelogo from "../assets/tournaments/hearthstonelogo.svg" 
import osulogo from "../assets/tournaments/osulogo.svg" 
import cs from "../assets/tournaments/block5.svg"
import animegirl from "../assets/tournaments/block6.svg" 
import clashroyal from "../assets/tournaments/block7.svg"
import warface from "../assets/tournaments/block8.svg"
import pubg from "../assets/tournaments/block9.svg"
import superhot from "../assets/tournaments/block10.svg"
import darkdota from "../assets/tournaments/block11.svg"

export const TournamentCardsData = [ 
    { 
       id: "lol", 
       image: lol, 
       date: "10 августа", 
       text: "внутривузовский турнир по league of legends", 
       logo: lollogo 
        
    }, 
     { 
        id: "dota", 
        image: dota, 
        date: "12 сентября", 
        text: "межвузовский турнир по dota 2", 
        logo: dotalogo 
         
     }, 
      { 
         id: "hearthstone", 
         image: hearthstone, 
         date: "22 октября", 
         text: "всероссийский турнир по hearthstone", 
         logo: hearthstonelogo 
        
      }, 
       { 
          id: "spore", 
          image: spore, 
          date: "6 ноября", 
          text: "внутривузовский турнир по spore", 
          logo: osulogo 
        
       }, 
]

export const TournamentCardsCurrent = [ 
   { 
      id: "cs", 
      image: cs, 
      date: "прямой эфир", 
      text: "внутривузовский турнир по CS:GO", 
      logo: lollogo 
       
   }, 
    { 
       id: "osu", 
       image: animegirl, 
       date: "в 18:00", 
       text: "международный турнир по OSU!", 
       logo: dotalogo 
        
    }, 
     { 
        id: "clashtoyal", 
        image: clashroyal, 
        date: "в 20:00", 
        text: "внутривузовский турнир по clash royal", 
        logo: lollogo
       
     }, 
]

export const TournamentCardsPast = [ 
   { 
      id: "warface", 
      image: warface,
      text: "кубок ректора по warface", 
      logo: lollogo 
       
   }, 
    { 
       id: "pubg", 
       image: pubg,
       text: "межвузовский турнир по pubg", 
       logo: dotalogo 
        
    }, 
     { 
        id: "superhot", 
        image: superhot,
        text: "внутривузовский турнир по super hot", 
        logo: hearthstonelogo 
       
     }, 
      { 
         id: "darkdota", 
         image: darkdota,
         text: "международный турнир по dota 2", 
         logo: dotalogo 
       
      }, 
]