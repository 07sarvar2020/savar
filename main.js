

let Name = prompt('ismngizni kiriting');
let year = +prompt('hozirgi yil')
let god  = +prompt("tug'ilgan yilingan yilingiz")
let car  = prompt('yoqtirgan moshina markangiz')

function  tanishuv(Name,year,god,car) {
   
    console.log(`Mani ismim ${Name}. hozir ${year} yil. Man ${god} tugilgan man. Man ${car} markasiga qiziqaman.`);
}
alert(tanishuv ( Name ,year ,god ,car ) )
 
