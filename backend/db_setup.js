db = connect('localhost:27017/lectures');
if (db.registration) {
  db.lectures.drop();
}
if (db.lectures) {
  db.lectures.drop();
}
db.lectures.insert({
  name: 'ドイツ語',
  credit: 2,
  teacher: '佐々木',
  day: 1,
  period: 1,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: 'フランス語',
  credit: 2,
  teacher: '北',
  day: 1,
  period: 1,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: 'スペイン語',
  credit: 2,
  teacher: '眞家',
  day: 1,
  period: 1,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '中国語',
  credit: 2,
  teacher: '高',
  day: 1,
  period: 1,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '韓国語',
  credit: 2,
  teacher: 'チェ',
  day: 1,
  period: 1,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '現代の社会Ⅲ',
  credit: 2,
  teacher: '谷田部',
  day: 1,
  period: 2,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '現代の社会Ⅳ',
  credit: 2,
  teacher: '箱山',
  day: 1,
  period: 2,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '人間と世界Ⅲ',
  credit: 2,
  teacher: '田村',
  day: 1,
  period: 2,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '現代の社会Ⅳ',
  credit: 2,
  teacher: '加藤',
  day: 1,
  period: 2,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '歴史と文化Ⅱ',
  credit: 2,
  teacher: '並木',
  day: 1,
  period: 2,
  major: '共通',
  year: 5,
});

db.lectures.insert({
  name: '応用数学Ⅱ',
  credit: 2,
  teacher: '元結',
  day: 2,
  period: 3,
  major: 'I',
  year: 5,
});

db.lectures.insert({
  name: '数値解析',
  credit: 2,
  teacher: '弘畑',
  day: 3,
  period: 1,
  major: 'I',
  year: 5,
});

db.lectures.insert({
  name: 'コンピュータグラフィックス',
  credit: 2,
  teacher: '滝沢',
  day: 4,
  period: 5,
  major: 'I',
  year: 5,
});

console.log(db.lectures.find());
