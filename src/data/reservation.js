const reservationList = {
  PC: [
    {
      name: "PC-12",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "PC-12",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "PC-12",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "PC-12",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "PC-12",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "PC-12",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
  ],
  Console: [
    {
      name: "PlayStation 4",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "PlayStation 5",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
  ],
  Billiards: [
    {
      name: "Американский",
      time: "14:30-18:30",
    },
    {
      name: "Русский",
      time: "14:30-18:30",
    },
  ],
  VR: [
    {
      name: "VR-1",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "VR-1",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "VR-1",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "VR-1",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "VR-1",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
    {
      name: "VR-1",
      time: "14:30-18:30",
      games: "Dota2, CS:GO, LOL, Minecraft",
    },
  ],
  VRGroup: [
    { value: "10:00", label: "11:00" },
    { value: "11:00", label: "12:00" },
    { value: "12:00", label: "13:00" },
    { value: "13:00", label: "14:00" },
    { value: "14:00", label: "15:00" },
    { value: "15:00", label: "16:00" },
    { value: "16:00", label: "17:00" },
    { value: "17:00", label: "18:00" },
    { value: "18:00", label: "19:00" },
    { value: "19:00", label: "20:00" },
  ],
};

export const startHour = [
  { value: 9, label: "9ч" },
  { value: 10, label: "10ч" },
  { value: 11, label: "11ч" },
  { value: 12, label: "12ч" },
  { value: 13, label: "13ч" },
  { value: 14, label: "14ч" },
  { value: 15, label: "15ч" },
  { value: 16, label: "16ч" },
  { value: 17, label: "17ч" },
  { value: 18, label: "18ч" },
  { value: 19, label: "19ч" },
];
export const startMin = [
  { value: 0, label: "00мин" },
  { value: 10, label: "10мин" },
  { value: 20, label: "20мин" },
  { value: 30, label: "30мин" },
  { value: 40, label: "40мин" },
  { value: 50, label: "50мин" },
];
export const duration = [
  { value: 30, label: "30мин" },
  { value: 40, label: "40мин" },
  { value: 50, label: "50мин" },
  { value: 60, label: "1ч" },
  { value: 70, label: "1ч 10мин" },
  { value: 80, label: "1ч 20мин" },
  { value: 90, label: "1ч 30мин" },
  { value: 100, label: "1ч 40мин" },
  { value: 110, label: "1ч 50мин" },
  { value: 120, label: "2ч" },
];

import pcIcon from "../assets/booking/pcIcon.svg";
import consoleIcon from "../assets/booking/consoleIcon.svg";
import billiardsIcon from "../assets/booking/billiardsIcon.svg";
import vrIcon from "../assets/booking/vrIcon.svg";
import groupVrIcon from "../assets/booking/groupVrIcon.svg";

export const categories = [
  {
    value: "PC",
    title: "Компьютер",
    img: pcIcon,
  },
  {
    value: "Console",
    title: "Консоль",
    img: consoleIcon,
  },
  {
    value: "Billiards",
    title: "Бильярд",
    img: billiardsIcon,
  },
  {
    value: "VR",
    title: "Одиночный VR",
    img: vrIcon,
  },
  {
    value: "group_VR",
    title: "Групповой VR",
    img: groupVrIcon,
  },
];

export default reservationList;
