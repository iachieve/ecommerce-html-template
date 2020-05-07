const data = [
    {
        brandId: "b1",
        brandName: "A. Lange & Söhne",
        modelFamilies: [{
            modelId: "m1",
            modelName: "Lange 1"
        },
            {
                modelId: "m2",
                modelName: "Saxonia 1"
            },
            {
                modelId: "m3",
                modelName: "1815"
            }
        ]
    },
    {
        brandId: "b2",
        brandName: "ABP Paris",
        modelFamilies: [{
            modelId: "m3",
            modelName: "ABP Paris m3"
        },
            {
                modelId: "m4",
                modelName: "ABP Paris m4"
            },
            {
                modelId: "m5",
                modelName: "ABP Paris m5"
            }
        ]
    },
    {brandId: "b3", brandName: "AD-Chronographen"},
    {brandId: "b4", brandName: "Aerowatch"},
    {brandId: "b5", brandName: "Aigle"},
    {brandId: "b6", brandName: "Aigner"},
    {brandId: "b7", brandName: "Alain Silberstein"},
    {brandId: "b8", brandName: "Alexander Shorokhoff"},
    {brandId: "b9", brandName: "Alfred Dunhill"},
    {brandId: "b10", brandName: "Alfred Rochat & Fils"},
    {brandId: "b11", brandName: "Alpina"},
    {brandId: "b12", brandName: "Andersen Genève"},
    {brandId: "b13", brandName: "Angelus"},
    {brandId: "b14", brandName: "Angular Momentum"},
    {brandId: "b15", brandName: "Anonimo"},
    {brandId: "b16", brandName: "Apple"},
    {brandId: "b17", brandName: "Aquanautic"},
    {brandId: "b18", brandName: "Aquastar"},
    {brandId: "b19", brandName: "Aristo"},
    {brandId: "b20", brandName: "Armand Nicolet"},
    {brandId: "b21", brandName: "Armani"},
    {brandId: "b22", brandName: "Armin Strom"},
    {brandId: "b23", brandName: "Arnold & Son"},
    {brandId: "b24", brandName: "Artisanal"},
    {brandId: "b25", brandName: "Artya"},
    {brandId: "b26", brandName: "Askania"},
    {brandId: "b27", brandName: "Ateliers deMonaco"},
    {brandId: "b28", brandName: "Atlantic"},
    {brandId: "b29", brandName: "Audemars Piguet"},
    {brandId: "b30", brandName: "Auguste Reymond"},
    {brandId: "b31", brandName: "Auricoste"},
    {brandId: "b32", brandName: "Avier"},
    {brandId: "b33", brandName: "Azimuth"},
    {brandId: "b34", brandName: "Azzaro"},
    {brandId: "b35", brandName: "B.R.M"},
    {brandId: "b36", brandName: "Ball"},
    {brandId: "b37", brandName: "Balmain"},
    {brandId: "b38", brandName: "Baume & Mercier"},
    {brandId: "b39", brandName: "Bedat & Co"},
    {brandId: "b40", brandName: "Bell & Ross"},
    {brandId: "b41", brandName: "Benrus"},
    {brandId: "b42", brandName: "Benzinger"},
    {brandId: "b43", brandName: "Berne"},
    {brandId: "b44", brandName: "Bertolucci"},
    {brandId: "b45", brandName: "Bifora"},
    {brandId: "b46", brandName: "Black-Out Concept"},
    {brandId: "b47", brandName: "Blacksand"},
    {brandId: "b48", brandName: "Blancier"},
    {brandId: "b49", brandName: "Blancpain"},
    {brandId: "b50", brandName: "blu"},
    {brandId: "b51", brandName: "Boegli"},
    {brandId: "b52", brandName: "Bogner Time"},
    {brandId: "b53", brandName: "Bomberg"},
    {brandId: "b54", brandName: "Boucheron"},
    {brandId: "b55", brandName: "Bovet"},
    {brandId: "b56", brandName: "Breguet"},
    {brandId: "b57", brandName: "Breil"},
    {brandId: "b58", brandName: "Breitling"},
    {brandId: "b59", brandName: "Bremont"},
    {brandId: "b60", brandName: "Bruno Söhnle"},
    {brandId: "b61", brandName: "Bulgari"},
    {brandId: "b62", brandName: "Bulova"},
    {brandId: "b63", brandName: "Bunz"},
    {brandId: "b64", brandName: "Burberry"},
    {brandId: "b65", brandName: "BWC-Swiss"},
    {brandId: "b66", brandName: "C.H. Wolf"},
    {brandId: "b67", brandName: "Cabestan"},
    {brandId: "b68", brandName: "Camel Active"},
    {brandId: "b69", brandName: "Camille Fournet"},
    {brandId: "b70", brandName: "Candino"},
    {brandId: "b71", brandName: "Carl F. Bucherer"},
    {brandId: "b72", brandName: "Carlo Ferrara"},
    {brandId: "b73", brandName: "Cartier"},
    {brandId: "b74", brandName: "Casio"},
    {brandId: "b75", brandName: "Catamaran"},
    {brandId: "b76", brandName: "Catena"},
    {brandId: "b77", brandName: "Cattin"},
    {brandId: "b78", brandName: "Century"},
    {brandId: "b79", brandName: "Cerruti"},
    {brandId: "b80", brandName: "Certina"},
    {brandId: "b81", brandName: "Chanel"},
    {brandId: "b82", brandName: "Charmex"},
    {brandId: "b83", brandName: "Charriol"},
    {brandId: "b84", brandName: "Chase-Durer"},
    {brandId: "b85", brandName: "Chaumet"},
    {brandId: "b86", brandName: "Chopard"},
    {brandId: "b87", brandName: "Chris Benz"},
    {brandId: "b88", brandName: "Christiaan v.d. Klaauw"},
    {brandId: "b89", brandName: "Christophe Claret"},
    {brandId: "b90", brandName: "Chronographe Suisse Cie"},
    {brandId: "b91", brandName: "Chronoswiss"},
    {brandId: "b92", brandName: "Churpfälzische Uhrenmanufaktur"},
    {brandId: "b93", brandName: "Citizen"},
    {brandId: "b94", brandName: "ck Calvin Klein"},
    {brandId: "b95", brandName: "Claude Meylan"},
    {brandId: "b96", brandName: "Clerc"},
    {brandId: "b97", brandName: "Concord"},
    {brandId: "b98", brandName: "Condor"},
    {brandId: "b99", brandName: "Cornehl"},
    {brandId: "b100", brandName: "Cortébert"},
    {brandId: "b101", brandName: "Corum"},
    {brandId: "b102", brandName: "Cronus"},
    {brandId: "b103", brandName: "Cuervo y Sobrinos"},
    {brandId: "b104", brandName: "Cvstos"},
    {brandId: "b105", brandName: "CWC"},
    {brandId: "b106", brandName: "Cyclos"},
    {brandId: "b107", brandName: "Cyma"},
    {brandId: "b108", brandName: "Cyrus"},
    {brandId: "b109", brandName: "D.Dornblüth & Sohn"},
    {brandId: "b110", brandName: "Damasko"},
    {brandId: "b111", brandName: "Daniel Roth"},
    {brandId: "b112", brandName: "Davidoff"},
    {brandId: "b113", brandName: "Davosa"},
    {brandId: "b114", brandName: "De Bethune"},
    {brandId: "b115", brandName: "De Grisogono"},
    {brandId: "b116", brandName: "Deep Blue"},
    {brandId: "b117", brandName: "DeLaCour"},
    {brandId: "b118", brandName: "DeLaneau"},
    {brandId: "b119", brandName: "Delma"},
    {brandId: "b120", brandName: "Devon"},
    {brandId: "b121", brandName: "Dewitt"},
    {brandId: "b122", brandName: "Diesel"},
    {brandId: "b123", brandName: "Dietrich"},
    {brandId: "b124", brandName: "Dior"},
    {brandId: "b125", brandName: "Dodane"},
    {brandId: "b126", brandName: "Dolce & Gabbana"},
    {brandId: "b127", brandName: "Doxa"},
    {brandId: "b128", brandName: "Dubey & Schaldenbrand"},
    {brandId: "b129", brandName: "DuBois 1785"},
    {brandId: "b130", brandName: "DuBois et fils"},
    {brandId: "b131", brandName: "Dufeau"},
    {brandId: "b132", brandName: "Dugena"},
    {brandId: "b133", brandName: "Dürmeister"},
    {brandId: "b134", brandName: "Ebel"},
    {brandId: "b135", brandName: "Eberhard & Co."},
    {brandId: "b136", brandName: "Edox"},
    {brandId: "b137", brandName: "Eichmüller"},
    {brandId: "b138", brandName: "Election"},
    {brandId: "b139", brandName: "Elgin"},
    {brandId: "b140", brandName: "Elysee"},
    {brandId: "b141", brandName: "Enicar"},
    {brandId: "b142", brandName: "Ennebi"},
    {brandId: "b143", brandName: "Epos"},
    {brandId: "b144", brandName: "Ernest Borel"},
    {brandId: "b145", brandName: "Ernst Benz"},
    {brandId: "b146", brandName: "Erwin Sattler"},
    {brandId: "b147", brandName: "Esprit"},
    {brandId: "b148", brandName: "Eterna"},
    {brandId: "b149", brandName: "Eulit"},
    {brandId: "b150", brandName: "Eulux"},
    {brandId: "b151", brandName: "F.P.Journe"},
    {brandId: "b152", brandName: "Fabergé"},
    {brandId: "b153", brandName: "Favre-Leuba"},
    {brandId: "b154", brandName: "Fendi"},
    {brandId: "b155", brandName: "Festina"},
    {brandId: "b156", brandName: "Fluco"},
    {brandId: "b157", brandName: "Fludo"},
    {brandId: "b158", brandName: "Formex"},
    {brandId: "b159", brandName: "Fortis"},
    {brandId: "b160", brandName: "Forum"},
    {brandId: "b161", brandName: "Fossil"},
    {brandId: "b162", brandName: "Franc Vila"},
    {brandId: "b163", brandName: "Franck Dubarry"},
    {brandId: "b164", brandName: "Franck Muller"},
    {brandId: "b165", brandName: "Frederique Constant"},
    {brandId: "b166", brandName: "Gaga Milano"},
    {brandId: "b167", brandName: "Gallet"},
    {brandId: "b168", brandName: "Gant"},
    {brandId: "b169", brandName: "Gardé"},
    {brandId: "b170", brandName: "Garmin"},
    {brandId: "b171", brandName: "Georges V"},
    {brandId: "b172", brandName: "Germano & Walter"},
    {brandId: "b173", brandName: "Gevril"},
    {brandId: "b174", brandName: "Girard Perregaux"},
    {brandId: "b175", brandName: "Giuliano Mazzuoli"},
    {brandId: "b176", brandName: "Glashütte Original"},
    {brandId: "b177", brandName: "Glycine"},
    {brandId: "b178", brandName: "Graf"},
    {brandId: "b179", brandName: "Graham"},
    {brandId: "b180", brandName: "Greubel Forsey"},
    {brandId: "b181", brandName: "Grovana"},
    {brandId: "b182", brandName: "Gruen"},
    {brandId: "b183", brandName: "Grönefeld"},
    {brandId: "b184", brandName: "GUB Glashütte"},
    {brandId: "b185", brandName: "Gucci"},
    {brandId: "b186", brandName: "Guess"},
    {brandId: "b187", brandName: "Guy Laroche"},
    {brandId: "b188", brandName: "Gérald Genta"},
    {brandId: "b189", brandName: "Gübelin"},
    {brandId: "b190", brandName: "H.I.D. Watch"},
    {brandId: "b191", brandName: "H.Moser & Cie."},
    {brandId: "b192", brandName: "Habring²"},
    {brandId: "b193", brandName: "Hacher"},
    {brandId: "b194", brandName: "Haemmer"},
    {brandId: "b195", brandName: "Hagal"},
    {brandId: "b196", brandName: "Hamilton"},
    {brandId: "b197", brandName: "Hanhart"},
    {brandId: "b198", brandName: "Harry Winston"},
    {brandId: "b199", brandName: "Hautlence"},
    {brandId: "b200", brandName: "HD3"},
    {brandId: "b201", brandName: "Hebdomas"},
    {brandId: "b202", brandName: "Hebe"},
    {brandId: "b203", brandName: "Hentschel Hamburg"},
    {brandId: "b204", brandName: "Hermès"},
    {brandId: "b205", brandName: "Herzog"},
    {brandId: "b206", brandName: "Heuer"},
    {brandId: "b207", brandName: "Hirsch"},
    {brandId: "b208", brandName: "Hublot"},
    {brandId: "b209", brandName: "Hugo Boss"},
    {brandId: "b210", brandName: "HYT"},
    {brandId: "b211", brandName: "Ice Watch"},
    {brandId: "b212", brandName: "Ikepod"},
    {brandId: "b213", brandName: "Illinois"},
    {brandId: "b214", brandName: "Ingersoll"},
    {brandId: "b215", brandName: "Invicta"},
    {brandId: "b216", brandName: "Itay Noy"},
    {brandId: "b217", brandName: "IWC"},
    {brandId: "b218", brandName: "Jacob & Co."},
    {brandId: "b219", brandName: "Jacques Etoile"},
    {brandId: "b220", brandName: "Jacques Lemans"},
    {brandId: "b221", brandName: "Jaeger-LeCoultre"},
    {brandId: "b222", brandName: "Jaermann & Stübi"},
    {brandId: "b223", brandName: "Jaquet-Droz"},
    {brandId: "b224", brandName: "JB Gioacchino"},
    {brandId: "b225", brandName: "Jean d'Eve"},
    {brandId: "b226", brandName: "Jean Lassale"},
    {brandId: "b227", brandName: "Jean Marcel"},
    {brandId: "b228", brandName: "JeanRichard"},
    {brandId: "b229", brandName: "Joop"},
    {brandId: "b230", brandName: "Jorg Hysek"},
    {brandId: "b231", brandName: "Jules Jürgensen"},
    {brandId: "b232", brandName: "Junghans"},
    {brandId: "b233", brandName: "Junkers"},
    {brandId: "b234", brandName: "Juvenia"},
    {brandId: "b235", brandName: "Kelek"},
    {brandId: "b236", brandName: "KHS"},
    {brandId: "b237", brandName: "KHS-Watch"},
    {brandId: "b238", brandName: "Kienzle"},
    {brandId: "b239", brandName: "Kobold"},
    {brandId: "b240", brandName: "Konstantin Chaykin"},
    {brandId: "b241", brandName: "Korloff"},
    {brandId: "b242", brandName: "Krieger"},
    {brandId: "b243", brandName: "Kronsegler"},
    {brandId: "b244", brandName: "L'Epée"},
    {brandId: "b245", brandName: "L.Leroy"},
    {brandId: "b246", brandName: "Laco"},
    {brandId: "b247", brandName: "Lacoste"},
    {brandId: "b248", brandName: "Lancaster"},
    {brandId: "b249", brandName: "Lang & Heyne"},
    {brandId: "b250", brandName: "Laurent Ferrier"},
    {brandId: "b251", brandName: "Lebeau-Courally"},
    {brandId: "b252", brandName: "Leinfelder"},
    {brandId: "b253", brandName: "Lemania"},
    {brandId: "b254", brandName: "Leonidas"},
    {brandId: "b255", brandName: "Limes"},
    {brandId: "b256", brandName: "Lip"},
    {brandId: "b257", brandName: "Liv Watches"},
    {brandId: "b258", brandName: "Locman"},
    {brandId: "b259", brandName: "Longines"},
    {brandId: "b260", brandName: "Longio"},
    {brandId: "b261", brandName: "Lorenz"},
    {brandId: "b262", brandName: "Lorus"},
    {brandId: "b263", brandName: "Louis Erard"},
    {brandId: "b264", brandName: "Louis Moinet"},
    {brandId: "b265", brandName: "Louis Vuitton"},
    {brandId: "b266", brandName: "Louis XVI"},
    {brandId: "b267", brandName: "Lucien Rochat"},
    {brandId: "b268", brandName: "Ludovic Ballouard"},
    {brandId: "b269", brandName: "Luminox"},
    {brandId: "b270", brandName: "Lüm-Tec"},
    {brandId: "b271", brandName: "M&M Swiss Watch"},
    {brandId: "b272", brandName: "Marcello C."},
    {brandId: "b273", brandName: "Margi"},
    {brandId: "b274", brandName: "Marlboro"},
    {brandId: "b275", brandName: "Martin Braun"},
    {brandId: "b276", brandName: "Marvin"},
    {brandId: "b277", brandName: "Maserati"},
    {brandId: "b278", brandName: "Mathey-Tissot"},
    {brandId: "b279", brandName: "Mauboussin"},
    {brandId: "b280", brandName: "Maurice de Mauriac"},
    {brandId: "b281", brandName: "Mb&f"},
    {brandId: "b282", brandName: "Meccaniche Veloci"},
    {brandId: "b283", brandName: "Meistersinger"},
    {brandId: "b284", brandName: "Mercure"},
    {brandId: "b285", brandName: "Meyers"},
    {brandId: "b286", brandName: "Michael Bittel"},
    {brandId: "b287", brandName: "Michael Kors"},
    {brandId: "b288", brandName: "Michel Herbelin"},
    {brandId: "b289", brandName: "Michel Jordi"},
    {brandId: "b290", brandName: "Michele"},
    {brandId: "b291", brandName: "Mido"},
    {brandId: "b292", brandName: "Milleret"},
    {brandId: "b293", brandName: "Milus"},
    {brandId: "b294", brandName: "Minerva"},
    {brandId: "b295", brandName: "Momentum"},
    {brandId: "b296", brandName: "Momo Design"},
    {brandId: "b297", brandName: "Mondaine"},
    {brandId: "b298", brandName: "Mondia"},
    {brandId: "b299", brandName: "Montano"},
    {brandId: "b300", brandName: "Montblanc"},
    {brandId: "b301", brandName: "Montega"},
    {brandId: "b302", brandName: "Morellato"},
    {brandId: "b303", brandName: "Moritz Grossmann"},
    {brandId: "b304", brandName: "Movado"},
    {brandId: "b305", brandName: "Mühle Glashütte"},
    {brandId: "b306", brandName: "N.O.A"},
    {brandId: "b307", brandName: "Naj-Oleari"},
    {brandId: "b308", brandName: "Nautica"},
    {brandId: "b309", brandName: "Nauticfish"},
    {brandId: "b310", brandName: "Nike"},
    {brandId: "b311", brandName: "Nina Ricci"},
    {brandId: "b312", brandName: "Nivada"},
    {brandId: "b313", brandName: "Nivrel"},
    {brandId: "b314", brandName: "Nixon"},
    {brandId: "b315", brandName: "NOMOS"},
    {brandId: "b316", brandName: "Nouvelle Horlogerie Calabrese (NHC)"},
    {brandId: "b317", brandName: "ODM"},
    {brandId: "b318", brandName: "Officina del Tempo"},
    {brandId: "b319", brandName: "Offshore Limited"},
    {brandId: "b320", brandName: "Ollech & Wajs"},
    {brandId: "b321", brandName: "Omega"},
    {brandId: "b322", brandName: "Orator"},
    {brandId: "b323", brandName: "Orbita"},
    {brandId: "b324", brandName: "Orfina"},
    {brandId: "b325", brandName: "Orient"},
    {brandId: "b326", brandName: "Oris"},
    {brandId: "b327", brandName: "Otumm"},
    {brandId: "b328", brandName: "Pacardt"},
    {brandId: "b329", brandName: "Panerai"},
    {brandId: "b330", brandName: "Parmigiani Fleurier"},
    {brandId: "b331", brandName: "Patek Philippe"},
    {brandId: "b332", brandName: "Paul Picot"},
    {brandId: "b333", brandName: "Pequignet"},
    {brandId: "b334", brandName: "Perigáum"},
    {brandId: "b335", brandName: "Perrelet"},
    {brandId: "b336", brandName: "Perseo"},
    {brandId: "b337", brandName: "Phantoms"},
    {brandId: "b338", brandName: "Philip Stein"},
    {brandId: "b339", brandName: "Philip Watch"},
    {brandId: "b340", brandName: "Piaget"},
    {brandId: "b341", brandName: "Pierre Balmain"},
    {brandId: "b342", brandName: "Pierre Cardin"},
    {brandId: "b343", brandName: "Pierre DeRoche"},
    {brandId: "b344", brandName: "Pierre Kunz"},
    {brandId: "b345", brandName: "Police"},
    {brandId: "b346", brandName: "Poljot"},
    {brandId: "b347", brandName: "Porsche Design"},
    {brandId: "b348", brandName: "Prim"},
    {brandId: "b349", brandName: "Pro-Hunter"},
    {brandId: "b350", brandName: "Pryngeps"},
    {brandId: "b351", brandName: "Pulsar"},
    {brandId: "b352", brandName: "Puma"},
    {brandId: "b353", brandName: "Quinting"},
    {brandId: "b354", brandName: "Rado"},
    {brandId: "b355", brandName: "Raidillon"},
    {brandId: "b356", brandName: "Rainer Brand"},
    {brandId: "b357", brandName: "Rainer Nienaber"},
    {brandId: "b358", brandName: "Ralf Tech"},
    {brandId: "b359", brandName: "Ralph Lauren"},
    {brandId: "b360", brandName: "Raymond Weil"},
    {brandId: "b361", brandName: "Rebellion"},
    {brandId: "b362", brandName: "REC Watches"},
    {brandId: "b363", brandName: "Ressence"},
    {brandId: "b364", brandName: "RGM"},
    {brandId: "b365", brandName: "Richard Mille"},
    {brandId: "b366", brandName: "Rios1931"},
    {brandId: "b367", brandName: "Roamer"},
    {brandId: "b368", brandName: "Roger Dubuis"},
    {brandId: "b369", brandName: "Rolex"},
    {brandId: "b370", brandName: "Rolf Lang"},
    {brandId: "b371", brandName: "Romain Jerome"},
    {brandId: "b372", brandName: "Rothenschild"},
    {brandId: "b373", brandName: "RSW"},
    {brandId: "b374", brandName: "Ryser Kentfield"},
    {brandId: "b375", brandName: "S.Oliver"},
    {brandId: "b376", brandName: "S.T. Dupont"},
    {brandId: "b377", brandName: "Salvatore Ferragamo"},
    {brandId: "b378", brandName: "Sarcar"},
    {brandId: "b379", brandName: "Scalfaro"},
    {brandId: "b380", brandName: "Schaumburg"},
    {brandId: "b381", brandName: "Schwarz Etienne"},
    {brandId: "b382", brandName: "Sea-God"},
    {brandId: "b383", brandName: "Sea-Gull"},
    {brandId: "b384", brandName: "Sector"},
    {brandId: "b385", brandName: "Seiko"},
    {brandId: "b386", brandName: "Sevenfriday"},
    {brandId: "b387", brandName: "Shinola"},
    {brandId: "b388", brandName: "Sinn"},
    {brandId: "b389", brandName: "Skagen"},
    {brandId: "b390", brandName: "Snyper"},
    {brandId: "b391", brandName: "Sothis"},
    {brandId: "b392", brandName: "Speake-Marin"},
    {brandId: "b393", brandName: "Squale"},
    {brandId: "b394", brandName: "Starkiin"},
    {brandId: "b395", brandName: "Steelcraft"},
    {brandId: "b396", brandName: "Steinhart"},
    {brandId: "b397", brandName: "Stowa"},
    {brandId: "b398", brandName: "Strom"},
    {brandId: "b399", brandName: "Stuhrling"},
    {brandId: "b400", brandName: "Swatch"},
    {brandId: "b401", brandName: "Swiss Military"},
    {brandId: "b402", brandName: "TAG Heuer"},
    {brandId: "b403", brandName: "Tavannes"},
    {brandId: "b404", brandName: "TB Buti"},
    {brandId: "b405", brandName: "Technomarine"},
    {brandId: "b406", brandName: "Technos"},
    {brandId: "b407", brandName: "Temption"},
    {brandId: "b408", brandName: "Tempvs Compvtare"},
    {brandId: "b409", brandName: "Tendence"},
    {brandId: "b410", brandName: "Terra Cielo Mare"},
    {brandId: "b411", brandName: "Theorein"},
    {brandId: "b412", brandName: "Thomas Ninchritz"},
    {brandId: "b413", brandName: "Thorr"},
    {brandId: "b414", brandName: "Tiffany"},
    {brandId: "b415", brandName: "Timberland Watches"},
    {brandId: "b416", brandName: "Timex"},
    {brandId: "b417", brandName: "Tissot"},
    {brandId: "b418", brandName: "Tokyo Flash"},
    {brandId: "b419", brandName: "Tommy Hilfiger"},
    {brandId: "b420", brandName: "Tonino Lamborghini"},
    {brandId: "b421", brandName: "Traser"},
    {brandId: "b422", brandName: "Tudor"},
    {brandId: "b423", brandName: "Tutima"},
    {brandId: "b424", brandName: "TW Steel"},
    {brandId: "b425", brandName: "U-Boat"},
    {brandId: "b426", brandName: "Ulysse Nardin"},
    {brandId: "b427", brandName: "Unikatuhren"},
    {brandId: "b428", brandName: "Union Glashütte"},
    {brandId: "b429", brandName: "Universal Genève"},
    {brandId: "b430", brandName: "Urban Jürgensen"},
    {brandId: "b431", brandName: "Urwerk"},
    {brandId: "b432", brandName: "Vacheron Constantin"},
    {brandId: "b433", brandName: "Valbray"},
    {brandId: "b434", brandName: "Valentino"},
    {brandId: "b435", brandName: "Van Cleef & Arpels"},
    {brandId: "b436", brandName: "Van Der Bauwede"},
    {brandId: "b437", brandName: "Vangarde"},
    {brandId: "b438", brandName: "Ventura"},
    {brandId: "b439", brandName: "Versace"},
    {brandId: "b440", brandName: "Vianney Halter"},
    {brandId: "b441", brandName: "Viceroy"},
    {brandId: "b442", brandName: "Victorinox Swiss Army"},
    {brandId: "b443", brandName: "Villemont"},
    {brandId: "b444", brandName: "Vincent Calabrese"},
    {brandId: "b445", brandName: "Vixa"},
    {brandId: "b446", brandName: "Vogard"},
    {brandId: "b447", brandName: "Vollmer"},
    {brandId: "b448", brandName: "Volna"},
    {brandId: "b449", brandName: "Vostok"},
    {brandId: "b450", brandName: "Voutilainen"},
    {brandId: "b451", brandName: "Vulcain"},
    {brandId: "b452", brandName: "Wakmann"},
    {brandId: "b453", brandName: "Waltham"},
    {brandId: "b454", brandName: "Welder"},
    {brandId: "b455", brandName: "Wempe"},
    {brandId: "b456", brandName: "Wenger"},
    {brandId: "b457", brandName: "Werenbach"},
    {brandId: "b458", brandName: "Wittnauer"},
    {brandId: "b459", brandName: "Wyler"},
    {brandId: "b460", brandName: "Wyler Vetta"},
    {brandId: "b461", brandName: "Xemex"},
    {brandId: "b462", brandName: "Xetum"},
    {brandId: "b463", brandName: "Yantar"},
    {brandId: "b464", brandName: "Yes Watch"},
    {brandId: "b465", brandName: "Yves Saint Laurent"},
    {brandId: "b466", brandName: "Zenith"},
    {brandId: "b467", brandName: "Zeno-Watch Basel"},
    {brandId: "b468", brandName: "ZentRa"},
    {brandId: "b469", brandName: "Zeppelin"},
    {brandId: "b470", brandName: "Zodiac"},
    {brandId: "b471", brandName: "CHONOSWISS"},
    {brandId: "b472", brandName: "Girard Perregaux"}


];

export default data;
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
//     console.log(`{brandId: "b$"{i}, brandName: ${line}},`);
//     i++;
//   }
// }

// processLineByLine();