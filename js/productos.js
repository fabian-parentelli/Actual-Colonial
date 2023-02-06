const productos = [
    
    // ****************************************************** snack ****************************************************** //
    
    {id: 1, nombre: "Papa Tradicional 500gr", medida: 1, familia: "snacks", cantidad: 1, precio: 825.11, img: "photo/01papaTradicional550.png"},
    {id: 2, nombre: "Papa Americana 500gr", medida: 1, familia: "snacks", cantidad: 1, precio: 825.11, img: "photo/01papaAmericana550-120-60.png"},
    {id: 3, nombre: "Chizito 400gr", medida: 1, familia: "snacks", cantidad: 1, precio: 642.1, img: "photo/01chizo400-60.png"},
    {id: 4, nombre: "Bastonito 300gr", medida: 1, familia: "snacks", cantidad: 1, precio: 509.51, img: "photo/01bastonito300-55.png"},
    {id: 5, nombre: "Palito 800gr", medida: 1, familia: "snacks", cantidad: 1, precio: 1003.00, img: "photo/01palito800-120-65.png"},
    {id: 6, nombre: "Mani 500gr", medida: 1, familia: "snacks", cantidad: 1, precio: 709.84, img: "photo/01mani500-120-65.png"},
    {id: 7, nombre: "Papa Cheddra 350gr", medida: 1, familia: "snacks", cantidad: 1, precio: 737.22, img: "photo/01papaCheddar350-60.png"},

    // 120
    {id: 8, nombre: "Papa Tradicional 110gr", medida: 4, familia: "snacks", cantidad: 4, precio: 279.93, img: "photo/01papatradicional120-60-30.png"},
    {id: 9, nombre: "Papa Americana 110gr", medida: 4, familia: "snacks", cantidad: 4, precio: 279.93, img: "photo/01papaAmericana550-120-60.png"},
    {id: 10, nombre: "Palito 120gr", medida: 6, familia: "snacks", cantidad: 6, precio: 164.48, img: "photo/01palito800-120-65.png"},
    {id: 11, nombre: "Mani 120gr", medida: 6, familia: "snacks", cantidad: 6, precio: 208.59, img: "photo/01mani500-120-65.png"},

    // 60 
    {id: 12, nombre: "Papa Tradicional 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 168.37, img: "photo/01papatradicional120-60-30.png"},
    {id: 13, nombre: "Papa Americana 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 168.37, img: "photo/01papaAmericana550-120-60.png"},
    {id: 14, nombre: "Papa Sin Sal 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 141.60, img: "photo/01papaSinSal.png"},
    {id: 15, nombre: "Papa Pay 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 155.83, img: "photo/01papaPay.png"},
    {id: 16, nombre: "Papa Ketchup 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 185.48, img: "photo/01papaKetchup.png"},
    {id: 17, nombre: "Papa Cheddra 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 185.48, img: "photo/01papaCheddar350-60.png"},
    {id: 18, nombre: "Papa Jamon 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 185.48, img: "photo/01papaJamon.png"},
    {id: 19, nombre: "Chizito 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 141.12, img: "photo/01chizo400-60.png"},
    {id: 20, nombre: "Bastonito 55gr", medida: 6, familia: "snacks", cantidad: 6, precio: 129.55, img: "photo/01bastonito300-55.png"},
    // {id: 21, nombre: "Palito 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 0, img: "photo/01palito800-120-65.png"},
    // {id: 22, nombre: "Mani 60gr", medida: 6, familia: "snacks", cantidad: 6, precio: 0, img: "photo/01mani500-120-65.png"},
    {id: 23, nombre: "Super Cono 50gr", medida: 6, familia: "snacks", cantidad: 6, precio: 120.17, img: "photo/01superCono50.png"},
    
    // 30
    // {id: 24, nombre: "Papa Tradicional 30gr", medida: 6, familia: "snacks", cantidad: 6, precio: 71.95, img: "photo/01papatradicional120-60-30.png"},
    
    // Frontys
    {id: 25, nombre: "Mani Crocante Frontys", medida: 1, familia: "snacks", cantidad: 1, precio: 512.79, img: "photo/01maniCrocanteFrontys.png"},
    {id: 26, nombre: "Mani Salado Frontys", medida: 1, familia: "snacks", cantidad: 1, precio: 512.79, img: "photo/01maniSaladoFrontys.png"},
    {id: 27, nombre: "Mani Sin Sal Frontys", medida: 1, familia: "snacks", cantidad: 1, precio: 512.79, img: "photo/01maniSinSalFrontys.png"},
    {id: 28, nombre: "Mani Vaina Frontys", medida: 1, familia: "snacks", cantidad: 1, precio: 512.79, img: "photo/01maniVainaFrontys.png"},
    {id: 29, nombre: "Palito Frontys", medida: 1, familia: "snacks", cantidad: 1, precio: 541.79, img: "photo/01palitoFrontys.png"},
    
    // Otros
    {id: 30, nombre: "Nachos Macritas 90gr", medida: 1, familia: "snacks", cantidad: 1, precio: 197.29, img: "photo/01nachosmacritas.png"},
    {id: 31, nombre: "Papas Pay PeiPo 500gr", medida: 1, familia: "snacks", cantidad: 1, precio: 830.84, img: "photo/01payPeipo.png"},
    {id: 398, nombre: "Batata Quento 80gr", medida: 6, familia: "snacks", cantidad: 1, precio: 830.84, img: "photo/01batata.png"},

    // ****************************************************** almacen ****************************************************** //

    // Sales y Azucares
    {id: 32, nombre: "Edulcorante Sweet 200cc", medida: 1, familia: "almacen", cantidad: 1, precio: 263.88, img: "photo/02edulcoranteSweet.png"},
    {id: 33, nombre: "Edulcorante Clásico 200cc", medida: 1, familia: "almacen", cantidad: 1, precio: 239.88, img: "photo/02edulcoranteClasico.png"},
    {id: 34, nombre: "Azucar La Muñeca 1kg", medida: 10, familia: "almacen", cantidad: 1, precio: 223.02, img: "photo/02azucar.png"},

    {id: 35, nombre: "Sal Fina Marolio 500gr", medida: 12, familia: "almacen", cantidad: 1, precio: 81.50, img: "photo/02salFinaMarolio.png"},
    {id: 36, nombre: "Sal Fina El Dique 500gr", medida: 10, familia: "almacen", cantidad: 1, precio: 58.89, img: "photo/02salFinaElDique.png"},
    {id: 37, nombre: "Sal Fina Celusal 500gr", medida: 10, familia: "almacen", cantidad: 1, precio: 113.88, img: "photo/02salFinaCelusal.png"},
    {id: 38, nombre: "Sal Gruesa Celusal 500gr", medida: 10, familia: "almacen", cantidad: 1, precio: 104.86, img: "photo/02salGruesaCelusal.png"},
    {id: 39, nombre: "Sal Gruesa Marolio 500gr", medida: 10, familia: "almacen", cantidad: 1, precio: 130.68, img: "photo/02salGruesaMarolio.png"},
    
    // Caldo Knorr
    {id: 40, nombre: "Caldo Knoor Verdura", medida: 24, familia: "almacen", cantidad: 1, precio: 44.27, img: "photo/02caldoVerdura.png"},
    {id: 41, nombre: "Caldo Knoor Gallina", medida: 24, familia: "almacen", cantidad: 1, precio: 44.27, img: "photo/02caldoGallina.png"},
    {id: 42, nombre: "Caldo Knoor Carne", medida: 24, familia: "almacen", cantidad: 1, precio: 44.27, img: "photo/02caldoCarne.png"},

    // Pure Papas
    // {id: 43, nombre: "Pure Papas Marolio", medida: 15, familia: "almacen", cantidad: 1, precio: 0, img: "photo/02purePapasMarolio.png"},
    {id: 44, nombre: "Pure Papas Maggi", medida: 6, familia: "almacen", cantidad: 1, precio: 155.87, img: "photo/02pureMaggi.png"},

    // Grasa Vacuna y Porcina
    {id: 45, nombre: "Grasa Esani Vacuna", medida: 1, familia: "almacen", cantidad: 1, precio: 268.98, img: "photo/02grasaVacuna.png"},
    {id: 46, nombre: "Grasa Esani Porsina ", medida: 1, familia: "almacen", cantidad: 1, precio: 286.04, img: "photo/02grasaPorcina.png"},
    
    // Jugo Limon
    // {id: 47, nombre: "Jugo limon Marolio 250cc", medida: 1, familia: "almacen", cantidad: 1, precio: 94.68, img: "photo/02jugoLimon.png"},
    {id: 48, nombre: "Jugo limon Marolio 500cc", medida: 1, familia: "almacen", cantidad: 1, precio: 155.88, img: "photo/02jugoLimon.png"},
    
    // Esencia de  Vainilla
    {id: 49, nombre: "Esencia de Vainilla Tahití", medida: 1, familia: "almacen", cantidad: 1, precio: 94.68, img: "photo/02vainillaTahiti.png"},
    {id: 50, nombre: "Esencia de Vainilla Marolio", medida: 1, familia: "almacen", cantidad: 1, precio: 00, img: "photo/02vainillaMarolio.png"},
    
    // Aceite Pureza y Marolio.
    {id: 51, nombre: "Aceite Pureza 900cc", medida: 6, familia: "almacen", cantidad: 1, precio: 515.88, img: "photo/02aceitePureza.png"},
    {id: 52, nombre: "Aceite Pureza 1.5ltr", medida: 6, familia: "almacen", cantidad: 1, precio: 875.88, img: "photo/02aceitePureza.png"},
    {id: 53, nombre: "Aceite Marolio 900cc", medida: 6, familia: "almacen", cantidad: 1, precio: 467.88, img: "photo/02aceiteMarolio.png"},
    {id: 54, nombre: "Aceite Marolio 1.5ltr", medida: 6, familia: "almacen", cantidad: 1, precio: 779.88, img: "photo/02aceiteMarolio.png"},
    {id: 55, nombre: "Aceite Cañuelas 900cc", medida: 6, familia: "almacen", cantidad: 1, precio: 503.87, img: "photo/02aceiteCanuelas.png"},

    // Mayonesa Hellmans
    {id: 56, nombre: "Mayonesa Hellmans 118gr", medida: 20, familia: "almacen", cantidad: 1, precio: 119.88, img: "photo/02mayoHell.png"},
    {id: 57, nombre: "Mayonesa Hellmans 237gr", medida: 1, familia: "almacen", cantidad: 1, precio: 231.87, img: "photo/02mayoHell.png"},
    {id: 58, nombre: "Mayonesa Hellmans 1Kg", medida: 1, familia: "almacen", cantidad: 1, precio: 700.66, img: "photo/02mayoHell.png"},
    {id: 59, nombre: "Mayonesa Hellmans 2.9Kg", medida: 1, familia: "almacen", cantidad: 1, precio: 2021, img: "photo/02mayoHell.png"},
    // Natura
    {id: 60, nombre: "Mayonesa Natura 125gr", medida: 20, familia: "almacen", cantidad: 1, precio: 145.06, img: "photo/02mayoNatura.png"},
    {id: 61, nombre: "Mayonesa Natura 250gr", medida: 1, familia: "almacen", cantidad: 1, precio: 275.74, img: "photo/02mayoNatura.png"},
    {id: 62, nombre: "Mayonesa Natura 500gr", medida: 1, familia: "almacen", cantidad: 1, precio: 528.84, img: "photo/02mayoNatura.png"},
    // Savora
    {id: 63, nombre: "Savora 60gr", medida: 30, familia: "almacen", cantidad: 1, precio: 71.87, img: "photo/02savora.png"},
    {id: 64, nombre: "Savora 250gr", medida: 1, familia: "almacen", cantidad: 1, precio: 177.29, img: "photo/02savora.png"},
    // Ketchup
    {id: 65, nombre: "ketchup 60gr", medida: 30, familia: "almacen", cantidad: 1, precio: 94.68, img: "photo/02ketchup.png"},
    {id: 66, nombre: "Ketchup 250gr", medida: 1, familia: "almacen", cantidad: 1, precio: 275.88, img: "photo/02ketchup.png"},
    
    // Cacao, cafe 5Hispanos.
    {id: 67, nombre: "Cacao Nesquik 180gr", medida: 1, familia: "almacen", cantidad: 1, precio: 191.88, img: "photo/02cacao.png"},
    {id: 68, nombre: "Cafe 5 Hispanos", medida: 20, familia: "almacen", cantidad: 1, precio: 24.96, img: "photo/02cafe5Hispanos.png"},
    // Cafe Dolca
    {id: 69, nombre: "Cafe Dolca Clasico 100gr", medida: 1, familia: "almacen", cantidad: 1, precio: 575.88, img: "photo/02cafeclasico.png"},
    {id: 70, nombre: "Cafe Dolca Suave 100gr", medida: 1, familia: "almacen", cantidad: 1, precio: 575.88, img: "photo/02cafeSuave.png"},
    {id: 71, nombre: "Cafe Dolca Clasico 50gr", medida: 1, familia: "almacen", cantidad: 1, precio: 311.89, img: "photo/02cafeclasico.png"},
    {id: 72, nombre: "Cafe Dolca Suave 50gr", medida: 1, familia: "almacen", cantidad: 1, precio: 311.89, img: "photo/02cafeSuave.png"},
    // Cafe Marolio
    {id: 73, nombre: "Cafe Marolio 100gr", medida: 1, familia: "almacen", cantidad: 1, precio: 527.88, img: "photo/02cafeMarolio.png"},
    {id: 74, nombre: "Cafe Marolio .. 50gr", medida: 1, familia: "almacen", cantidad: 1, precio: 287.88, img: "photo/02cafeMarolio.png"},
    // Cafe Pocillo
    {id: 75, nombre: "Cafe El Pocillo 170gr", medida: 1, familia: "almacen", cantidad: 1, precio: 515.88, img: "photo/02cafePocillo.png"},
    {id: 76, nombre: "Cafe El Pocillo 100gr", medida: 1, familia: "almacen", cantidad: 1, precio: 311.88, img: "photo/02cafePocillo.png"},

    // Yerbas
    {id: 77, nombre: "Yerba Chamigo 500gr", medida: 5, familia: "almacen", cantidad: 1, precio: 275.88, img: "photo/02yerbaChamigo.png"},
    {id: 78, nombre: "Yerba Marolio 500gr", medida: 5, familia: "almacen", cantidad: 1, precio: 299.88, img: "photo/02yerbaMarolio.png"},
    {id: 79, nombre: "Yerba Union 500gr", medida: 5, familia: "almacen", cantidad: 1, precio: 371.88, img: "photo/02yerbaUnion.png"},
    {id: 80, nombre: "Yerba Taragui 500gr", medida: 5, familia: "almacen", cantidad: 1, precio: 371.88, img: "photo/02yerbaTaragui.png"},
    {id: 81, nombre: "Yerba Mañanita 500gr", medida: 5, familia: "almacen", cantidad: 1, precio: 358.68, img: "photo/02yerbaMananita.png"},

    // Harina Cañuelas
    {id: 82, nombre: "Harina Cañuelas 1kg", medida: 5, familia: "almacen", cantidad: 1, precio: 358.68, img: "photo/02harinaCanuela.png"},
    {id: 83, nombre: "Harina Pueza 0000 1kg", medida: 5, familia: "almacen", cantidad: 1, precio: 358.68, img: "photo/02harina0000.png"},
    {id: 84, nombre: "Harina Leudante 1kg", medida: 5, familia: "almacen", cantidad: 1, precio: 358.68, img: "photo/02harinaLeudante.png"},
    {id: 85, nombre: "Harina Pizza ..... 1kg", medida: 5, familia: "almacen", cantidad: 1, precio: 358.68, img: "photo/02harinaPizza.png"},

    // Pan Rallado y Polenta
    {id: 86, nombre: "Pan Rallado Marolio 500gr", medida: 12, familia: "almacen", cantidad: 1, precio: 155.87, img: "photo/02panRallado.png"},
    {id: 87, nombre: "Polenta Marolio 500gr", medida: 16, familia: "almacen", cantidad: 1, precio: 113.88, img: "photo/02polenta.png"},

    // Salsas Benidorm
    {id: 88, nombre: "Benidorm Mayonesa", medida: 1, familia: "almacen", cantidad: 1, precio: 194.46, img: "photo/02benMayonesa.png"},
    {id: 89, nombre: "Benidorm Parmesano", medida: 1, familia: "almacen", cantidad: 1, precio: 244.08, img: "photo/02benParmesano.png"},
    {id: 90, nombre: "Benidorm Mostaza", medida: 1, familia: "almacen", cantidad: 1, precio: 181.49, img: "photo/02benMostaza.png"},
    {id: 91, nombre: "Benidorm Ketchup", medida: 1, familia: "almacen", cantidad: 1, precio: 242.60, img: "photo/02benKetchup.png"},
    {id: 92, nombre: "Benidorm Golf", medida: 1, familia: "almacen", cantidad: 1, precio: 199.33, img: "photo/02benGolf.png"},
    {id: 93, nombre: "Benidorm Cheddar", medida: 1, familia: "almacen", cantidad: 1, precio: 311.12, img: "photo/02benCheddar.png"},
    
    // Condimentos
    {id: 94, nombre: "Condimento Oregano", medida: 10, familia: "almacen", cantidad: 1, precio: 58.89, img: "photo/02oregano.jpg"},
    {id: 95, nombre: "Condimento Aji Molido", medida: 10, familia: "almacen", cantidad: 1, precio: 60.76, img: "photo/02ajiMolido.jpg"},
    {id: 96, nombre: "Condimento Pimienta Negra", medida: 10, familia: "almacen", cantidad: 1, precio: 105.40, img: "photo/02pimientaNegra.jpg"},
    {id: 97, nombre: "Condimento Pimenton", medida: 10, familia: "almacen", cantidad: 1, precio: 66.96, img: "photo/02pimenton.jpg"},
    {id: 98, nombre: "Condimento Pimienta Blanca", medida: 10, familia: "almacen", cantidad: 1, precio: 147.60, img: "photo/02pimientaBlanca.jpg"},
    {id: 99, nombre: "Condimento Mezcla Pizza", medida: 10, familia: "almacen", cantidad: 1, precio: 56.87, img: "photo/02adoboPizza.jpg"},
    {id: 100, nombre: "Condimento Comino", medida: 10, familia: "almacen", cantidad: 1, precio: 62.36, img: "photo/02comino.jpg"},
    {id: 101, nombre: "Condimento Chimichurri", medida: 10, familia: "almacen", cantidad: 1, precio: 65.36, img: "photo/02chimi.jpg"},
    {id: 102, nombre: "Condimento Provenzal", medida: 10, familia: "almacen", cantidad: 1, precio: 85.81, img: "photo/02provenzal.jpg"},

    // Ravioles Orali
    {id: 103, nombre: "Ravioles Orali Ricota", medida: 1, familia: "almacen", cantidad: 1, precio: 273.04, img: "photo/02ricota.png"},
    {id: 104, nombre: "Ravioles Orali Pollo", medida: 1, familia: "almacen", cantidad: 1, precio: 273.04, img: "photo/02pollo.png"},
    {id: 105, nombre: "Ravioles Orali Verdura", medida: 1, familia: "almacen", cantidad: 1, precio: 273.04, img: "photo/02verdura.png"},
    {id: 106, nombre: "Fetuccini Orali", medida: 1, familia: "almacen", cantidad: 1, precio: 234.48, img: "photo/02tallarin.png"},
    {id: 107, nombre: "Ñoquis Orali", medida: 1, familia: "almacen", cantidad: 1, precio: 238.48, img: "photo/02noqui.png"},
    
    {id: 108, nombre: "Tapas Oralitas", medida: 1, familia: "almacen", cantidad: 1, precio: 157.54, img: "photo/02oralita.png"},
    {id: 109, nombre: "Levadura Calsa 50gr", medida: 1, familia: "almacen", cantidad: 1, precio: 46.61, img: "photo/02levaduraCalsa.png"},
    
    // Empanadas y Pasculinas Orali
    {id: 110, nombre: "Tapas Empanada Orali", medida: 1, familia: "almacen", cantidad: 1, precio: 161.21, img: "photo/02empanadaOrali.png"},
    {id: 111, nombre: "Tapas Pascualina Orali", medida: 1, familia: "almacen", cantidad: 1, precio: 205.44, img: "photo/02pascualinaOrali.png"},
    // Empanadas y pascualinas Litoraleña
    {id: 112, nombre: "Empanadas Lit. Criolla", medida: 1, familia: "almacen", cantidad: 1, precio: 156.12, img: "photo/02empanadaCriolla.png"},    
    {id: 114, nombre: "Empanadas Lit. Hojaldre", medida: 1, familia: "almacen", cantidad: 1, precio: 156.12, img: "photo/02empanadaHojaldre.png"},
    {id: 115, nombre: "Pascualina Lit. Criolla", medida: 1, familia: "almacen", cantidad: 1, precio: 191.38, img: "photo/02pascualinaCriolla.png"},
    {id: 113, nombre: "Pascualina Lit. Hojaldre", medida: 1, familia: "almacen", cantidad: 1, precio: 191.38, img: "photo/02pascualinaHojaldre.png"},

    // Arroz Ala
    {id: 114, nombre: "Arros Ala 1kg", medida: 10, familia: "almacen", cantidad: 1, precio: 185.88, img: "photo/02arrozAla.png"},
    {id: 115, nombre: "Arros Ala 500gr", medida: 6, familia: "almacen", cantidad: 1, precio: 107.88, img: "photo/02arrozAla.png"},
    // Arroz Marolio
    {id: 116, nombre: "Arros Marolio ..  1kg", medida: 10, familia: "almacen", cantidad: 1, precio: 185.88, img: "photo/02arrozMarolio.png"},
    {id: 117, nombre: "Arros Marolio 500gr", medida: 6, familia: "almacen", cantidad: 1, precio: 107.88, img: "photo/02arrozMarolio.png"},
    // Arroz Molto
    {id: 118, nombre: "Arros Molto .. 500gr", medida: 6, familia: "almacen", cantidad: 1, precio: 107.88, img: "photo/02arrozMolto.png"},
    
    // Te y Mate cocido ...
    {id: 119, nombre: "Te Taragui", medida: 5, familia: "almacen", cantidad: 1, precio: 107.88, img: "photo/02teTaragui.png"},
    {id: 120, nombre: "Te Marolio", medida: 5, familia: "almacen", cantidad: 1, precio: 91.08, img: "photo/02teMarolio.png"},
    {id: 121, nombre: "Mate Cocido Union", medida: 5, familia: "almacen", cantidad: 1, precio: 155.86, img: "photo/02mateCocidoUnion.png"},
    {id: 122, nombre: "Mate Cocido Marolio", medida: 5, familia: "almacen", cantidad: 1, precio: 91.08, img: "photo/02mateCocidoMarolio.png"},
    
    // Sopas Molto
    {id: 123, nombre: "Sopa Verdura Clásica", medida: 1, familia: "almacen", cantidad: 1, precio: 233.88, img: "photo/02sopaVerduraC.png"},
    {id: 124, nombre: "Sopa Zapallo Clásica", medida: 1, familia: "almacen", cantidad: 1, precio: 233.88, img: "photo/02sopaZapalloC.png"},
    {id: 125, nombre: "Sopa Verdura Light", medida: 1, familia: "almacen", cantidad: 1, precio: 233.88, img: "photo/02sopaVerduraL.png"},
    {id: 126, nombre: "Sopa Zapallo Light", medida: 1, familia: "almacen", cantidad: 1, precio: 233.88, img: "photo/02sopaZapalloL.png"},

    // Fideos Marolio
    {id: 127, nombre: "Fideos Marolio Tirabuzón", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoTira.png"},
    {id: 128, nombre: "Fideos Marolio Dadolitos", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoDado.png"},
    {id: 129, nombre: "Fideos Marolio Ave María", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoAveM.png"},
    {id: 130, nombre: "Fideos Marolio Coditos", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoCodi.png"},
    {id: 131, nombre: "Fideos Marolio Mostachol", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoMost.png"},
    {id: 132, nombre: "Fideos Marolio Tallarín", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoTall.png"},
    {id: 133, nombre: "Fideos Marolio Spaguetti", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoSpag.png"},
    {id: 134, nombre: "Fideos Marolio Munición", medida: 1, familia: "almacen", cantidad: 1, precio: 137.88, img: "photo/02fideoMuni.png"},
    {id: 135, nombre: "Fideos Marolio Moños", medida: 1, familia: "almacen", cantidad: 1, precio: 215.88, img: "photo/02fideoMono.png"},
    
    // Vinagres
    {id: 136, nombre: "Vinagre Alcohol", medida: 1, familia: "almacen", cantidad: 1, precio: 107.88, img: "photo/02vinagreA.png"},
    {id: 137, nombre: "Vinagre Manzana", medida: 1, familia: "almacen", cantidad: 1, precio: 185.88, img: "photo/02vinagreM.png"},

    // Pasteleria ... Flan
    {id: 138, nombre: "Flan Vainilla Marolio", medida: 1, familia: "almacen", cantidad: 1, precio: 89.88, img: "photo/02flanMaVainilla.png"},
    {id: 139, nombre: "Flan D. Leche Marolio", medida: 1, familia: "almacen", cantidad: 1, precio: 89.88, img: "photo/02flanMaLeche.png"},
    {id: 140, nombre: "Flan Vainilla Esquisita", medida: 1, familia: "almacen", cantidad: 1, precio: 110, img: "photo/02flanEsVainilla.png"},
    {id: 150, nombre: "Flan D. Leche Esquisita", medida: 1, familia: "almacen", cantidad: 1, precio: 110, img: "photo/02flanEsLeche.png"},
    // Gelatina Marolio
    {id: 151, nombre: "Gelatina Marolio Cereza", medida: 1, familia: "almacen", cantidad: 1, precio: 155.89, img: "photo/02gelatinaMaCere.png"},
    {id: 152, nombre: "Gelatina Marolio Frambuesa", medida: 1, familia: "almacen", cantidad: 1, precio: 155.89, img: "photo/02gelatinaMaFram.png"},
    {id: 153, nombre: "Gelatina Marolio Frutilla", medida: 1, familia: "almacen", cantidad: 1, precio: 155.89, img: "photo/02gelatinaMaFrut.png"},
    {id: 154, nombre: "Gelatina Light Frutilla", medida: 1, familia: "almacen", cantidad: 1, precio: 143.88, img: "photo/02gelatinaMaLight.png"},
    // Gelatina Esquisita
    {id: 155, nombre: "Gelatina Esquisita Frambuesa", medida: 1, familia: "almacen", cantidad: 1, precio: 130.80, img: "photo/02gelatinaEsFram.png"},
    {id: 156, nombre: "Gelatina Esquisita Frutilla", medida: 1, familia: "almacen", cantidad: 1, precio: 130.80, img: "photo/02gelatinaEsFrut.png"},
    // Postres
    {id: 157, nombre: "Postre Esquisita Vainilla", medida: 1, familia: "almacen", cantidad: 1, precio: 119.88, img: "photo/02postreVainilla.png"},
    {id: 158, nombre: "Postre Esquisita Chcocolate", medida: 1, familia: "almacen", cantidad: 1, precio: 119.88, img: "photo/02postreChoco.png"},
    // Biscochuelo
    {id: 159, nombre: "Biscochuelo Marolio Vainilla", medida: 1, familia: "almacen", cantidad: 1, precio: 287.88, img: "photo/02biscochuelo.png"},

    // ****************************************************** Fiambres ****************************************************** //
    
    // Jamon Cocido
    {id: 160, nombre: "Jamon Cocido Octava", medida: 5.5, familia: "fiambres", cantidad: 1, precio: 1560, img: "photo/03jamonOctava.png"},
    {id: 161, nombre: "Jamon Cocido Luvianka", medida: 4, familia: "fiambres", cantidad: 1, precio: 1620.36, img: "photo/03jamonLuvianka.png"},
    {id: 162, nombre: "Jamon Cocido Seoc", medida: 5, familia: "fiambres", cantidad: 1, precio: 1095.60, img: "photo/03jamonSeoc.png"},
    {id: 163, nombre: "Jamon Cocido San Jose", medida: 5, familia: "fiambres", cantidad: 1, precio: 1095.60, img: "photo/03jamonSJ.png"},
    // {id: 164, nombre: "Jamon Cocido Paladini", medida: 6, familia: "fiambres", cantidad: 1, precio: 00, img: "photo/03jamonPaladini.png"},
    {id: 165, nombre: "Jamon Cocido Los Calvos", medida: 4, familia: "fiambres", cantidad: 1, precio: 1775.90, img: "photo/03jamon42.png"},

    // Jamon Natural
    {id: 166, nombre: "Jamon Natural Luvianka", medida: 6, familia: "fiambres", cantidad: 1, precio: 1741.24, img: "photo/03jamonNatLuvianka.png"},
    // {id: 167, nombre: "Jamon Natural Boccati", medida: 6, familia: "fiambres", cantidad: 1, precio: 00, img: "photo/03jamonBocatti.png"},

    // Fiambres Pata
    {id: 168, nombre: "Pernil Fox", medida: 5.5, familia: "fiambres", cantidad: 1, precio: 1237.97, img: "photo/03pernilFox.png"},
    {id: 169, nombre: "Pernil Livianka", medida: 5, familia: "fiambres", cantidad: 1, precio: 1237.97, img: "photo/03pernilLuvianka.png"},

    // Fiambre Paleta
    {id: 170, nombre: "Paleta Comarca", medida: 4, familia: "fiambres", cantidad: 1, precio: 1148.03, img: "photo/03paletaComarca.png"},
    {id: 171, nombre: "Paleta 295", medida: 4, familia: "fiambres", cantidad: 1, precio: 910.68, img: "photo/03paleta295.png"},
    {id: 172, nombre: "Paleta Losifar", medida: 4, familia: "fiambres", cantidad: 1, precio: 825, img: "photo/03paletaLosifar.png"},
    {id: 173, nombre: "Paleta Jet Food", medida: 5.5, familia: "fiambres", cantidad: 1, precio: 601.84, img: "photo/03paletaJetFood.png"},

    // Crudo
    {id: 174, nombre: "Crudo sol de Avellaneda", medida: 3, familia: "fiambres", cantidad: 1, precio: 2248.64, img: "photo/03crudoSol.png"},

    // Matambres ... LosiFar
    {id: 175, nombre: "Matambres Losifar Carne", medida: 2, familia: "fiambres", cantidad: 1, precio: 1330.56, img: "photo/03MatambreLosiC.png"},
    {id: 176, nombre: "Matambres Losifar Pollo", medida: 2, familia: "fiambres", cantidad: 1, precio: 1330.56, img: "photo/03MatambreLosiP.png"},
    // Campo Argentino
    {id: 177, nombre: "Matambres Campo Carne", medida: 1.5, familia: "fiambres", cantidad: 1, precio: 1184.21, img: "photo/03MatambreCampo.png"},

    // Mortadelas
    {id: 178, nombre: "Mortadela Bocha Calchaquil", medida: 7, familia: "fiambres", cantidad: 1, precio: 1422.07, img: "photo/03mortadelaCalcha.png"},
    {id: 179, nombre: "Mortadela Cañon Calchaquil", medida: 4, familia: "fiambres", cantidad: 1, precio: 1257.19, img: "photo/03mortadelaCanon.png"},
    {id: 180, nombre: "Mortadela Apetece", medida: 5, familia: "fiambres", cantidad: 1, precio: 969.89, img: "photo/03mortadelaapetece.png"},
    {id: 181, nombre: "Mortadela Los Calvos", medida: 6, familia: "fiambres", cantidad: 1, precio: 1139.96, img: "photo/03mortadela42.png"},
    {id: 182, nombre: "Mortadela Paladini 300gr", medida: 1, familia: "fiambres", cantidad: 1, precio: 484.18, img: "photo/03mortadelaPaladini.png"},

    // Salame Milan
    {id: 183, nombre: "Salame Calchaqui", medida: 3, familia: "fiambres", cantidad: 1, precio: 484.18, img: "photo/03salameCalcha.png"},
    {id: 184, nombre: "Salame Fox", medida: 2, familia: "fiambres", cantidad: 1, precio: 484.18, img: "photo/03salameFox.png"},
    {id: 185, nombre: "Salame Los Calvos", medida: 4, familia: "fiambres", cantidad: 1, precio: 484.18, img: "photo/03salame42.png"},
    {id: 186, nombre: "Salame Cagnoli", medida: 2.5, familia: "fiambres", cantidad: 1, precio: 484.18, img: "photo/03salameCagnoli.png"},
    {id: 187, nombre: "Salame Apetece", medida: 3, familia: "fiambres", cantidad: 1, precio: 484.18, img: "photo/03salameApetece.png"},

    // Secos ... (salamines, candelarios, baston)
    {id: 188, nombre: "Salamines 42 Fino", medida: 0.75, familia: "fiambres", cantidad: 1, precio: 2336.54, img: "photo/03salamines42F.png"},
    {id: 189, nombre: "Salamines 42 Grueso", medida: 0.75, familia: "fiambres", cantidad: 1, precio: 2336.54, img: "photo/03salamines42G.png"},
    {id: 190, nombre: "Salamines 42 Longaniza", medida: 0.5, familia: "fiambres", cantidad: 1, precio: 2336.54, img: "photo/03salamines42L.png"},
    // Candelarios leopardo
    {id: 191, nombre: "Candelarios Leopardp", medida: 0.5, familia: "fiambres", cantidad: 1, precio: 1950, img: "photo/03candelarioLeopardo.png"},
    // Baston
    {id: 192, nombre: "baston Los Calvos", medida: 1, familia: "fiambres", cantidad: 1, precio: 1950, img: "photo/03baston42.png"},
    {id: 193, nombre: "baston Fox", medida: 0.8, familia: "fiambres", cantidad: 2, precio: 1950, img: "photo/03bastonFox.png"},

    // Bondiolas
    {id: 194, nombre: "Bondiola Luvianka", medida: 1, familia: "fiambres", cantidad: 1, precio: 2939.45, img: "photo/03bondiolaLuvianka.png"},
    {id: 195, nombre: "Bondiola Los Calvos", medida: 1, familia: "fiambres", cantidad: 1, precio: 3613.14, img: "photo/03bondiola42.png"},

    // Pancetas
    {id: 196, nombre: "Panceta Los Calvos", medida: 2, familia: "fiambres", cantidad: 1, precio: 2298.70, img: "photo/03panceta42.png"},
    {id: 197, nombre: "Panceta Seoc", medida: 2, familia: "fiambres", cantidad: 1, precio: 1446.72, img: "photo/03pancetaSeoc.png"},
    {id: 198, nombre: "Panceta Salada Luvianka", medida: 2, familia: "fiambres", cantidad: 1, precio: 1681.43, img: "photo/03pancetaLuvianka.png"},

    // Salchichon .. La Octava
    {id: 199, nombre: "Salchichon Octava Primavera", medida: 3, familia: "fiambres", cantidad: 1, precio: 811.01, img: "photo/03salchichon8P.png"},
    {id: 200, nombre: "Salchichon Octava Jamon", medida: 3, familia: "fiambres", cantidad: 1, precio: 811.01, img: "photo/03salchichon8J.png"},
    // Luvianka
    {id: 201, nombre: "Salchichon Luvianka Primavera", medida: 2.65, familia: "fiambres", cantidad: 1, precio: 797.20, img: "photo/03salchichonLP.png"},
    {id: 202, nombre: "Salchichon Luvianka Jamon", medida: 2.65, familia: "fiambres", cantidad: 1, precio: 797.20, img: "photo/03salchichonLJ.png"},
    // Los Calvos
    {id: 203, nombre: "Salchichon 42 Primavera", medida: 3, familia: "fiambres", cantidad: 1, precio: 1018.94, img: "photo/03salchichon42P.png"},
    {id: 204, nombre: "Salchichon 42 Jamon", medida: 3, familia: "fiambres", cantidad: 1, precio: 1018.94, img: "photo/03salchichon42J.png"},
    
    // Queso de cerdo
    {id: 205, nombre: "Queso de credo 42", medida: 3, familia: "fiambres", cantidad: 1, precio: 1018.94, img: "photo/03quesoCerdo42.png"},
    {id: 206, nombre: "Queso de credo Fox", medida: 3, familia: "fiambres", cantidad: 1, precio: 711.83, img: "photo/03quesoCerdoFox.png"},
    {id: 207, nombre: "Queso de credo Octava", medida: 3, familia: "fiambres", cantidad: 1, precio: 811.07, img: "photo/03quesoCerdo8.png"},
    {id: 208, nombre: "Queso de credo Seoc", medida: 2, familia: "fiambres", cantidad: 1, precio: 522.19, img: "photo/03quesoCerdoSeoc.png"},

    // Salchichas
    {id: 209, nombre: "Comarca x6", medida: 1, familia: "fiambres", cantidad: 1, precio: 162.6, img: "photo/03salchichaComarca.png"},
    {id: 210, nombre: "Paladini x6", medida: 1, familia: "fiambres", cantidad: 1, precio: 230.16, img: "photo/03salchichaPaladini6.png"},
    {id: 211, nombre: "Paladini x12", medida: 1, familia: "fiambres", cantidad: 1, precio: 697.27, img: "photo/03salchichaPaladini12.png"},

    // Leberwust, pate y picadillo 
    {id: 212, nombre: "LeberWurst Paladini 250gr", medida: 1, familia: "fiambres", cantidad: 1, precio: 340.03, img: "photo/03leberwurst.png"},
    {id: 213, nombre: "Picadillo", medida: 1, familia: "fiambres", cantidad: 1, precio: 160.24, img: "photo/03picadillo.png"},
    {id: 214, nombre: "Pate de Foie", medida: 1, familia: "fiambres", cantidad: 1, precio: 160.24, img: "photo/03pate.png"},

    // ****************************************************** Quesos ****************************************************** //

    // Cremoso
    {id: 215, nombre: "Cremoso Punta Agua", medida: 4, familia: "quesos", cantidad: 1, precio: 1016.96, img: "photo/04cremosoPunta.png"},
    {id: 216, nombre: "Cremoso Lactovita", medida: 4, familia: "quesos", cantidad: 1, precio: 858.19, img: "photo/04cremosoLactovita.png"},
    {id: 217, nombre: "Cremoso Oferta", medida: 4, familia: "quesos", cantidad: 1, precio: 818.60, img: "photo/04cremosoOferta.png"},

    // Barras
    {id: 218, nombre: "Barra Punta Agua", medida: 4, familia: "quesos", cantidad: 1, precio: 1279.08, img: "photo/04BarraPunta.png"},
    {id: 219, nombre: "Barra Esnaola", medida: 4, familia: "quesos", cantidad: 1, precio: 1388.68, img: "photo/04BarraEsnaola.png"},
    {id: 220, nombre: "Barra Melincué", medida: 4, familia: "quesos", cantidad: 1, precio: 1279.08, img: "photo/04BarraMelincue.png"},
    {id: 221, nombre: "Barra Noalsa", medida: 4, familia: "quesos", cantidad: 1, precio: 1491.60, img: "photo/04BarraNoalsa.png"},

    // Muzzarellas
    {id: 222, nombre: "Muzzarella Barraza", medida: 3, familia: "quesos", cantidad: 1, precio: 1251.56, img: "photo/04muzzaBarraza.png"},
    {id: 223, nombre: "Muzzarella Campo", medida: 5, familia: "quesos", cantidad: 1, precio: 1491.60, img: "photo/04muzzaCampo.png"},

    // Hormas (patgegras, Azul, sardo, reggianito)
    {id: 224, nombre: "Pategras Maffia", medida: 2, familia: "quesos", cantidad: 1, precio: 1550.77, img: "photo/04pategras.png"},
    {id: 225, nombre: "Queso Azul Sangotardo", medida: 1, familia: "quesos", cantidad: 1, precio: 1686.96, img: "photo/04azulSangotardo.png"},
    {id: 226, nombre: "Sardo Fresco", medida: 3, familia: "quesos", cantidad: 1, precio: 1188, img: "photo/04sardoFresco.png"},
    // {id: 227, nombre: "Sardo Semiduro", medida: 3, familia: "quesos", cantidad: 1, precio: 0, img: "photo/04sardoSemiduro.png"},
    {id: 228, nombre: "Reggianito Melincué", medida: 4, familia: "quesos", cantidad: 1, precio: 2255.88, img: "photo/04reggianito.png"},
    // {id: 229, nombre: "Reggianito Melincue Barra", medida: 3.5, familia: "quesos", cantidad: 1, precio: 0, img: "photo/04reggianitoBarra.png"},

    // Rallados
    {id: 230, nombre: "Rallado x35gr La Serenisima", medida: 10, familia: "quesos", cantidad: 1, precio: 153.600, img: "photo/04ralladoSere.png"},
    {id: 231, nombre: "Rallado x40gr La Quesera", medida: 20, familia: "quesos", cantidad: 1, precio: 87.65, img: "photo/04ralladoQuesera.png"},

    // Varios (parrillero, fiambrin, cheddar)
    {id: 232, nombre: "Parrillero Nonna Pía", medida: 1, familia: "quesos", cantidad: 1, precio: 2071.56, img: "photo/04parrillero.png"},
    {id: 233, nombre: "Fiambrin La Serenisima", medida: 2, familia: "quesos", cantidad: 1, precio: 1855.90, img: "photo/04fiambrin.png"},
    {id: 234, nombre: "Cheddar La Serenisima", medida: 2, familia: "quesos", cantidad: 1, precio: 1807.87, img: "photo/04cheddarSere.png"},
    {id: 235, nombre: "Cheddar Feteado Tonadita x10", medida: 1, familia: "quesos", cantidad: 1, precio: 283.67, img: "photo/04cheddarTonadita.png"},

    // ****************************************************** Lacteos ****************************************************** //

    // Leches
    {id: 236, nombre: "Leche Entera Serenísima", medida: 1, familia: "lacteos", cantidad: 1, precio: 218.89, img: "photo/05lecheSachetEntera.png"},
    {id: 237, nombre: "Leche Entera Descremada", medida: 1, familia: "lacteos", cantidad: 1, precio: 218.89, img: "photo/05lecheSachetDescremada.png"},
    {id: 238, nombre: "Leche Entera LV Serenísima", medida: 1, familia: "lacteos", cantidad: 1, precio: 250.80, img: "photo/05lecheLvEntera.png"},
    {id: 239, nombre: "Leche Entera LV Descremada", medida: 1, familia: "lacteos", cantidad: 1, precio: 250.80, img: "photo/05lecheLvDescremada.png"},
    {id: 240, nombre: "Leche 0% Lactoza", medida: 1, familia: "lacteos", cantidad: 1, precio: 258.34, img: "photo/05leche0lactoza.png"},
    {id: 241, nombre: "Leche Oferta", medida: 1, familia: "lacteos", cantidad: 1, precio: 203.88, img: "photo/05lecheOferta.png"},

    {id: 242, nombre: "Crema de leche 200cc", medida: 1, familia: "lacteos", cantidad: 1, precio: 255.26, img: "photo/05cremaLeche.png"},

    // mantecas
    {id: 243, nombre: "Manteca La Serenisima 100gr", medida: 10, familia: "lacteos", cantidad: 1, precio: 224.53, img: "photo/05mantecaSere.png"},
    {id: 244, nombre: "Manteca La Serenisima 200gr", medida: 5, familia: "lacteos", cantidad: 1, precio: 358.62, img: "photo/05mantecaSere.png"},
    {id: 245, nombre: "Manteca SYS 100gr", medida: 10, familia: "lacteos", cantidad: 1, precio: 127.12, img: "photo/05mantecaSys.png"},
    {id: 246, nombre: "Manteca SYS 200gr", medida: 5, familia: "lacteos", cantidad: 1, precio: 239.51, img: "photo/05mantecaSys.png"},

    // ****************************************************** Encurtidos ****************************************************** //

    // olifaza
    {id: 247, nombre: "Aceitunas Olifaza Verde 1kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 778.26, img: "photo/06olifazaVerde.png"},
    {id: 248, nombre: "Aceitunas Olifaza Verde 2kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 1437.64, img: "photo/06olifazaVerde.png"},
    {id: 249, nombre: "Aceitunas olifaza Desc. 1.8kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 1629.29, img: "photo/06olifazaVerde.png"},
    {id: 250, nombre: "Aceitunas olifaza Negra 2kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 2092.91, img: "photo/06olifazaNegra.png"},

    // Morando
    {id: 251, nombre: "Morando verde 1kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 931.31, img: "photo/06morandoVerde.png"},
    {id: 252, nombre: "Morando verde 2kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 2163.62, img: "photo/06morandoVerde.png"},
    {id: 253, nombre: "Morando Negra 2kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 2324.89, img: "photo/06morandoNegra.png"},

    // Sachet 90gr
    {id: 254, nombre: "Sachet Verdes .. 70gr", medida: 1, familia: "encurtidos", cantidad: 1, precio: 131.88, img: "photo/06sachetVerde.png"},
    {id: 255, nombre: "Sachet Descarozada 70gr", medida: 1, familia: "encurtidos", cantidad: 1, precio: 131.88, img: "photo/06sachetDesc.png"},
    {id: 256, nombre: "Sachet Negras .. 70gr", medida: 1, familia: "encurtidos", cantidad: 1, precio: 131.88, img: "photo/06sachetNegra.png"},
    {id: 257, nombre: "Sachet Morron 70gr", medida: 1, familia: "encurtidos", cantidad: 1, precio: 131.88, img: "photo/06sachetMorron.png"},

    // Ajies, Pickles, Anchoas
    {id: 258, nombre: "Ajies Olifaza 900gr", medida: 1, familia: "encurtidos", cantidad: 1, precio: 895.62, img: "photo/06ajiesOlifaza.png"},
    {id: 259, nombre: "Pickles Olifaza 2kg", medida: 1, familia: "encurtidos", cantidad: 1, precio: 1128.47, img: "photo/06pickles.png"},
    {id: 260, nombre: "Anchoas Morando 90gr", medida: 1, familia: "encurtidos", cantidad: 1, precio: 596.21, img: "photo/06anchoaMorando.png"},
    {id: 260, nombre: "Anchoas Morando 60x3", medida: 60, familia: "encurtidos", cantidad: 1, precio: 85.51, img: "photo/06anchoaMorando.png"},

    // ****************************************************** Dulces ****************************************************** //

    // Cayfar Lata
    {id: 261, nombre: "Lata Batata 5kg", medida: 1, familia: "mermeladas", cantidad: 1, precio: 1883.83, img: "photo/07lataBatata.png"},
    {id: 262, nombre: "Lata Batata Chocolate", medida: 1, familia: "mermeladas", cantidad: 1, precio: 1883.83, img: "photo/07lataChoco.png"},
    {id: 263, nombre: "Lata Membrillo 5kg", medida: 1, familia: "mermeladas", cantidad: 1, precio: 1883.83, img: "photo/07lataMembrillo.png"},
    
    // Cayfar cajon
    {id: 264, nombre: "Cajon Batata 5kg", medida: 1, familia: "mermeladas", cantidad: 1, precio: 1707.02, img: "photo/07cajonBatata.png"},
    {id: 265, nombre: "Cajon Batata Chocolate", medida: 1, familia: "mermeladas", cantidad: 1, precio: 1707.02, img: "photo/07cajonChoco.png"},
    {id: 266, nombre: "Cajon Membrillo 5kg", medida: 1, familia: "mermeladas", cantidad: 1, precio: 1707.02, img: "photo/07cajonMembrillo.png"},

    // Mermelada Dulcor
    {id: 267, nombre: "Mermelada Dulcor Frutilla", medida: 1, familia: "mermeladas", cantidad: 1, precio: 328, img: "photo/07dulcorFrutilla.png"},
    {id: 268, nombre: "Mermelada Dulcor Ciruela", medida: 1, familia: "mermeladas", cantidad: 1, precio: 246.70, img: "photo/07dulcorCiruela.png"},
    {id: 269, nombre: "Mermelada Dulcor Durazno", medida: 1, familia: "mermeladas", cantidad: 1, precio: 246.70, img: "photo/07dulcorDurazno.png"},
    
    // Mermelada Cormillot
    {id: 270, nombre: "Mermelada Cormillot Frutilla", medida: 1, familia: "mermeladas", cantidad: 1, precio: 328, img: "photo/07cormillotFrutilla.png"},
    {id: 271, nombre: "Mermelada Cormillot Ciruela", medida: 1, familia: "mermeladas", cantidad: 1, precio: 246.70, img: "photo/07cormillotCiruela.png"},
    {id: 272, nombre: "Mermelada Cormillot Durazno", medida: 1, familia: "mermeladas", cantidad: 1, precio: 246.70, img: "photo/07cormillotDurazno.png"},
    
    // Mermelada Esnaola
    {id: 273, nombre: "Mermelada Esnaola Frutilla", medida: 1, familia: "mermeladas", cantidad: 1, precio: 248.78, img: "photo/07esnaolaFrutilla.png"},
    {id: 274, nombre: "Mermelada Esnaola Ciruela", medida: 1, familia: "mermeladas", cantidad: 1, precio: 248.78, img: "photo/07esnaolaCiruela.png"},
    {id: 275, nombre: "Mermelada Esnaola Durazno", medida: 1, familia: "mermeladas", cantidad: 1, precio: 248.78, img: "photo/07esnaolaDurazno.png"},
    {id: 276, nombre: "Mermelada Esnaola Naranja", medida: 1, familia: "mermeladas", cantidad: 1, precio: 248.78, img: "photo/07esnaolaNaranja.png"},
    
    // Mermelada Esnaola Light
    {id: 273, nombre: "Esnaola Light Frutilla", medida: 1, familia: "mermeladas", cantidad: 1, precio: 319.03, img: "photo/07EsLightFrutilla.png"},
    {id: 274, nombre: "Esnaola Light Ciruela", medida: 1, familia: "mermeladas", cantidad: 1, precio: 226.54, img: "photo/07EsLightCiruela.png"},
    {id: 275, nombre: "Esnaola Light Durazno", medida: 1, familia: "mermeladas", cantidad: 1, precio: 226.54, img: "photo/07EsLightDurazno.png"},
    {id: 276, nombre: "Esnaola Light Damasco", medida: 1, familia: "mermeladas", cantidad: 1, precio: 226.54, img: "photo/07EsLightDamasco.png"},

    // Mermelada Marolio    
    {id: 277, nombre: "Mermelada Marolio Frutilla", medida: 1, familia: "mermeladas", cantidad: 1, precio: 391.90, img: "photo/07merMarolioFrutilla.png"},
    {id: 278, nombre: "Mermelada Marolio Ciruela", medida: 1, familia: "mermeladas", cantidad: 1, precio: 323.86, img: "photo/07merMarolioCiruela.png"},
    {id: 279, nombre: "Mermelada Marolio Durazno", medida: 1, familia: "mermeladas", cantidad: 1, precio: 323.86, img: "photo/07merMarolioDurazno.png"},

    // Caja x 500
    {id: 280, nombre: "Caja x500 Membrillo", medida: 1, familia: "mermeladas", cantidad: 1, precio: 208.56, img: "photo/07caja500Membrillo.png"},
    {id: 281, nombre: "Caja x500 Batata", medida: 1, familia: "mermeladas", cantidad: 1, precio: 178.54, img: "photo/07caja500Batata.png"},
    {id: 282, nombre: "Caja Batata Choco", medida: 1, familia: "mermeladas", cantidad: 1, precio: 178.54, img: "photo/07caja500Choco.png"},

    // Dulce de leche, Miel
    {id: 283, nombre: "Dulce de leche Punta", medida: 1, familia: "mermeladas", cantidad: 1, precio: 246.44, img: "photo/07dulcePunta.png"},
    {id: 284, nombre: "Dulce de leche Serenisima", medida: 1, familia: "mermeladas", cantidad: 1, precio: 259.62, img: "photo/07dulceSere.png"},
    {id: 285, nombre: "Miel Terra Nova", medida: 1, familia: "mermeladas", cantidad: 1, precio: 271.20, img: "photo/07mielTerraNova.png"},

    // ****************************************************** Concerva ****************************************************** //

    // pescados .. Caballa, jurel sardina
    {id: 286, nombre: "Caballa Marolio Aceite", medida: 1, familia: "conservas", cantidad: 1, precio: 629.8, img: "photo/08caballaMarolioA.png"},
    {id: 287, nombre: "Caballa Marolio Natural", medida: 1, familia: "conservas", cantidad: 1, precio: 629.8, img: "photo/08caballaMarolioN.png"},
    {id: 289, nombre: "Jurel Marolio Aceite", medida: 1, familia: "conservas", cantidad: 1, precio: 503.88, img: "photo/08jurelMarolioA.png"},
    {id: 290, nombre: "Jurel Marolio Natural", medida: 1, familia: "conservas", cantidad: 1, precio: 503.88, img: "photo/08jurelMarolioN.png"},
    {id: 291, nombre: "Sardina marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 479.88, img: "photo/08sardinaMarolio.png"},
    // {id: 292, nombre: "Sardina Buen Piquie", medida: 1, familia: "conservas", cantidad: 1, precio: 0, img: "photo/08sardinaBuenPique.png"},
    // Atun Cumana
    {id: 293, nombre: "Atun Cummana Lom Aceite", medida: 1, familia: "conservas", cantidad: 1, precio: 449.65, img: "photo/08lomitoCumanaA.png"},
    {id: 294, nombre: "Atun Cummana Lom Natural", medida: 1, familia: "conservas", cantidad: 1, precio: 449.65, img: "photo/08lomitoCumanaN.png"},
    // Atun Marolio
    {id: 295, nombre: "Atun Marolio Lom Aceite", medida: 1, familia: "conservas", cantidad: 1, precio: 505.68, img: "photo/08lomitoMarolioA.png"},
    {id: 296, nombre: "Atun Marolio Lom Natural", medida: 1, familia: "conservas", cantidad: 1, precio: 505.68, img: "photo/08lomitoMarolioN.png"},
    {id: 297, nombre: "Atun Dique Desm Aceite", medida: 1, familia: "conservas", cantidad: 1, precio: 326.86, img: "photo/08desmDiqueA.png"},
    {id: 298, nombre: "Atun Dique Des lomm Natural", medida: 1, familia: "conservas", cantidad: 1, precio: 326.86, img: "photo/08desmDiqueN.png"},
    // Atun Banda lom
    {id: 299, nombre: "Atun La Banada lom Aceite", medida: 1, familia: "conservas", cantidad: 1, precio: 505.68, img: "photo/08lomitoBandaA.png"},
    {id: 300, nombre: "Atun La Banada lom Natural", medida: 1, familia: "conservas", cantidad: 1, precio: 505.68, img: "photo/08lomitoBandaN.png"},
    {id: 301, nombre: "Atun La Banada desm Aceite", medida: 1, familia: "conservas", cantidad: 1, precio: 344.32, img: "photo/08desmBandaA.png"},
    {id: 302, nombre: "Atun La Banada desm Natural", medida: 1, familia: "conservas", cantidad: 1, precio: 344.32, img: "photo/08desmBandaN.png"},

    // Morron y legumbres
    {id: 303, nombre: "Morron caracas", medida: 1, familia: "conservas", cantidad: 1, precio: 419.88, img: "photo/08morronCaracas.png"},
    {id: 304, nombre: "Lentejas Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 107.88, img: "photo/08lentejasMarolio.png"},
    {id: 305, nombre: "Lentejas La Banda", medida: 1, familia: "conservas", cantidad: 1, precio: 127.50, img: "photo/08lentejaBanda.png"},
    {id: 306, nombre: "Garbanzos La banda", medida: 1, familia: "conservas", cantidad: 1, precio: 123.59, img: "photo/08garbanzoBanda.png"},
    {id: 307, nombre: "Poroto Alubia La Banda", medida: 1, familia: "conservas", cantidad: 1, precio: 123.59, img: "photo/08porotoAlubiaBanda.png"},
       
    // Arvejas y Jardinera
    {id: 308, nombre: "Arvejas Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 95.88, img: "photo/08arvejaMarolio.png"},
    {id: 309, nombre: "Arvejas La Banda", medida: 1, familia: "conservas", cantidad: 1, precio: 116.53, img: "photo/08arvejaBanda.png"},
    {id: 310, nombre: "Jardinera Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 143.88, img: "photo/08jardineraMarolio.png"},
    {id: 311, nombre: "Jardinera La Colina", medida: 1, familia: "conservas", cantidad: 1, precio: 145.07, img: "photo/08jardineraColina.png"},
    {id: 312, nombre: "Jardinera La Banda", medida: 1, familia: "conservas", cantidad: 1, precio: 145.07, img: "photo/08jardineraBanda.png"},

    // palmito, champigniones
    {id: 313, nombre: "Champignion Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 395.88, img: "photo/08champignionMarolio.png"},
    {id: 314, nombre: "Palmitos Cumaná", medida: 1, familia: "conservas", cantidad: 1, precio: 905.92, img: "photo/08palmitoCumana.png"},

    // Choclos
    {id: 315, nombre: "Choclo Marolio Amamrillo", medida: 1, familia: "conservas", cantidad: 1, precio: 191.88, img: "photo/08chocloMarolio.png"},
    {id: 316, nombre: "Choclo Marolio Cremoso", medida: 1, familia: "conservas", cantidad: 1, precio: 191.88, img: "photo/08cremosoMarolio.png"},
    {id: 317, nombre: "Choclo La Banda Amarillo", medida: 1, familia: "conservas", cantidad: 1, precio: 232.96, img: "photo/08chocloBanda.png"},
    {id: 318, nombre: "Choclo La Banda Cremoso", medida: 1, familia: "conservas", cantidad: 1, precio: 232.96, img: "photo/08cremosoBanda.png"},

    // Salsa Listas
    {id: 319, nombre: "Salsa Molto Pizza", medida: 1, familia: "conservas", cantidad: 1, precio: 149.88, img: "photo/08salsaPizza.png"},
    {id: 320, nombre: "Salsa Molto Portugueza", medida: 1, familia: "conservas", cantidad: 1, precio: 149.88, img: "photo/08salsaPortugueza.png"},
    {id: 321, nombre: "Salsa Molto Pomarola", medida: 1, familia: "conservas", cantidad: 1, precio: 149.88, img: "photo/08salsaPomarola.png"},
    {id: 322, nombre: "Salsa Molto Fileto", medida: 1, familia: "conservas", cantidad: 1, precio: 149.88, img: "photo/08salsaFileto.png"},

    // Tomate
    {id: 323, nombre: "Tomate Botella", medida: 1, familia: "conservas", cantidad: 1, precio: 336.6, img: "photo/08tomateBotella.png"},
    {id: 324, nombre: "Tomate Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 117.48, img: "photo/08tomateMarolio.png"},
    {id: 325, nombre: "Tomate Molto", medida: 1, familia: "conservas", cantidad: 1, precio: 129.48, img: "photo/08tomateMolto.png"},
    // perita
    {id: 326, nombre: "Perita Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 125.87, img: "photo/08peritaMarolio.png"},
    {id: 327, nombre: "Perita Molto", medida: 1, familia: "conservas", cantidad: 1, precio: 141.48, img: "photo/08peritaMolto.png"},

    // Frutales
    {id: 328, nombre: "Durazno Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 479.88, img: "photo/08duraznoMarolio.png"},
    {id: 329, nombre: "Anana Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 719.88, img: "photo/08ananaMarolio.png"},
    {id: 330, nombre: "Coctel Marolio", medida: 1, familia: "conservas", cantidad: 1, precio: 539.88, img: "photo/08coctelMarolio.png"},

    // ****************************************************** Perfumeria ****************************************************** //
    
    // Shampoo Sedal
    {id: 331, nombre: "Shampo Sedal Restauración", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalRestauracion.png"},
    {id: 332, nombre: "Shampo Sedal Rizo Definido", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalRizo.png"},
    {id: 333, nombre: "Shampo Sedal Liso perfecto", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalLiso.png"},
    {id: 334, nombre: "Shampo Sedal Balance", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalBalance.png"},
    {id: 335, nombre: "Shampo Sedal Creamidas", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalCreamidas.png"},
    // Crema Sedal
    {id: 336, nombre: "Crema Sedal Restauración", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalRestauracion.png"},
    {id: 337, nombre: "Crema Sedal Rizo Definido", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalRizo.png"},
    {id: 338, nombre: "Crema Sedal Liso perfecto", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalLiso.png"},
    {id: 339, nombre: "Crema Sedal Balance", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalBalance.png"},
    {id: 340, nombre: "Crema Sedal Creamidas", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shSedalCreamidas.png"},
    // Shampoo Plusbelle
    {id: 341, nombre: "Shampo Plusbelle Manzana", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09shPlusbelle.png"},
    // Shampoo J&J
    {id: 342, nombre: "Shampo JyJ 200ml", medida: 1, familia: "perfumeria", cantidad: 1, precio: 597.89, img: "photo/09shJ&j.png"},

    // Desodorante Patrichs
    {id: 343, nombre: "Patrichs Black Label", medida: 1, familia: "perfumeria", cantidad: 1, precio: 362.14, img: "photo/09PatrichsBlack.png"},
    {id: 344, nombre: "Patrichs Aviator", medida: 1, familia: "perfumeria", cantidad: 1, precio: 362.14, img: "photo/09PatrichsAviator.png"},
    {id: 345, nombre: "Patrichs Grand prix", medida: 1, familia: "perfumeria", cantidad: 1, precio: 362.14, img: "photo/09PatrichsGrand.png"},
    // desodorante ciell
    {id: 346, nombre: "Desodorante Ciell", medida: 1, familia: "perfumeria", cantidad: 1, precio: 747.39, img: "photo/09ciell.png"},
    // desodorante Dove
    {id: 347, nombre: "Desodorante Dove", medida: 1, familia: "perfumeria", cantidad: 1, precio: 413.90, img: "photo/09desodoranteDove.png"},
    // desodorante Rolon Nivea
    {id: 348, nombre: "Desodorante Rolon Nivea", medida: 1, familia: "perfumeria", cantidad: 1, precio: 264.39, img: "photo/09desodoranteNivea.png"},

    // Dentrifico Colgate
    {id: 349, nombre: "Colgate Maxima Proteccion", medida: 1, familia: "perfumeria", cantidad: 1, precio: 310.39, img: "photo/09colgateMaximaP.png"},
    {id: 350, nombre: "Colgate Ultra Blanco", medida: 1, familia: "perfumeria", cantidad: 1, precio: 258.64, img: "photo/09colgateBlanco.png"},
    {id: 351, nombre: "Colgate Herbal", medida: 1, familia: "perfumeria", cantidad: 1, precio: 223.26, img: "photo/09colgateHerbal.png"},

    // jabon tocador ... Rexona
    {id: 352, nombre: "J. Tocador Rexona Sensible", medida: 1, familia: "perfumeria", cantidad: 1, precio: 147.09, img: "photo/09rexonaSensible.png"},
    {id: 353, nombre: "J. Tocador Rexona Cotton", medida: 1, familia: "perfumeria", cantidad: 1, precio: 147.09, img: "photo/09rexonaCotton.png"},
    {id: 354, nombre: "J. Tocador Rexona Orchid", medida: 1, familia: "perfumeria", cantidad: 1, precio: 147.09, img: "photo/09rexonaOrchid.png"},
    // Patricia Allen
    {id: 355, nombre: "J. Tocador P.Allen Humectacion", medida: 1, familia: "perfumeria", cantidad: 1, precio: 114.89, img: "photo/09pAllenHumecta.png"},
    {id: 356, nombre: "J. Tocador P.Allen Tropial", medida: 1, familia: "perfumeria", cantidad: 1, precio: 114.89, img: "photo/09pAllenTropical.png"},
    // Plusbelle
    {id: 357, nombre: "J. Tocador PLusbelle Energia", medida: 1, familia: "perfumeria", cantidad: 1, precio: 130.28, img: "photo/09plusEnergia.png"},
    {id: 358, nombre: "J. Tocador PLusbelle Frescura", medida: 1, familia: "perfumeria", cantidad: 1, precio: 130.28, img: "photo/09plusFrescura.png"},
    {id: 359, nombre: "J. Tocador PLusbelle Belleza", medida: 1, familia: "perfumeria", cantidad: 1, precio: 130.28, img: "photo/09plusBelleza.png"},
    {id: 360, nombre: "J. Tocador PLusbelle Relajación", medida: 1, familia: "perfumeria", cantidad: 1, precio: 130.28, img: "photo/09plusRelajacion.png"},
    // Jabon Neutro Odorno
    {id: 361, nombre: "Jabon Neutro Odorno", medida: 1, familia: "perfumeria", cantidad: 1, precio: 138.75, img: "photo/09odorno.png"},

    // Algodon Doncella
    {id: 362, nombre: "Algodoón Doncella", medida: 1, familia: "perfumeria", cantidad: 1, precio: 143.64, img: "photo/09algodonDoncella.png"},

    // Maquina BicFlex 3
    {id: 363, nombre: "Maquinita BicFlex3", medida: 6, familia: "perfumeria", cantidad: 1, precio: 77, img: "photo/09maquinitaBicFlex3.png"},

    // Toallita Lina
    {id: 364, nombre: "Toallitas Lina Anatomicas 8un", medida: 1, familia: "perfumeria", cantidad: 1, precio: 137.89, img: "photo/09linaAnatomica.png"},
    {id: 365, nombre: "Toallitas Lina Nocturna 8 un", medida: 1, familia: "perfumeria", cantidad: 1, precio: 299.88, img: "photo/09linaNocturna.png"},

    // Pañuelos Elite
    {id: 366, nombre: "Pañuelos Elite x 3unid", medida: 1, familia: "perfumeria", cantidad: 1, precio: 195.39, img: "photo/09panueloElite.png"},

    // ****************************************************** Limpieza ****************************************************** //

    // Detergente .. Magistral
    {id: 367, nombre: "Detergente Magistral 500", medida: 1, familia: "limpieza", cantidad: 1, precio: 555.33, img: "photo/10magistral500.png"},
    {id: 368, nombre: "Detergente Magistral 215", medida: 1, familia: "limpieza", cantidad: 1, precio: 252.89, img: "photo/10magistral500.png"},
    // Esencial
    {id: 369, nombre: "Det Esencial Limon", medida: 1, familia: "limpieza", cantidad: 1, precio: 134.44, img: "photo/10detergenteEsLimon.png"},
    {id: 370, nombre: "Det Esencial Hierbas", medida: 1, familia: "limpieza", cantidad: 1, precio: 134.44, img: "photo/10detergenteEsHierbas.png"},
    // Cif
    {id: 371, nombre: "Detergente Cif", medida: 1, familia: "limpieza", cantidad: 1, precio: 206.89, img: "photo/10detergenteCif.png"},

    // Lavandina ... Ayudìn
    {id: 372, nombre: "Lavandina Ayudin 2ltr", medida: 1, familia: "limpieza", cantidad: 1, precio: 264.39, img: "photo/10lavandinaAy2.png"},
    {id: 373, nombre: "Lavandina Ayudin 1ltr", medida: 1, familia: "limpieza", cantidad: 1, precio: 138, img: "photo/10lavandinaAy2.png"},
    // Esencial
    {id: 374, nombre: "Lavandina Esencial 1ltr", medida: 1, familia: "limpieza", cantidad: 1, precio: 114.89, img: "photo/10lavandinaEsencial.png"},

    // Desinfectante Ayudin
    {id: 375, nombre: "Desinfectante Ayudin Clasico", medida: 1, familia: "limpieza", cantidad: 1, precio: 206.89, img: "photo/10desinfectanteAyC.png"},
    {id: 376, nombre: "Desinfectante Ayudin Bebe", medida: 1, familia: "limpieza", cantidad: 1, precio: 206.89, img: "photo/10desinfectanteAyB.png"},

    // Desodorante ambiente Poet
    {id: 377, nombre: "Desodorante Ambiente Poet", medida: 1, familia: "limpieza", cantidad: 1, precio: 239.09, img: "photo/10ambientePoet.png"},

    // Jabon Piso Esencial
    {id: 378, nombre: "J. Psio Esencial Tropicales", medida: 1, familia: "limpieza", cantidad: 1, precio: 111.44, img: "photo/10pisoEsTropicales.png"},
    {id: 379, nombre: "J. Psio Esencial Lavanda", medida: 1, familia: "limpieza", cantidad: 1, precio: 111.44, img: "photo/10pisoEsLavanda.png"},

    // Jabon Polvo Ala
    {id: 380, nombre: "J. Polco Ala Regular 400gr", medida: 1, familia: "limpieza", cantidad: 1, precio: 189.64, img: "photo/10alaRegular.png"},
    {id: 381, nombre: "J. Polco Ala Matics 400gr", medida: 1, familia: "limpieza", cantidad: 1, precio: 189.64, img: "photo/10alaMatics.png"},
    
    // jabon Pan Ropa
    {id: 382, nombre: "J. pan Ropa", medida: 1, familia: "limpieza", cantidad: 1, precio: 160.89, img: "photo/10jabonPanRopa.png"},

    // Esponja Esencial
    {id: 383, nombre: "Esponja Esencial", medida: 1, familia: "limpieza", cantidad: 1, precio: 79.40, img: "photo/10esponjaEsencial.png"},

    // Limpia Vidrios
    {id: 384, nombre: "Limpiavidrios Zorro", medida: 1, familia: "limpieza", cantidad: 1, precio: 298, img: "photo/10limpiaVidriosZorro.png"},

    // Rollo Cocina Esencial
    {id: 385, nombre: "Rollo Cocina Esencial", medida: 1, familia: "limpieza", cantidad: 1, precio: 287.88, img: "photo/10rolloEsencial.png"},
    {id: 386, nombre: "Rollo Cocina Marolio", medida: 1, familia: "limpieza", cantidad: 1, precio: 287.88, img: "photo/10rolloMarolio.png"},

    // Papel Higienico Esencial
    {id: 387, nombre: "Papel Hig Esencial texturado 6x30", medida: 1, familia: "limpieza", cantidad: 1, precio: 413.89, img: "photo/10papelHigText6.jpg"},
    {id: 388, nombre: "Papel Hig Esencial Texturado 4x30", medida: 1, familia: "limpieza", cantidad: 1, precio: 272.44, img: "photo/10papelHigText4.png"},
    {id: 389, nombre: "Papel Hig Esencial Blanco 4x30", medida: 1, familia: "limpieza", cantidad: 1, precio: 310.38, img: "photo/10papelHigBlanco.jpg"},

    // Bolsa basura
    {id: 390, nombre: "Bolsa Residuos 50x70", medida: 1, familia: "limpieza", cantidad: 1, precio: 126.65, img: "photo/10bolsaEsencial.png"},
    {id: 391, nombre: "Bolsa Residuos 60x90", medida: 1, familia: "limpieza", cantidad: 1, precio: 289.67, img: "photo/10bolsaEsencial.png"},
    {id: 392, nombre: "Bolsa Residuos 90x120", medida: 1, familia: "limpieza", cantidad: 1, precio: 820.97, img: "photo/10bolsaEsencial.png"},

    // Lamparas Esencial de Luz
    {id: 393, nombre: "Lámpara Esencial 7w", medida: 1, familia: "limpieza", cantidad: 1, precio: 208.89, img: "photo/10lampara7.png"},
    {id: 394, nombre: "Lámpara Esencial 9w", medida: 1, familia: "limpieza", cantidad: 1, precio: 212.64, img: "photo/10lampara9.png"},
    {id: 395, nombre: "Lámpara Esencial 12w", medida: 1, familia: "limpieza", cantidad: 1, precio: 311.88, img: "photo/10lampara.png"},

    // Insecticida Selton
    {id: 396, nombre: "Insecticida Selton", medida: 1, familia: "limpieza", cantidad: 1, precio: 311.88, img: "photo/10insecticida.png"},
    {id: 397, nombre: "Raid Mata Cucaracha", medida: 1, familia: "limpieza", cantidad: 1, precio: 507.02, img: "photo/10raid.png"}

];

// 399