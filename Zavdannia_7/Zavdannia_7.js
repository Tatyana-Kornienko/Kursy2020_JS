var name = prompt("Назвіть своє ім'я");
var city = prompt("Назвіть місто, в якому ви проживаєте");
var age = Number(prompt("Вкажіть свій вік"));
if (!name || !city || !age || typeof name !== 'string' || typeof city !== 'string' || typeof age !== 'number')
    {alert ("Перевірте правильність введених даних");}
else if (age >= 21 && age < 45) {alert (`Ласкаво просимо в клуб в місті ${city}, танці, коктейлі до ранку`);}
else if (age < 18) {alert (`Управління поліції в ${city}. Особа до 18 років намагалася потрапити в заклад`);}
else if (age >= 18 && age < 21) {alert (`Недостатній вік для входу в клуб`);}
else if (age >= 45) {alert (`Ви застарі для цього клубу`);}
alert (`Дякуємо, Ваші дані перевірено`);

