import { IMenu } from "../interfaces/menu"

export const menuEnglish: IMenu[] = [
  {
    name: 'Sport',
    blocked: false,
    word: [
      { id: 1, round: 0, nameWord: 'ball', information: 'round' },
      { id: 2, round: 0, nameWord: 'hockey', information: 'Coldly' },
      { id: 3, round: 0, nameWord: 'golf', information: 'Small ball' },
      { id: 4, round: 0, nameWord: 'football', information: 'The most popular sport' },
      { id: 5, round: 0, nameWord: 'basketball', information: 'Basket' },
    ]
  },
  {
    name: 'Astronomy',
    blocked: false,
    word: [
      { id: 1, round: 1, nameWord: 'sun', information: 'Hot' },
      { id: 2, round: 1, nameWord: 'saturn', information: 'Very big' },
      { id: 3, round: 1, nameWord: 'earth', information: 'People' },
      { id: 4, round: 1, nameWord: 'moon', information: 'Satellite' },
      { id: 5, round: 1, nameWord: 'venus', information: 'Sister of the Earth' }
    ]
  },
  {
    name: 'Chemistry',
    blocked: false,
    word: [
      { id: 1, round: 2, nameWord: 'gold', information: 'decorations' },
      { id: 2, round: 2, nameWord: 'uranus', information: 'Radiation' },
      { id: 3, round: 2, nameWord: 'lithium', information: 'Element to create a battery' },
      { id: 4, round: 2, nameWord: 'helium', information: 'Easy gas' },
      { id: 5, round: 2, nameWord: 'oxygen', information: 'People need it' }
    ]
  },
  {
    name: 'Geography',
    blocked: false,
    word: [
      { id: 1, round: 3, nameWord: 'ukraine', information: 'Saint Sophia Cathedral' },
      { id: 2, round: 3, nameWord: 'dubai', information: 'Burj Khalifa' },
      { id: 3, round: 3, nameWord: 'italy', information: 'Tower of Pisa' },
      { id: 4, round: 3, nameWord: 'usa', information: 'Benjamin Franklin' },
      { id: 5, round: 3, nameWord: 'germany', information: 'Burger' }
    ]
  },
  {
    name: 'History',
    blocked: true,
    word: [
      { id: 1, round: 4, nameWord: 'history', information: 'Її всі люблять' },
      { id: 2, round: 4, nameWord: 'saturn', information: 'Very big' },
      { id: 3, round: 4, nameWord: 'earth', information: 'People' },
      { id: 4, round: 4, nameWord: 'moon', information: 'Satellite' },
      { id: 5, round: 4, nameWord: 'moon', information: 'Satellite' }
    ]
  },
  {
    name: 'Animals',
    blocked: false,
    word: [
      { id: 1, round: 5, nameWord: 'cat', information: 'Fluffy' },
      { id: 2, round: 5, nameWord: 'dog', information: 'Friend of man' },
      { id: 3, round: 5, nameWord: 'parrot', information: 'Can speak' },
      { id: 4, round: 5, nameWord: 'cow', information: 'Milk' },
      { id: 5, round: 5, nameWord: 'horse', information: 'Unit of power' }
    ]
  }
]
export const menuUkrainian = [
  {
    name: 'Спорт',
    blocked: false,
    word: [
      { id: 1, round: 0, nameWord: 'мяч', information: 'Круглий' },
      { id: 2, round: 0, nameWord: 'хокей', information: 'Холодно' },
      { id: 3, round: 0, nameWord: 'гольф', information: 'Маленький мяч' },
      { id: 4, round: 0, nameWord: 'футбол', information: 'Найбільш популярний спорт' },
      { id: 5, round: 0, nameWord: 'баскетбол', information: 'Кошик' },
    ]
  },
  {
    name: 'Астрономія',
    blocked: false,
    word: [
      { id: 1, round: 1, nameWord: 'сонце', information: 'Гаряче' },
      { id: 2, round: 1, nameWord: 'сатурн', information: 'Дуже велика' },
      { id: 3, round: 1, nameWord: 'земля', information: 'Люди' },
      { id: 4, round: 1, nameWord: 'місяць', information: 'Супутник' },
      { id: 5, round: 1, nameWord: 'венера', information: 'Сестра Землі' }
    ]
  },
  {
    name: 'Хімія',
    blocked: false,
    word: [
      { id: 1, round: 2, nameWord: 'золото', information: 'Прикраса' },
      { id: 2, round: 2, nameWord: 'уран', information: 'Радіація' },
      { id: 3, round: 2, nameWord: 'літій', information: 'Елемент для створення акумулятора' },
      { id: 4, round: 2, nameWord: 'гелій', information: 'Легкий газ' },
      { id: 5, round: 2, nameWord: 'кисень', information: 'Людям потрібний' }
    ]
  },
  {
    name: 'Географія',
    blocked: false,
    word: [
      { id: 1, round: 3, nameWord: 'україна', information: 'Софійський собор' },
      { id: 2, round: 3, nameWord: 'дубаї', information: 'Бурдж Халіфа' },
      { id: 3, round: 3, nameWord: 'італія', information: 'Пізанська вежа' },
      { id: 4, round: 3, nameWord: 'сша', information: 'Бенджамін Франклін' },
      { id: 5, round: 3, nameWord: 'німеччина', information: 'Бургер' }
    ]
  },
  {
    name: 'Історія',
    blocked: true,
    word: [
      { id: 1, round: 4, nameWord: 'history', information: 'Її всі люблять' },
      { id: 2, round: 4, nameWord: 'saturn', information: 'Very big' },
      { id: 3, round: 4, nameWord: 'earth', information: 'People' },
      { id: 4, round: 4, nameWord: 'moon', information: 'Satellite' },
      { id: 5, round: 4, nameWord: 'moon', information: 'Satellite' }
    ]
  },
  {
    name: 'Тварини',
    blocked: false,
    word: [
      { id: 1, round: 5, nameWord: 'кіт', information: 'Пухнастий' },
      { id: 2, round: 5, nameWord: 'собака', information: 'Друг людини' },
      { id: 3, round: 5, nameWord: 'попугай', information: 'Може говорити' },
      { id: 4, round: 5, nameWord: 'корова', information: 'Молоко' },
      { id: 5, round: 5, nameWord: 'кінь', information: 'Одиниця потужності :)' }
    ]
  }
]
export const menuRussian = [
  {
    name: 'Спорт',
    blocked: false,
    word: [
      { id: 1, round: 0, nameWord: 'мяч', information: 'Круглый' },
      { id: 2, round: 0, nameWord: 'хокей', information: 'Холодно' },
      { id: 3, round: 0, nameWord: 'гольф', information: 'Маленький мяч' },
      { id: 4, round: 0, nameWord: 'футбол', information: 'Наиболее популярный спорт' },
      { id: 5, round: 0, nameWord: 'баскетбол', information: 'Корзина' },
    ]
  },
  {
    name: 'Астрономия',
    blocked: false,
    word: [
      { id: 1, round: 1, nameWord: 'солнце', information: 'Горячее' },
      { id: 2, round: 1, nameWord: 'сатурн', information: 'Очень большая' },
      { id: 3, round: 1, nameWord: 'земля', information: 'Люди' },
      { id: 4, round: 1, nameWord: 'луна', information: 'Спутник' },
      { id: 5, round: 1, nameWord: 'венера', information: 'Сестра Земли' }
    ]
  },
  {
    name: 'Химия',
    blocked: false,
    word: [
      { id: 1, round: 2, nameWord: 'золото', information: 'Украшение' },
      { id: 2, round: 2, nameWord: 'уран', information: 'Радиация' },
      { id: 3, round: 2, nameWord: 'літій', information: 'Элемент для создания аккумулятора' },
      { id: 4, round: 2, nameWord: 'гелій', information: 'Легкий газ' },
      { id: 5, round: 2, nameWord: 'кисень', information: 'Людям нужен' }
    ]
  },
  {
    name: 'География',
    blocked: false,
    word: [
      { id: 1, round: 3, nameWord: 'украина', information: 'Софийский собор' },
      { id: 2, round: 3, nameWord: 'дубаи', information: 'Бурдж Халифа' },
      { id: 3, round: 3, nameWord: 'италия', information: 'Пизанская башня' },
      { id: 4, round: 3, nameWord: 'сша', information: 'Бенджамин Франклин' },
      { id: 5, round: 3, nameWord: 'германия', information: 'Бургер' }
    ]
  },
  {
    name: 'История',
    blocked: true,
    word: [
      { id: 1, round: 4, nameWord: 'history', information: 'Її всі люблять' },
      { id: 2, round: 4, nameWord: 'saturn', information: 'Very big' },
      { id: 3, round: 4, nameWord: 'earth', information: 'People' },
      { id: 4, round: 4, nameWord: 'moon', information: 'Satellite' },
      { id: 5, round: 4, nameWord: 'moon', information: 'Satellite' }
    ]
  },
  {
    name: 'Животные',
    blocked: false,
    word: [
      { id: 1, round: 5, nameWord: 'кjт', information: 'Пушистый' },
      { id: 2, round: 5, nameWord: 'собака', information: 'Друг человека' },
      { id: 3, round: 5, nameWord: 'попугай', information: 'Может говорить' },
      { id: 4, round: 5, nameWord: 'корова', information: 'Молоко' },
      { id: 5, round: 5, nameWord: 'конь', information: 'Единица мощности :)' }
    ]
  }
]
