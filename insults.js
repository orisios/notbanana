var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "мартышка", "дубина", "крыса"];
// выбор случайной части тела из массива randomBodyParts
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// выбор случайного прилагательного
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// выбор случайного слова
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var insults = ["У тебя ", randomBodyPart, " как ", randomAdjective, " ", randomWord];
insults.join("")