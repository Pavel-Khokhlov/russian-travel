const logoRus = require("../images/logo_rus.png");
const logoEng = require("../images/logo_eng.png");
const coverImageOne = require('../images/cover_one.jpg');
const coverImageTwo = require('../images/cover_two.jpg');
const coverImageThree = require('../images/cover_three.jpg');
const coverImageFour = require('../images/cover_four.jpg');
const coverImageFive = require('../images/cover_five.jpg');

export const language = {
  ru: {
    logo: {
      link: logoRus,
      alt: `логотип россия`,
    },
    title: `Путешествия по России`,
    leadTitle: `Путешествия по России`,
    leadSubtitle: `Настоящая страна не в выпусках новостей,\u00A0а\u00A0здесь.`,
    leadCapture: `ваша полка - верхняя`,
    introTitle: `Чего мы там не\u00A0видели?`,
    introLists: ['Часовых поясов', 'Объектов природного наследия ЮНЕСКО', 'Объектов культурного наследия ЮНЕСКО', 'Природных заповедников', 'Аэропортов'],
    coverTitle: `До Байкала «на\u00A0собаках»`,
    coverSubtitle: `По мотивам учебной темы о\u00A0Транссибе и iframes — путешествие от\u00A0столицы\u00A0до Байкала на электричках.`,
    links: [`Карты`, `Погода`, `Расписание`, `Календарь`, `Путешествия`],
    copyRight: `© 2020 Павел Хохлов`,
  },
  en: {
    logo: {
      link: logoEng,
      alt: `logo russia`,
    },
    title: `Travel in Russia`,
    leadTitle: `Travel in<\/br>Russia`,
    leadSubtitle: `The real country is not in the news releases,\u00A0but\u00A0here.`,
    leadCapture: `your shelf - the upper one`,
    introTitle: `What didn't we see there?`,
    introLists: ['Time zones', 'UNESCO natural heritage sites', 'UNESCO heritage sites', 'Nature reserves', 'Airports'],
    coverTitle: `To Baikal "by\u00A0dogs"`,
    coverSubtitle: `Transib and iframes — voyage`,
    links: [`Maps`, `Weather`, `Schedule`, `Calendar`, `Trips`],
    copyRight: `© 2020 Pavel Khokhlov`,
  },
};

export const coverImage = [
  coverImageOne, coverImageTwo, coverImageThree, coverImageFour, coverImageFive
]
