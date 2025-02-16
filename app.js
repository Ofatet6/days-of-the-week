let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
+"2-Salı" + yeniSatir
+"3-Çarşamba" + yeniSatir
+"4-Perşembe" + yeniSatir
+"5-Cuma" + yeniSatir
+"6-Cumartesi" + yeniSatir
+"7-Pazar"+yeniSatir
+"Lütfen bir gün seçiniz";

let deger = prompt(metin);
switch (deger) {
  case "1":
    console.log("Hergün en az 25 sayfa kitap oku");
    break;
  case "2":
    console.log("Hergün en az 10 ingilizce kelime öğren");
    break;
  case "3":
    console.log("Bugün bir evsizi doyur");
    break;
  case "4":
    console.log("Bugün bir film seç ve izle");
    break;
  case "5":
    console.log("Bugün yeni bir hobi edin");
    break;
  case "6":
    console.log("Bugün sosyalleş");
    break;
  case "7":
    console.log("Bugün kendini ödüllendir :) ");
    break;
    default:
        console.log ("Lütfen geçerli bir gün seçiniz!!")
}
