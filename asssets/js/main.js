var names = [
    "Tariq", "Ali", "Rami", "Sara", "Huda", "Lina", "Ahmad", "Yara", "Mona", "Omar",
    "Noor", "Amira", "Fadi", "Hassan", "Aya", "Khalid", "Leila", "Samer", "Zain", "Nadine",
    "Ibrahim", "Hana", "Mahmoud", "Nour", "Rania", "Salim", "Rasha", "Adel", "Basma", "Waleed",
    "Yousef", "Mariam", "Samira", "Issa", "Farah", "Bilal", "Laila", "Jana", "Mustafa", "Naji",
    "Dina", "Hatem", "Maya", "Tamer", "Loubna", "Saif", "Fayez", "Salma", "Reem", "Zahra",
    "Yazan", "Nabil", "Ola", "Rita", "Jawad", "Shadi", "Kamil", "Nada", "Ibtisam", "Basel",
    "Ziad", "Manal", "Tala", "Anas", "Ghada", "Jamil", "Rabab", "Sami", "Rayan", "Fatima",
    "Walid", "Nourhan", "Karim", "Maysa", "Firas", "Amal", "Lamis", "Sahar", "Rafik", "Iman",
    "Mohammad", "Lamar", "Majed", "Tania", "Ayman", "Shereen", "Qasem", "Haifa", "Bassam", "Nada",
    "Alaa", "Marwa", "Sameh", "Noura", "Murad", "Afaf", "Nizar", "Rida", "Aziz", "Dalia"
    ];
var tableContent = '';

for (var number = 4; number < names.length; number++) {
    tableContent += `<tbody><tr><td>${names[number]}</td></tr></tbody>`;
}


document.querySelector("table").innerHTML += tableContent;
