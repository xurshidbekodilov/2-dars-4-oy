//if1 Butun son berilgan. Son musbat bo'lsa 1 ga oshirilsin, aks holda o'gartirilmasin
/*
let num = +prompt('Son kiriting');
if(num>0){
    num++;
}
console.log(num);
*/


//if2 Butun son berilgan Son musbat bo'lsa 1 ga oshirilsin, aks holda 2 ga kamaytirilsin
/*
let num = +prompt('Son kiriting');
if(num>0){
    num++;
}
else{
    num-=2
}
console.log(num);
*/


//if3 Butun son berilgan Son musbat bo'lsa 1 ga oshirilsin, manfiy bo'lsa 2 ga kamaytiring, 0 ga teng bo'lsa 10 ni o'zlashtirsin
/*
let num = +prompt('Son kiriting');
if(num>0){
    num++;
}
else if(num<0){
    num-=2
}
else{
    num=10
}
console.log(num);
*/


//if4 Uchta butun son berilgan shu sonlardan nechtasi musbatligini aniqlang
/*
let num1 = +prompt('1-Sonni kiriting');
let num2 = +prompt('2-Sonni kiriting');
let num3 = +prompt('3-Sonni kiriting');
let res = 0;
if (num1>0){
    res++;
}
if (num2>0){
    res++;
}
if (num3>0){
    res++;
}
console.log(res);
*/


//if5 Uchta butun son berilgan shu sonlardan nechtasi musbatligini va nechtasi manfiyligini aniqlang
/*
let num1 = +prompt('1-Sonni kiriting');
let num2 = +prompt('2-Sonni kiriting');
let num3 = +prompt('3-Sonni kiriting');
let manfiy,musbat;
manfiy=musbat=0;
if (num1>0){
    musbat++;
}
else if(num1<0){
    manfiy++;
}
if (num2>0){
    musbat++;
}
else if(num2<0){
    manfiy++;
}
if (num3>0){
    musbat++;
}
else if(num3<0){
    manfiy++;
}
console.log(`Musbatlar soni ${musbat}`);
console.log(`Manfiylar soni ${manfiy}`);
*/


//if6 Ikkita butun son berilgan Shu sonlardan kattasini aniqlang
/*
let num1 = +prompt('Birinchi sonni kiriting');
let num2 = +prompt('Ikkinchi sonni kiriting');
let max;
if(num1>num2){
    max=num1;
}
else{
    max=num2;
}
console.log(max);
*/


//if7 Ikkita butun son berilgan Shu sonlardan kichigini aniqlang
/*
let num1 = +prompt('Birinchi sonni kiriting');
let num2 = +prompt('Ikkinchi sonni kiriting');
let min;
if(num1>num2){
    min=num2;
}
else{
    min=num1;
}
console.log(min);
*/


//if8 Ikkita butun son berilgan Shu sonlardan avval kattasini keyin kichigini ekranga chiqaring
/*
let num1 = +prompt('Birinchi sonni kiriting');
let num2 = +prompt('Ikkinchi sonni kiriting');
let max,min;
if(num1>num2){
    max=num1
    min=num2;
    console.log(max);
    console.log(min);
}
else if (num1<num2){
    max=num2
    min=num1;
    console.log(max);
    console.log(min);
}
else{
    console.log('ikki son teng');
}
*/


//if9 A va B haqiqiy sonlar berilgan Shu sonlarni shunday o'zgartiringki A son kichik B son katta bo'lsin
/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
let max,min;
if(A>B){
    max=A;
    min=B;
}
else{
    min=A;
    max=B;
}
A=min;
B=max;
console.log(`A ning qiymat: ${A}`);
console.log(`B ning qiymati: ${B}`);
*/


//if10 A va B butun sonlar berilgan Agar ular teng bo'lsa 0 ni o'zlashtirsin Agar teng bo'lmasa A va B yig'indini o'zlashtirsin
/*
let A = +prompt('A ni kiritng');
let B = +prompt('B ni kiriting');
let sum;
if(A!=B){
    A=A+B;
    B=A;
}
else{
    A=B=0
}
console.log(`A ning qiymat: ${A}`);
console.log(`B ning qiymati: ${B}`);
*/


//if11 A va B butun sonlar berilgan Agar ular teng bo'lsa 0 ni o'zlashtirsin Agar teng bo'lmasa A va B eng katta qiymatni o'zlashtirsin
/*
let A = +prompt('A ni kiriting');
let B = +prompt('Bni kiriting');
let max;
if(A!=B){
    if(A>B){
        max=A;
    }
    else{
        max=B;
    }
    A=B=max;
}
else{
    A=B=0;
}
console.log(`A ning qiymat: ${A}`);
console.log(`B ning qiymati: ${B}`);
*/


//if12 Uchta son berilgan Shu sonlarni kichigini aniqlang
/*
let n1 = +prompt('Birinchi sonni kiriting');
let n2 = +prompt('Ikkinchi sonni kiriting');
let n3 = +prompt('Uchinchi sonni kiriting');
let min;
if(n1>n2){
    if(n2>n3){
        min=n3;
    }
    else{
        min=n2;
    }
}
else{
    if(n1>n3){
        min=n3;
    }
    else{
        min=n1;
    }
}
console.log(`Eng Kichik Qiymat: ${min}`);
*/


//if13 Uchta son berilgan Shu sonlarni o'rtachasini aniqlang
/*
let a = +prompt('Birinchi sonni kiriting');
let b = +prompt('Ikkinchi sonni kiriting');
let c = +prompt('Uchinchi sonni kiriting');
let middle;
if(a>b){
    if(b>c){
        middle=b
    }
    else if(a>c){
       middle=c; 
    }
    else{
        middle=a;
    }
}
else{
    if(a>c){
        middle=a;
    }
    else if(b>c){
        middle=c;
    }
    else{
        middle=b;
    }
}
console.log(`O'rtacha Qiymat: ${middle}`);
*/


//if14 Uchta son berilgan Shu sonlarni avval kichigini keyin kattasini ekranga chiqaring
/*
let a = +prompt('Birinchi sonni kiriting');
let b = +prompt('Ikkinchi sonni kiriting');
let c = +prompt('Uchinchi sonni kiriting');
let min, max;
if(a>b){
    if(b>c){
        max=a;
        min=c;
    }
    else if(a>c){
        max=a;
        min=b;
    }
    else{
        max=c;
        min=b;
    }
}
else{
    if(a>c){
        max=b;
        min=c;
    }
    else if(b>c){
        max=b;
        min=a;
    }
    else{
        max=c;
        min=a;
    }
}
console.log(`Kichigi: ${min}`);
console.log(`Kattasi: ${max}`);
*/


//if15 Uchta son berilgan Shu sonlardan yig'indisi eng katta bo'ladigan 2 ta sonni toping
/*
let a = +prompt('Birinchi sonni kiriting');
let b = +prompt('Ikkinchi sonni kiriting');
let c = +prompt('Uchinchi sonni kiriting');
let middle,max;
if(a>b){
    if(b>c){
        middle=b;
        max=a;
    }
    else if(a>c){
       middle=c;
       max=a; 
    }
    else{
        middle=a;
        max=c;
    }
}
else{
    if(a>c){
        middle=a;
        max=b
    }
    else if(b>c){
        middle=c;
        max=b
    }
    else{
        middle=b;
        max=c;
    }
}
console.log(`${middle} va ${max}`);
*/



//Boolean1 A butun son berilgan Jumlani rostlikka tekshiring. "A soni musbat"
/*
let A = +prompt('Sonni kiriting');
if(A>0){
    console.log('True');
}
else{
    console.log('False');
}
*/


//Boolean2 A butun son berilgan Jumlani rostlikka tekshiring. "A soni toq"
/*
let A = +prompt('Sonni kiriting');
if(A%2==1){
    console.log('True');
}
else{
    console.log('False');
}
*/


//Boolean3 A butun son berilgan Jumlani rostlikka tekshiring. "A soni juft"
/*
let A = +prompt('Sonni kiriting');
if(A%2==0){
    console.log('True');
}
else{
    console.log('False');
}
*/


//Boolean4 Ikkita butun A va B sonlar berilgan Jumlani rostlikka tekshiring "A>2 va B<=3"
/*
let A = +prompt('Birinchi sonni kiriting');
let B = +prompt('Ikkinchi sonni kiritng');
if(A>2 && B<=3){
    console.log('True');
}
else{
    console.log('false');
}
*/


//Boolean5 Ikkita butun A va B sonlar berilgan Jumlani rostlikka tekshiring "A>=0 yoki b<-2"
/*
let A = +prompt('Birinchi sonni kiriting');
let B = +prompt('Ikkinchi sonni kiritng');
if(A>=0 || B<-2){
    console.log('True');
}
else{
    console.log('false');
}
*/


//Boolean6 Uchta A, B, C sonlar berilgan Jumlani rostlikka tekshiring "A<=B<=C"
/*
let A = +prompt('Birinchi sonni kiriting');
let B = +prompt('Ikkinchi sonni kiritng');
let C = +prompt('Uchinchi sonni kiriting');
if(A<=B && B<=C){
    console.log('True');
}
else{
    console.log('false');
}
*/


//Boolean7 Uchta A, B, C sonlar berilgan Jumlani rostlikka tekshiring "B soni A va C sonlari orasida yotadi"
/*
let A = +prompt('Birinchi sonni kiriting');
let B = +prompt('Ikkinchi sonni kiritng');
let C = +prompt('Uchinchi sonni kiriting');
if(A>B && B>C || A<B && B<C){
    console.log('True');
}
else{
    console.log('false');
}
*/


//Boolean8 Ikkita butun A va B sonlari berilgan Jumlani roslikka tekshiring "A va B sonlari toq"
/*
let A = +prompt('Birinchi sonni kiriting');
let B = +prompt('Ikkinchi sonni kiritng');
if(A%2==1 && B%2==1){
    console.log('True');
}
else{
    console.log('false');
}
*/


//Boolean9 Ikkita butun A va B sonlari berilgan Jumlani roslikka tekshiring "A va B sonlarini hech bo'lmaganda toq"
/*
let A = +prompt('Birinchi sonni kiriting');
let B = +prompt('Ikkinchi sonni kiritng');
if(A%2==1 || B%2==1){
    console.log('True');
}
else{
    console.log('false');
}
*/


//Boolean10 Ikkita butun A va B sonlari berilgan Jumlani roslikka tekshiring "A va B sonlarini faqat bittasi toq"
/*
let A = +prompt('Birinchi sonni kiriting');
let B = +prompt('Ikkinchi sonni kiritng');
if(A%2==1 && B%2==0 || A%2==0 && B%2==1){
    console.log('True');
}
else{
    console.log('false');
}
*/
