

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
        
    }

    

}

export { RecintosZoo as RecintosZoo };



