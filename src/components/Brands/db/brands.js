const allBrands = [
    { value: 1, label: "A. Lange & Söhne" },
    { value: 2, label: "ABP Paris" },
    { value: 3, label: "AD-Chronographen" },
    { value: 4, label: "Aerowatch" },
    { value: 5, label: "Aigle" },
    { value: 6, label: "Aigner" },
    { value: 7, label: "Alain Silberstein" },
    { value: 8, label: "Alexander Shorokhoff" },
    { value: 9, label: "Alfred Dunhill" },
    { value: 10, label: "Alfred Rochat & Fils" },
    { value: 11, label: "Alpina" },
    { value: 12, label: "Andersen Genève" },
    { value: 13, label: "Angelus" },
    { value: 14, label: "Angular Momentum" },
    { value: 15, label: "Anonimo" },
    { value: 16, label: "Apple" },
    { value: 17, label: "Aquanautic" },
    { value: 18, label: "Aquastar" },
    { value: 19, label: "Aristo" },
    { value: 20, label: "Armand Nicolet" },
    { value: 21, label: "Armani" },
    { value: 22, label: "Armin Strom" },
    { value: 23, label: "Arnold & Son" },
    { value: 24, label: "Artisanal" },
    { value: 25, label: "Artya" },
    { value: 26, label: "Askania" },
    { value: 27, label: "Ateliers deMonaco" },
    { value: 28, label: "Atlantic" },
    { value: 29, label: "Audemars Piguet" },
    { value: 30, label: "Auguste Reymond" },
    { value: 31, label: "Auricoste" },
    { value: 32, label: "Avier" },
    { value: 33, label: "Azimuth" },
    { value: 34, label: "Azzaro" },
    { value: 35, label: "B.R.M" },
    { value: 36, label: "Ball" },
    { value: 37, label: "Balmain" },
    { value: 38, label: "Baume & Mercier" },
    { value: 39, label: "Bedat & Co" },
    { value: 40, label: "Bell & Ross" },
    { value: 41, label: "Benrus" },
    { value: 42, label: "Benzinger" },
    { value: 43, label: "Berne" },
    { value: 44, label: "Bertolucci" },
    { value: 45, label: "Bifora" },
    { value: 46, label: "Black-Out Concept" },
    { value: 47, label: "Blacksand" },
    { value: 48, label: "Blancier" },
    { value: 49, label: "Blancpain" },
    { value: 50, label: "blu" },
    { value: 51, label: "Boegli" },
    { value: 52, label: "Bogner Time" },
    { value: 53, label: "Bomberg" },
    { value: 54, label: "Boucheron" },
    { value: 55, label: "Bovet" },
    { value: 56, label: "Breguet" },
    { value: 57, label: "Breil" },
    { value: 58, label: "Breitling" },
    { value: 59, label: "Bremont" },
    { value: 60, label: "Bruno Söhnle" },
    { value: 61, label: "Bulgari" },
    { value: 62, label: "Bulova" },
    { value: 63, label: "Bunz" },
    { value: 64, label: "Burberry" },
    { value: 65, label: "BWC-Swiss" },
    { value: 66, label: "C.H. Wolf" },
    { value: 67, label: "Cabestan" },
    { value: 68, label: "Camel Active" },
    { value: 69, label: "Camille Fournet" },
    { value: 70, label: "Candino" },
    { value: 71, label: "Carl F. Bucherer" },
    { value: 72, label: "Carlo Ferrara" },
    { value: 73, label: "Cartier" },
    { value: 74, label: "Casio" },
    { value: 75, label: "Catamaran" },
    { value: 76, label: "Catena" },
    { value: 77, label: "Cattin" },
    { value: 78, label: "Century" },
    { value: 79, label: "Cerruti" },
    { value: 80, label: "Certina" },
    { value: 81, label: "Chanel" },
    { value: 82, label: "Charmex" },
    { value: 83, label: "Charriol" },
    { value: 84, label: "Chase-Durer" },
    { value: 85, label: "Chaumet" },
    { value: 86, label: "Chopard" },
    { value: 87, label: "Chris Benz" },
    { value: 88, label: "Christiaan v.d. Klaauw" },
    { value: 89, label: "Christophe Claret" },
    { value: 90, label: "Chronographe Suisse Cie" },
    { value: 91, label: "Chronoswiss" },
    { value: 92, label: "Churpfälzische Uhrenmanufaktur" },
    { value: 93, label: "Citizen" },
    { value: 94, label: "ck Calvin Klein" },
    { value: 95, label: "Claude Meylan" },
    { value: 96, label: "Clerc" },
    { value: 97, label: "Concord" },
    { value: 98, label: "Condor" },
    { value: 99, label: "Cornehl" },
    { value: 100, label: "Cortébert" },
    { value: 101, label: "Corum" },
    { value: 102, label: "Cronus" },
    { value: 103, label: "Cuervo y Sobrinos" },
    { value: 104, label: "Cvstos" },
    { value: 105, label: "CWC" },
    { value: 106, label: "Cyclos" },
    { value: 107, label: "Cyma" },
    { value: 108, label: "Cyrus" },
    { value: 109, label: "D.Dornblüth & Sohn" },
    { value: 110, label: "Damasko" },
    { value: 111, label: "Daniel Roth" },
    { value: 112, label: "Davidoff" },
    { value: 113, label: "Davosa" },
    { value: 114, label: "De Bethune" },
    { value: 115, label: "De Grisogono" },
    { value: 116, label: "Deep Blue" },
    { value: 117, label: "DeLaCour" },
    { value: 118, label: "DeLaneau" },
    { value: 119, label: "Delma" },
    { value: 120, label: "Devon" },
    { value: 121, label: "Dewitt" },
    { value: 122, label: "Diesel" },
    { value: 123, label: "Dietrich" },
    { value: 124, label: "Dior" },
    { value: 125, label: "Dodane" },
    { value: 126, label: "Dolce & Gabbana" },
    { value: 127, label: "Doxa" },
    { value: 128, label: "Dubey & Schaldenbrand" },
    { value: 129, label: "DuBois 1785" },
    { value: 130, label: "DuBois et fils" },
    { value: 131, label: "Dufeau" },
    { value: 132, label: "Dugena" },
    { value: 133, label: "Dürmeister" },
    { value: 134, label: "Ebel" },
    { value: 135, label: "Eberhard & Co." },
    { value: 136, label: "Edox" },
    { value: 137, label: "Eichmüller" },
    { value: 138, label: "Election" },
    { value: 139, label: "Elgin" },
    { value: 140, label: "Elysee" },
    { value: 141, label: "Enicar" },
    { value: 142, label: "Ennebi" },
    { value: 143, label: "Epos" },
    { value: 144, label: "Ernest Borel" },
    { value: 145, label: "Ernst Benz" },
    { value: 146, label: "Erwin Sattler" },
    { value: 147, label: "Esprit" },
    { value: 148, label: "Eterna" },
    { value: 149, label: "Eulit" },
    { value: 150, label: "Eulux" },
    { value: 151, label: "F.P.Journe" },
    { value: 152, label: "Fabergé" },
    { value: 153, label: "Favre-Leuba" },
    { value: 154, label: "Fendi" },
    { value: 155, label: "Festina" },
    { value: 156, label: "Fluco" },
    { value: 157, label: "Fludo" },
    { value: 158, label: "Formex" },
    { value: 159, label: "Fortis" },
    { value: 160, label: "Forum" },
    { value: 161, label: "Fossil" },
    { value: 162, label: "Franc Vila" },
    { value: 163, label: "Franck Dubarry" },
    { value: 164, label: "Franck Muller" },
    { value: 165, label: "Frederique Constant" },
    { value: 166, label: "Gaga Milano" },
    { value: 167, label: "Gallet" },
    { value: 168, label: "Gant" },
    { value: 169, label: "Gardé" },
    { value: 170, label: "Garmin" },
    { value: 171, label: "Georges V" },
    { value: 172, label: "Germano & Walter" },
    { value: 173, label: "Gevril" },
    { value: 174, label: "Girard Perregaux" },
    { value: 175, label: "Giuliano Mazzuoli" },
    { value: 176, label: "Glashütte Original" },
    { value: 177, label: "Glycine" },
    { value: 178, label: "Graf" },
    { value: 179, label: "Graham" },
    { value: 180, label: "Greubel Forsey" },
    { value: 181, label: "Grovana" },
    { value: 182, label: "Gruen" },
    { value: 183, label: "Grönefeld" },
    { value: 184, label: "GUB Glashütte" },
    { value: 185, label: "Gucci" },
    { value: 186, label: "Guess" },
    { value: 187, label: "Guy Laroche" },
    { value: 188, label: "Gérald Genta" },
    { value: 189, label: "Gübelin" },
    { value: 190, label: "H.I.D. Watch" },
    { value: 191, label: "H.Moser & Cie." },
    { value: 192, label: "Habring²" },
    { value: 193, label: "Hacher" },
    { value: 194, label: "Haemmer" },
    { value: 195, label: "Hagal" },
    { value: 196, label: "Hamilton" },
    { value: 197, label: "Hanhart" },
    { value: 198, label: "Harry Winston" },
    { value: 199, label: "Hautlence" },
    { value: 200, label: "HD3" },
    { value: 201, label: "Hebdomas" },
    { value: 202, label: "Hebe" },
    { value: 203, label: "Hentschel Hamburg" },
    { value: 204, label: "Hermès" },
    { value: 205, label: "Herzog" },
    { value: 206, label: "Heuer" },
    { value: 207, label: "Hirsch" },
    { value: 208, label: "Hublot" },
    { value: 209, label: "Hugo Boss" },
    { value: 210, label: "HYT" },
    { value: 211, label: "Ice Watch" },
    { value: 212, label: "Ikepod" },
    { value: 213, label: "Illinois" },
    { value: 214, label: "Ingersoll" },
    { value: 215, label: "Invicta" },
    { value: 216, label: "Itay Noy" },
    { value: 217, label: "IWC" },
    { value: 218, label: "Jacob & Co." },
    { value: 219, label: "Jacques Etoile" },
    { value: 220, label: "Jacques Lemans" },
    { value: 221, label: "Jaeger-LeCoultre" },
    { value: 222, label: "Jaermann & Stübi" },
    { value: 223, label: "Jaquet-Droz" },
    { value: 224, label: "JB Gioacchino" },
    { value: 225, label: "Jean d'Eve" },
    { value: 226, label: "Jean Lassale" },
    { value: 227, label: "Jean Marcel" },
    { value: 228, label: "JeanRichard" },
    { value: 229, label: "Joop" },
    { value: 230, label: "Jorg Hysek" },
    { value: 231, label: "Jules Jürgensen" },
    { value: 232, label: "Junghans" },
    { value: 233, label: "Junkers" },
    { value: 234, label: "Juvenia" },
    { value: 235, label: "Kelek" },
    { value: 236, label: "KHS" },
    { value: 237, label: "KHS-Watch" },
    { value: 238, label: "Kienzle" },
    { value: 239, label: "Kobold" },
    { value: 240, label: "Konstantin Chaykin" },
    { value: 241, label: "Korloff" },
    { value: 242, label: "Krieger" },
    { value: 243, label: "Kronsegler" },
    { value: 244, label: "L'Epée" },
    { value: 245, label: "L.Leroy" },
    { value: 246, label: "Laco" },
    { value: 247, label: "Lacoste" },
    { value: 248, label: "Lancaster" },
    { value: 249, label: "Lang & Heyne" },
    { value: 250, label: "Laurent Ferrier" },
    { value: 251, label: "Lebeau-Courally" },
    { value: 252, label: "Leinfelder" },
    { value: 253, label: "Lemania" },
    { value: 254, label: "Leonidas" },
    { value: 255, label: "Limes" },
    { value: 256, label: "Lip" },
    { value: 257, label: "Liv Watches" },
    { value: 258, label: "Locman" },
    { value: 259, label: "Longines" },
    { value: 260, label: "Longio" },
    { value: 261, label: "Lorenz" },
    { value: 262, label: "Lorus" },
    { value: 263, label: "Louis Erard" },
    { value: 264, label: "Louis Moinet" },
    { value: 265, label: "Louis Vuitton" },
    { value: 266, label: "Louis XVI" },
    { value: 267, label: "Lucien Rochat" },
    { value: 268, label: "Ludovic Ballouard" },
    { value: 269, label: "Luminox" },
    { value: 270, label: "Lüm-Tec" },
    { value: 271, label: "M&M Swiss Watch" },
    { value: 272, label: "Marcello C." },
    { value: 273, label: "Margi" },
    { value: 274, label: "Marlboro" },
    { value: 275, label: "Martin Braun" },
    { value: 276, label: "Marvin" },
    { value: 277, label: "Maserati" },
    { value: 278, label: "Mathey-Tissot" },
    { value: 279, label: "Mauboussin" },
    { value: 280, label: "Maurice de Mauriac" },
    { value: 281, label: "Mb&f" },
    { value: 282, label: "Meccaniche Veloci" },
    { value: 283, label: "Meistersinger" },
    { value: 284, label: "Mercure" },
    { value: 285, label: "Meyers" },
    { value: 286, label: "Michael Bittel" },
    { value: 287, label: "Michael Kors" },
    { value: 288, label: "Michel Herbelin" },
    { value: 289, label: "Michel Jordi" },
    { value: 290, label: "Michele" },
    { value: 291, label: "Mido" },
    { value: 292, label: "Milleret" },
    { value: 293, label: "Milus" },
    { value: 294, label: "Minerva" },
    { value: 295, label: "Momentum" },
    { value: 296, label: "Momo Design" },
    { value: 297, label: "Mondaine" },
    { value: 298, label: "Mondia" },
    { value: 299, label: "Montano" },
    { value: 300, label: "Montblanc" },
    { value: 301, label: "Montega" },
    { value: 302, label: "Morellato" },
    { value: 303, label: "Moritz Grossmann" },
    { value: 304, label: "Movado" },
    { value: 305, label: "Mühle Glashütte" },
    { value: 306, label: "N.O.A" },
    { value: 307, label: "Naj-Oleari" },
    { value: 308, label: "Nautica" },
    { value: 309, label: "Nauticfish" },
    { value: 310, label: "Nike" },
    { value: 311, label: "Nina Ricci" },
    { value: 312, label: "Nivada" },
    { value: 313, label: "Nivrel" },
    { value: 314, label: "Nixon" },
    { value: 315, label: "NOMOS" },
    { value: 316, label: "Nouvelle Horlogerie Calabrese (NHC)" },
    { value: 317, label: "ODM" },
    { value: 318, label: "Officina del Tempo" },
    { value: 319, label: "Offshore Limited" },
    { value: 320, label: "Ollech & Wajs" },
    { value: 321, label: "Omega" },
    { value: 322, label: "Orator" },
    { value: 323, label: "Orbita" },
    { value: 324, label: "Orfina" },
    { value: 325, label: "Orient" },
    { value: 326, label: "Oris" },
    { value: 327, label: "Otumm" },
    { value: 328, label: "Pacardt" },
    { value: 329, label: "Panerai" },
    { value: 330, label: "Parmigiani Fleurier" },
    { value: 331, label: "Patek Philippe" },
    { value: 332, label: "Paul Picot" },
    { value: 333, label: "Pequignet" },
    { value: 334, label: "Perigáum" },
    { value: 335, label: "Perrelet" },
    { value: 336, label: "Perseo" },
    { value: 337, label: "Phantoms" },
    { value: 338, label: "Philip Stein" },
    { value: 339, label: "Philip Watch" },
    { value: 340, label: "Piaget" },
    { value: 341, label: "Pierre Balmain" },
    { value: 342, label: "Pierre Cardin" },
    { value: 343, label: "Pierre DeRoche" },
    { value: 344, label: "Pierre Kunz" },
    { value: 345, label: "Police" },
    { value: 346, label: "Poljot" },
    { value: 347, label: "Porsche Design" },
    { value: 348, label: "Prim" },
    { value: 349, label: "Pro-Hunter" },
    { value: 350, label: "Pryngeps" },
    { value: 351, label: "Pulsar" },
    { value: 352, label: "Puma" },
    { value: 353, label: "Quinting" },
    { value: 354, label: "Rado" },
    { value: 355, label: "Raidillon" },
    { value: 356, label: "Rainer Brand" },
    { value: 357, label: "Rainer Nienaber" },
    { value: 358, label: "Ralf Tech" },
    { value: 359, label: "Ralph Lauren" },
    { value: 360, label: "Raymond Weil" },
    { value: 361, label: "Rebellion" },
    { value: 362, label: "REC Watches" },
    { value: 363, label: "Ressence" },
    { value: 364, label: "RGM" },
    { value: 365, label: "Richard Mille" },
    { value: 366, label: "Rios1931" },
    { value: 367, label: "Roamer" },
    { value: 368, label: "Roger Dubuis" },
    { value: 369, label: "Rolex" },
    { value: 370, label: "Rolf Lang" },
    { value: 371, label: "Romain Jerome" },
    { value: 372, label: "Rothenschild" },
    { value: 373, label: "RSW" },
    { value: 374, label: "Ryser Kentfield" },
    { value: 375, label: "S.Oliver" },
    { value: 376, label: "S.T. Dupont" },
    { value: 377, label: "Salvatore Ferragamo" },
    { value: 378, label: "Sarcar" },
    { value: 379, label: "Scalfaro" },
    { value: 380, label: "Schaumburg" },
    { value: 381, label: "Schwarz Etienne" },
    { value: 382, label: "Sea-God" },
    { value: 383, label: "Sea-Gull" },
    { value: 384, label: "Sector" },
    { value: 385, label: "Seiko" },
    { value: 386, label: "Sevenfriday" },
    { value: 387, label: "Shinola" },
    { value: 388, label: "Sinn" },
    { value: 389, label: "Skagen" },
    { value: 390, label: "Snyper" },
    { value: 391, label: "Sothis" },
    { value: 392, label: "Speake-Marin" },
    { value: 393, label: "Squale" },
    { value: 394, label: "Starkiin" },
    { value: 395, label: "Steelcraft" },
    { value: 396, label: "Steinhart" },
    { value: 397, label: "Stowa" },
    { value: 398, label: "Strom" },
    { value: 399, label: "Stuhrling" },
    { value: 400, label: "Swatch" },
    { value: 401, label: "Swiss Military" },
    { value: 402, label: "TAG Heuer" },
    { value: 403, label: "Tavannes" },
    { value: 404, label: "TB Buti" },
    { value: 405, label: "Technomarine" },
    { value: 406, label: "Technos" },
    { value: 407, label: "Temption" },
    { value: 408, label: "Tempvs Compvtare" },
    { value: 409, label: "Tendence" },
    { value: 410, label: "Terra Cielo Mare" },
    { value: 411, label: "Theorein" },
    { value: 412, label: "Thomas Ninchritz" },
    { value: 413, label: "Thorr" },
    { value: 414, label: "Tiffany" },
    { value: 415, label: "Timberland Watches" },
    { value: 416, label: "Timex" },
    { value: 417, label: "Tissot" },
    { value: 418, label: "Tokyo Flash" },
    { value: 419, label: "Tommy Hilfiger" },
    { value: 420, label: "Tonino Lamborghini" },
    { value: 421, label: "Traser" },
    { value: 422, label: "Tudor" },
    { value: 423, label: "Tutima" },
    { value: 424, label: "TW Steel" },
    { value: 425, label: "U-Boat" },
    { value: 426, label: "Ulysse Nardin" },
    { value: 427, label: "Unikatuhren" },
    { value: 428, label: "Union Glashütte" },
    { value: 429, label: "Universal Genève" },
    { value: 430, label: "Urban Jürgensen" },
    { value: 431, label: "Urwerk" },
    { value: 432, label: "Vacheron Constantin" },
    { value: 433, label: "Valbray" },
    { value: 434, label: "Valentino" },
    { value: 435, label: "Van Cleef & Arpels" },
    { value: 436, label: "Van Der Bauwede" },
    { value: 437, label: "Vangarde" },
    { value: 438, label: "Ventura" },
    { value: 439, label: "Versace" },
    { value: 440, label: "Vianney Halter" },
    { value: 441, label: "Viceroy" },
    { value: 442, label: "Victorinox Swiss Army" },
    { value: 443, label: "Villemont" },
    { value: 444, label: "Vincent Calabrese" },
    { value: 445, label: "Vixa" },
    { value: 446, label: "Vogard" },
    { value: 447, label: "Vollmer" },
    { value: 448, label: "Volna" },
    { value: 449, label: "Vostok" },
    { value: 450, label: "Voutilainen" },
    { value: 451, label: "Vulcain" },
    { value: 452, label: "Wakmann" },
    { value: 453, label: "Waltham" },
    { value: 454, label: "Welder" },
    { value: 455, label: "Wempe" },
    { value: 456, label: "Wenger" },
    { value: 457, label: "Werenbach" },
    { value: 458, label: "Wittnauer" },
    { value: 459, label: "Wyler" },
    { value: 460, label: "Wyler Vetta" },
    { value: 461, label: "Xemex" },
    { value: 462, label: "Xetum" },
    { value: 463, label: "Yantar" },
    { value: 464, label: "Yes Watch" },
    { value: 465, label: "Yves Saint Laurent" },
    { value: 466, label: "Zenith" },
    { value: 467, label: "Zeno-Watch Basel" },
    { value: 468, label: "ZentRa" },
    { value: 469, label: "Zeppelin" },
    { value: 470, label: "Zodiac" },
    { value: 471, label: "CHONOSWISS" },
    {value: 472, label: "Girard Perregaux"}


];

export  default  allBrands;
// const fs = require('fs');
// const readline = require('readline');

// async function processLineByLine() {
//   const fileStream = fs.createReadStream('brands.txt');

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.
//   let i = 1;
//   for await (const line of rl) {
//     // Each line in input.txt will be successively available here as `line`.
//     console.log(`{value: ${i}, label: ${line}},`);
//     i++;
//   }
// }

// processLineByLine();