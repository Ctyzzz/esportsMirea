import profile from "./assets/personalAccount/navbar/profile.svg";
import profile_active from "./assets/personalAccount/navbar/profile-active.svg";
import achievements from "./assets/personalAccount/navbar/achievements.svg";
import achievements_active from "./assets/personalAccount/navbar/achievements-active.svg";
import teams from "./assets/personalAccount/navbar/teams.svg";
import teams_active from "./assets/personalAccount/navbar/teams-active.svg";
import friends from "./assets/personalAccount/navbar/friends.svg";
import friends_active from "./assets/personalAccount/navbar/friends-active.svg";
import settings from "./assets/personalAccount/navbar/settings.svg";

import mirea_account from "./assets/personalAccount/settings/integrations/mirea.svg";
import vk_account from "./assets/personalAccount/settings/integrations/vk.svg";
import discord_account from "./assets/personalAccount/settings/integrations/discord.svg";
import steam_account from "./assets/personalAccount/settings/integrations/steam.svg";
import telegram_account from "./assets/personalAccount/settings/integrations/telegram.svg";

import discord from "./assets/footer/discord.svg";
import vk from "./assets/footer/vk.svg";
import tg from "./assets/footer/tg.svg";
import twitch from "./assets/footer/twitch.svg";
import computer from "./assets/zones/computer.png";
import chill from "./assets/zones/chill.png";
import vr from "./assets/zones/vr.png";
import craft from "./assets/zones/craft.png";
import studio from "./assets/zones/studio.png";
import games from "./assets/zones/games.png";

import design from "./assets/services/img/gridservices/design.svg";
import craftskill from "./assets/services/img/gridservices/craftskill.svg";
import videoproduction from "./assets/services/img/gridservices/videoproduction.svg";
import photoproduction from "./assets/services/img/gridservices/photoproduction.svg";
import streams from "./assets/services/img/gridservices/streams.svg";
import programming from "./assets/services/img/gridservices/programming.svg";

export const accountlinks = [
  {
    path: "profile",
    icon: profile,
    iconActive: profile_active,
    title: "Профиль",
  },
  // {
  //   path: "achievements" ,
  //   icon: achievements,
  //   iconActive: achievements_active,
  //   title: 'Достижения'
  // },
  // {
  //   path: "teams" ,
  //   icon: teams,
  //   iconActive: teams_active,
  //   title: 'Команды'
  // },
  // {
  //   path: "friends" ,
  //   icon: friends,
  //   iconActive: friends_active,
  //   title: 'Друзья'
  // },
  {
    path: "settings",
    icon: settings,
    iconActive: settings,
    title: "Настройки",
  },
];

export const settingslinks = [
  {
    path: "account",
    title: "Аккаунт",
  },
  // {
  //   path: "security",
  //   title: "Безопасность",
  // },
  // {
  //   path: "notifications" ,
  //   title: 'Уведомления'
  // },
  {
    path: "integrations",
    title: "Интеграции",
  },
];

export const integrationcards = [
  {
    icon: mirea_account,
    title: "ЛКС РТУ МИРЭА",
    status: true,
  },
  // {
  //     icon: vk_account,
  //     title: 'ВКОНТАКТЕ',
  //     account: 'ezepchuk.k.i@edu.mirea.ru',
  //     status: true
  // },
  // {
  //     icon: discord_account,
  //     title: 'DISCORD',
  //     account: 'ezepchuk.k.i@edu.mirea.ru',
  //     status: true
  // },
  // {
  //     icon: steam_account,
  //     title: 'STEAM',
  //     account: 'ezepchuk.k.i@edu.mirea.ru',
  //     status: false
  // },
  // {
  //     icon: telegram_account,
  //     title: 'TELEGRAM',
  //     account: 'ezepchuk.k.i@edu.mirea.ru',
  //     status: true
  // },
];

export const friendslinks = [
  {
    path: "friends",
    title: "Друзья",
  },
  {
    path: "online",
    title: "Онлайн",
  },
  {
    path: "requests",
    title: "Заявки в друзья",
  },
];

export const notifications = [
  {
    id: "news",
    name: "Уведомлять меня о новостях",
  },
  {
    id: "response",
    name: "Уведомлять меня, когда кто-то ответил на мой комментарий",
  },
  {
    id: "noted",
    name: "Уведомлять меня, когда кто-то отметил меня в комментариях",
  },
  {
    id: "mail",
    name: "Уведомлять меня о бронировании на почту",
  },
  {
    id: "sms",
    name: "Уведомлять меня о бронировании в SMS",
  },
  {
    id: "tournaments",
    name: "Уведомлять меня о начале турнира",
  },
];

export const accountInputs = [
  {
    label: "Никнейм",
    name: "nickname",
    value: "esebchugg",
  },
  {
    label: "Имя",
    name: "name",
    value: "Кирилл",
  },
  {
    label: "Email",
    name: "email",
    value: "ezepchukk@mail.ru",
  },
  {
    label: "Фамилия",
    name: "surname",
    value: "Езепчук",
  },
  {
    label: "Номер телефона",
    name: "phone",
    value: "89856304199",
  },
  {
    label: "Отчество(при наличии)",
    name: "fathername",
    value: "Игоревич",
  },
];

export const passwordInputs = [
  {
    label: "Текущий пароль",
    name: "password",
  },
  {
    label: "Новый пароль",
    name: "new_password",
  },
  {
    label: "Повторите новый пароль",
    name: "new_password2",
  },
];

import newsIcon from "./assets/header/newsIcon.svg";
import tournamentsIcon from "./assets/header/tournamentsIcon.svg";
import bookingIcon from "./assets/header/bookingIcon.svg";
import servicesIcon from "./assets/header/servicesIcon.svg"

export const headerLinks = [
  {
    title: "НОВОСТИ",
    to: "/news",
    icon: newsIcon,
  },
  {
    title: "ТУРНИРЫ",
    to: "/tournament",
    icon: tournamentsIcon,
  },
  {
    title: "БРОНИРОВАНИЕ",
    to: "/booking",
    icon: bookingIcon,
  },
  {
    title: "УСЛУГИ",
    to: "/services",
    icon: servicesIcon,
  }
];

export const footerLink = [
  // {
  //   id: 1,
  //   title: "Сборные",
  //   href: "indeveloping",
  // },
  // {
  //   id: 2,
  //   title: "Магазин",
  //   href: "indeveloping",
  // },
  // {
  //   id: 3,
  //   title: "Услуги",
  //   href: "services",
  // },
  {
    id: 1,
    title: "Бронирование",
    href: "/booking",
  },
  {
    id: 2,
    title: "Турниры",
    href: "/tournament",
  },
  // {
  //   id: 6,
  //   title: "Стафф",
  //   href: "indeveloping",
  // },
  // {
  //   id: 7,
  //   title: "Организация",
  //   href: "indeveloping",
  // },
  // {
  //   id: 8,
  //   title: "Контакты",
  //   href: "indeveloping",
  // },
  // {
  //   id: 9,
  //   title: "Брендинг",
  //   href: "indeveloping",
  // },
  // {
  //   id: 10,
  //   title: "Условия",
  //   href: "indeveloping",
  // },
  // {
  //   id: 11,
  //   title: "Конфиденциальность",
  //   href: "indeveloping",
  // },
  {
    id: 3,
    title: "Новости",
    href: "/news",
  },
  // {
  //   id: 4,
  //   title: "Условия обслуживания",
  //   href: "",
  // },
];

export const cyberZones = [
  {
    id: computer,
    imageUrl: computer,
    title: "компьютерная зона",
    description:
      "30 компьютеров:\n• 780 gtx\n• intel pentium 1 hz\n• монитор 15 hz Benq\n• Мышь есть\n• Клавиатура hp",
  },
  {
    id: chill,
    imageUrl: chill,
    title: "chill зона",
    description:
      "• 50 сидячих мест\n• Огромный экран\n• Аркадные автоматы\n• Приятная музыка\n• Столы и розетки",
  },
  {
    id: vr,
    imageUrl: vr,
    title: "vr зона",
    description:
      "• 2x BlackMagic 4K\n• Много света\n• Кран для камеры\n• Огромные экраны\n• Крутые микрофоны BOYA",
  },
  {
    id: craft,
    imageUrl: craft,
    title: "крафт зона",
    description:
      "• Моделирование атрибутов\n• 3D печать\n• Работа с Eva-foam\n• Работа по дереву\n• Постобработка атрибутик",
  },
  {
    id: studio,
    imageUrl: studio,
    title: "своя студия",
    description:
      "• 2x BlackMagic 4K\n• Много света\n• Кран для камеры\n• Огромные экраны\n• Крутые микрофоны BOYA",
  },
  {
    id: games,
    imageUrl: games,
    title: "Настольные игры",
    description: "Переходи и узнай",
  },
];

import pcIcon from "./assets/booking/pcIcon.svg";
import consoleIcon from "./assets/booking/consoleIcon.svg";
import billiardsIcon from "./assets/booking/billiardsIcon.svg";
import vrIcon from "./assets/booking/vrIcon.svg";
import groupVrIcon from "./assets/booking/groupVrIcon.svg";

export const navbarlinks = [
  {
    path: "PC",
    title: "Компьютер",
    img: pcIcon,
  },
  {
    path: "PS",
    title: "Консоль",
    img: consoleIcon,
  },
  {
    path: "billiards",
    title: "Бильярд",
    img: billiardsIcon,
  },
  {
    path: "VRSingle",
    title: "Одиночный VR",
    img: vrIcon,
  },
  {
    path: "VRGroup",
    title: "Групповой VR",
    img: groupVrIcon,
  },
];

export const skill = [
  {
    id: design,
    imageUrl: design,
    title: "Дизайн",
    description: "Дизайн",
  },
  {
    id: craftskill,
    imageUrl: craftskill,
    title: "Крафт",
    description: "Крафт",
  },
  {
    id: videoproduction,
    imageUrl: videoproduction,
    title: "Видеопродакшн",
    description: "Видеопродакшн",
  },
  {
    id: streams,
    imageUrl: streams,
    title: "Трансляции",
    description: "Трансляции",
  },
  {
    id: photoproduction,
    imageUrl: photoproduction,
    title: "Фото",
    description: "Фото",
  },
  {
    id: programming,
    imageUrl: programming,
    title: "Программисты",
    description: "Программисты",
  },
];

import AboutPage from "./pages/About/AboutPage";
import Registration from "./components/Login/Registration/Registration";
import CreateProfile from "./components/Login/CreateProfile/CreateProfile";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import MainPage from "./pages/Main/MainPage";
import ProfilePage from "./pages/personalAccount/ProfilePage";
import SettingsPage from "./pages/personalAccount/SettingsPage";
import Tournament from "./components/Tournaments/Tournament";
import TournamentFinished from "./components/Tournaments/TournamentInfo/TournamentFinished";
import TournamentInfo from "./components/Tournaments/TournamentInfo/TournamentInfo";
import PassRecover from "./components/Login/PassRecover/PassRecover";
import Services from "./components/Services/Services";

import InDeveloping from "./components/InDeveloping/InDeveloping";
import LoginCallbackComponent from "./components/Login/LoginCallbackComponent";
import News from "./components/News/News";
import NewsAbout from "./components/News/NewsAbout/NewsAbout";


export const routes = [
  {
    path: "/",
    component: MainPage,
    isAuth: false,
  },
  {
    path: "/about",
    component: AboutPage,
    isAuth: false,
  },
  {
    path: "/registration",
    component: Registration,
    isAuth: true,
  },
  {
    path: "/registration/createProfile",
    component: CreateProfile,
    isAuth: true,
  },
  {
    path: "/booking",
    component: ReservationPage,
    isAuth: true,
  },
  {
    path: "/profile",
    component: ProfilePage,
    isAuth: true,
  },
  {
    path: "/settings",
    component: SettingsPage,
    isAuth: true,
  },
  {
    path: "login",
    component: LoginCallbackComponent,
    isAuth: false,
  },
  {
    path: "login/callback",
    component: LoginCallbackComponent,
    isAuth: false,
  },
  {
    path: "/tournament",
    component: Tournament,
    isAuth: false,
  },
  {
    path: "/tournament/tournamentfinished",
    component: TournamentFinished,
    isAuth: false,
  },
  {
    path: "/tournament/tournamentinfo",
    component: TournamentInfo,
    isAuth: false,
  },
  {
    path: "/passrecover",
    component: PassRecover,
    isAuth: false,
  },
  {
    path: "/services",
    component: Services,
    isAuth: false,
  },
  {
    path: "/indeveloping",
    component: InDeveloping,
    isAuth: false,
  },
  {
    path: "/news",
    component: News,
    isAuth: false,
  },
  {
    path: "/news/newsabout",
    component: NewsAbout,
    isAuth: false,
  },
];

import org1 from "./assets/about/org1.svg";
import org2 from "./assets/about/org2.svg";
import org3 from "./assets/about/org3.svg";
import org4 from "./assets/about/org4.svg";
import org5 from "./assets/about/org5.svg";
import org6 from "./assets/about/org6.svg";
import org7 from "./assets/about/org7.svg";
import org8 from "./assets/about/org8.svg";
import org9 from "./assets/about/org9.svg";
import org10 from "./assets/about/org10.svg";
import org11 from "./assets/about/org11.svg";

export const aboutDipartments = [
  {
    img: org1,
    title: "дизайн",
    description:
      "30 компьютеров:\n• 780 gtx\n• intel pentium 1 hz\n• монитор 15 hz Benq\n• Мышь есть\n• Клавиатура hp"
  },
  {
    img: org2,
    title: "крафт",
  },
  {
    img: org3,
    title: "видеопродакшн",
  },
  {
    img: org4,
    title: "трансляция",
  },
  {
    img: org5,
    title: "фото",
  },
  {
    img: org6,
    title: "программисты",
  },
  {
    img: org8,
    title: "судейство",
  },
  {
    img: org9,
    title: "smm",
  },
  {
    img: org10,
    title: "дискорд",
  },
  {
    img: org11,
    title: "косплей",
  },
];

import About_tg from "./assets/about/tg.svg";
import About_vk from "./assets/about/vk.svg";
import About_discord from "./assets/about/discord.svg";
import About_twitch from "./assets/about/twitch.svg";
import About_youtube from "./assets/about/youtube.svg";

export const socialsAbout = [
  {
    img: About_tg,
    followers: "1580+",
  },
  {
    img: About_youtube,
    followers: "540+",
  },
  {
    img: About_vk,
    followers: "7450+",
  },
  {
    img: About_twitch,
    followers: "1530+",
  },
  {
    img: About_discord,
    followers: "2800",
  },
];

import staff1 from "./assets/about/staff1.png";
import staff2 from "./assets/about/staff2.png";
import staff3 from "./assets/about/staff3.png";
import staff4 from "./assets/about/staff4.png";
import staff5 from "./assets/about/staff5.png";
import staff6 from "./assets/about/staff6.png";
import staff7 from "./assets/about/staff7.png";
import staff8 from "./assets/about/staff8.png";
import staff9 from "./assets/about/staff9.png";
import staff10 from "./assets/about/staff10.png";

export const staff = [
  {
    img: staff1,
    nick: "superbrodyaga",
    name: "Владислав Редин",
    job: "Глава Киберспортивного Центра",
  },
  {
    img: staff2,
    nick: "Ankodo",
    name: "Андрей Копырин",
    job: "Лидер Marketing & Programming",
  },
  {
    img: staff3,
    nick: "nefalemo",
    name: "Павел Ковалик",
    job: "Лидер SMM",
  },
  {
    img: staff4,
    nick: "rovnyasha",
    name: "Александр Ровнин",
    job: "Лидер VK и Telegram",
  },
  {
    img: staff5,
    nick: "SezSuna",
    name: "Анастасия Ловкова",
    job: "Лидер Twitch",
  },
  {
    img: staff6,
    nick: "alderand",
    name: "Максим Чмеренко",
    job: "Лидер Design",
  },
  {
    img: staff7,
    nick: "phantom_akk",
    name: "Надежда Лобачева",
    job: "Лидер YouTube",
  },
  {
    img: staff8,
    nick: "ximax",
    name: "Артём Мкртчян",
    job: "Лидер Craft",
  },
  {
    img: staff9,
    nick: "gentleman_cat",
    name: "Максим Борисов",
    job: "Лидер Photo",
  },
  {
    img: staff10,
    nick: "QW",
    name: "Егор Максимов",
    job: "Лидер Hobby Games",
  },
];
