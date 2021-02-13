function utasok() {
    utasokszama = document.utazas.utasszam.value;
    uticel = document.utazas.cel.value;
    eszkoz = document.utazas.ido.value;

    if (uticel == "athen") {

        switch (eszkoz) {
            case "egyhet":
                osszeg = utasokszama * 45000;
                break;
            case "kethet":
                osszeg = utasokszama * 80000;
                break;
            case "busszal":
                osszeg = utasokszama * 35000;
                break;

        }
    } else {
        switch (eszkoz) {
            case "egyhet":
                osszeg = utasokszama * 63000;
                break;
            case "kethet":
                osszeg = utasokszama * 100000;
                break;
            case "busszal":
                osszeg = utasokszama * 95000;
                break;

        }
    }

    fizet = "Fizetendő " + osszeg + " forint";

    document.getElementById('fizetendo').innerHTML = fizet;

}