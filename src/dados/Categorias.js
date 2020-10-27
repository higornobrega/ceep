export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscrito = [];
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }

    inscrever(func){
        this._inscrito.push(func);
    }

    notificar(){
        this._inscrito.forEach(
            func =>{
                func(this.categorias);
            }
        )
    }



}