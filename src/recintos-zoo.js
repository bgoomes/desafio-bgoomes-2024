class RecintosZoo {
    constructor(){
        this.recintos=[
            {numero:1,bioma:'savana',tamanhoTotal:10,animais:[{animal:'MACACO', quantidade:3}]},
            {numero:2,bioma:'floresta', tamanhoTotal:5,animais:[]},
            {numero:3,bioma:'savana e rio',tamanhoTotal:7, animais:[{animal:'GAZELA'}]},
            {numero:4,bioma:' rio', tamanhoTotal:8, animais:[ ]},
            {numero: 5 , bioma:'savana', tamanhoTotal:9, animais:[{animal:'LEAO'}]}


        ];

        this.animais={
            LEAO:{tamanho:3,bioma:['savana'], carnivoro:true},
            LEOPARDO:{tamanho:2,bioma:['savana'], carnivoro:true},
            MACACO:{tamanho:1,bioma:['savana', 'floresta'], carnivoro:false},
            GAZELA:{tamanho:2,bioma:['savana' ], carnivoro:false},
            HIPOPOTAMO:{tamanho:4,bioma:['savana', 'rio'], carnivoro:false},
            CROCODILO: { tamanho: 3, bioma: ['rio'], carnivoro: true }
        }
    }

    analisaRecintos(animal, quantidade) {
        
        if(!this.animais[animal]){
            return { erro: "Animal inválido"}
        }

        if(typeof quantidade !== 'number' || quantidade <= 0 ){
            return {erro: "Quantidade inválida"}
        }

        if(animal === 'MACACO' && quantidade >= 10) {
            return { erro: "Não há recinto viável" }
        }

        const recintoViaveis = []
        const animal = this.animais[animal]

        for (const recinto of this.recintos) {
            const espacoOcupado = recinto.animais.reduce(
              (acc, a) => acc + a.quantidade * this.animais[a.especie].tamanho,
              0
            );
      
            
            const espacoLivre = recinto.tamanho - espacoOcupado;
      
           
            const biomasRecinto = Array.isArray(recinto.bioma)
              ? recinto.bioma
              : [recinto.bioma];
      
            // Este if checa se o recinto realmente tem espaço.
            if (espacoLivre < quantidade * animal.tamanho) {
              continue;
            }
      
          
            if (!biomasRecinto.some((bioma) => animal.bioma.includes(bioma))) {
              continue;
            }
      
            if (this.verificaConforto(recinto, especie_animal, quantidade)) {
                recintoViaveis.push(
                `Recinto ${recinto.numero} (espaço livre: ${
                  espacoLivre - quantidade * animal.tamanho
                } total: ${recinto.tamanho})`
              );
            }
          }
      
         
          if (recintoViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
          }
      
          return { recintoViaveis };
        }
      
        verificaConforto(recinto, especie, quantidade) {
          const animal = this.animais[especie];
          for (const a of recinto.animais) {
            const outroAnimal = this.animais[a.especie];
      
            if (animal.carnivoro && !outroAnimal.carnivoro) {
              return false;
            }
      
            if (!animal.carnivoro && outroAnimal.carnivoro) {
              return false;
            }
      
            if (animal.carnivoro && outroAnimal.carnivoro && a.especie !== especie) {
              return false;
            }
      
            if (especie === "HIPOPOTAMO" || a.especie === "HIPOPOTAMO") {
              if (
                !biomasRecinto.includes("savana") ||
                !biomasRecinto.includes("rio")
              ) {
                return false;
              }
            }
          }
      
          
          const espacoOcupado = recinto.animais.reduce(
            (acc, a) => acc + a.quantidade * this.animais[a.especie].tamanho,
            0
          );
      
          
          const espacoLivre = recinto.tamanho - espacoOcupado;
      
          
          if (espacoLivre < quantidade * animal.tamanho) {
            return false;
          }
      
          
          const biomasRecinto = Array.isArray(recinto.biomas)
            ? recinto.biomas
            : [recinto.biomas];
      
         
          if (!biomasRecinto.some((bioma) => animal.biomas.includes(bioma))) {
            return false;
          }
      
          return true;
        }
    
}

export { RecintosZoo as RecintosZoo };