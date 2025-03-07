const base_questions = [
    { id: "1", question: "È nato prima del XIX secolo?", type: "era", value: "pre-19" },
    { id: "2", question: "È nato nel XIX secolo?", type: "era", value: "19" },
    { id: "3", question: "È nato nel XX secolo?", type: "era", value: "20" },
    { id: "4", question: "È ancora vivo?", type: "alive", value: true },
    { id: "5", question: "Era un pittore?", type: "field", value: "Arte" },
    { id: "6", question: "È una donna?", type: "gender", value: "female" },
    { id: "7", question: "È nato in Europa?", type: "region", value: "Europa" },
    { id: "8", question: "È nato e morto nella stessa nazione?", type: "samedb", value: true},
    { id: "9", question: "Ha vinto un premio nobel?", type: "nobel", value: true },
 
  ];
  
const questions = [



    { id: "12", question: "Faceva parte del movimento artistico rinascimentale?", type: "movimento", value: "Rinascimento"},
    { id: "13", question: "Faceva parte del movimento artistico del romanticismo?", type: "movimento", value: "Romanticismo"},
    { id: "14", question: "Faceva parte del movimento artistico dell'art deco?", type: "movimento", value: "Art Deco"},
    { id: "15", question: "Faceva parte del movimento artistico surrealista?", type: "movimento", value: "Surrealismo"},
    { id: "16", question: "Faceva parte del movimento artistico barocco?", type: "movimento", value: "Barocco"},

    { id: "17", question: "È originario dell'Italia?", type: "nation_b", value: "Italia"},
    { id: "18", question: "È originario della Spagna?", type: "nation_b", value: "Spagna"},
    { id: "19", question: "È originario del Regno Unito?", type: "nation_b", value: "Regno Unito"},
    { id: "20", question: "È originario della Germania?", type: "nation_b", value: "Germania"},
    { id: "21", question: "È originario della Svizzera?", type: "nation_b", value: "Svizzera"},
    { id: "22", question: "È originario della Russia?", type: "nation_b", value: "Russia"},
    { id: "23", question: "È originario della Danimarca?", type: "nation_b", value: "Danimarca"},
    { id: "24", question: "È originario della Ungheria?", type: "nation_b", value: "Ungheria"},
    { id: "25", question: "È originario della Francia?", type: "nation_b", value: "Francia"},
    { id: "26", question: "È originario della Polonia?", type: "nation_b", value: "Polonia"},
    { id: "27", question: "È originario della Croazia?", type: "nation_b", value: "Croazia"},
    { id: "28", question: "È originario del Messico?", type: "nation_b", value: "Messico"},

    { id: "29", question: "È morto negli Stati Uniti?", type: "nation_d", value: "USA"},
    { id: "30", question: "È morto in Svizzera?", type: "nation_d", value: "Svizzera"},
    { id: "31", question: "È morto in Germania?", type: "nation_d", value: "Germania"},
    { id: "32", question: "È morto in Russia?", type: "nation_d", value: "Russia"},
    { id: "33", question: "È morto in Italia?", type: "nation_d", value: "Italia"},
    { id: "34", question: "È morto in Messico?", type: "nation_d", value: "Messico"},
    { id: "35", question: "È morto in Danimarca?", type: "nation_d", value: "Danimarca"},
    { id: "36", question: "È morto in Francia?", type: "nation_d", value: "Francia"},
    { id: "37", question: "È morto in Spagna?", type: "nation_d", value: "Spagna"},
    { id: "38", question: "È morto nel Regno Unito?", type: "nation_d", value: "UK"},

    { id: "39", question: "Era un matematico?", type: "jobs", value: "matematico"},
    { id: "40", question: "Era un crittografo?", type: "jobs", value: "crittografo"},
    { id: "41", question: "Era un divulgatore scientifico?", type: "jobs", value: "divulgatore scientifico"},
    { id: "42", question: "Era un astrofisico?", type: "jobs", value: "astrofisico"},
    { id: "43", question: "Era un chimico?", type: "jobs", value: "chimico"},
    { id: "44", question: "Era un astronomo?", type: "jobs", value: "astronomo"},
    { id: "45", question: "Era un biologo?", type: "jobs", value: "biologo"},
    { id: "46", question: "Era un geologo?", type: "jobs", value: "geologo"},
    { id: "47", question: "Era un esploratore?", type: "jobs", value: "esploratore"},
    { id: "48", question: "Era un informatica?", type: "jobs", value: "informatica"},
    { id: "49", question: "Era un farmacologo?", type: "jobs", value: "farmacologo"},
    { id: "50", question: "Era un ingegnere?", type: "jobs", value: "ingegnere"},
    { id: "51", question: "Era un inventore?", type: "jobs", value: "inventore"},
    { id: "52", question: "Era un ammiraglio?", type: "jobs", value: "ammiraglio"},
    { id: "53", question: "Era un biofisico?", type: "jobs", value: "biofisico"},
    { id: "54", question: "Era un fisico?", type: "jobs", value: "fisico"},

    { id: "55", question: "Ha lavorato nel campo della fisica quantistica", type: "quant", value: true },
    { id: "56", question: "Ha scoperto o studiato elementi chimici", type: "elem", value: true },
    { id: "57", question: "Ha creato un sistema operativo / linguaggio di programmazione / software?", type: "os", value: true },
    { id: "58", question: "Ha che fare con la gravità", type: "grav", value: true },
    { id: "10", question: "Ha fatto parte del progetto Manhattan?", type: "progect", value: true},
    { id: "11", question: "Ha mai presentato uno show televisivo?", type: "tv", value: true},
    { id: "59", question: "Ha istituti o laboratori che portano il loro nome?", type: "lab", value: true},
  ];
  
