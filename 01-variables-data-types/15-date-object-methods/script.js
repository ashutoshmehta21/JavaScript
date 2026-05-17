let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();
x = d.getTime();
x = d.getFullYear();
x = d.getMonth();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getMilliseconds();
x = d.getSeconds();

x = `${d.getFullYear}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-Us').format(d);
x = Intl.DateTimeFormat('en-Gb').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleDateString('default', { month: 'short' });

x = d.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Los_angeles',
});
console.log(x);
