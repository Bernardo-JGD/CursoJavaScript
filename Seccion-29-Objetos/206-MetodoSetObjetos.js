let persona = {
    nombre: "Ang",
    apellido: "Tonio",
    email: "aire@gmail.com",
    edad: 111, 
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();//convierte todo a mayúsculas
    },//al parecer set si recibe parámetros
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.lang);

persona.lang = "en";
console.log(persona.idioma); 

//al parecer si, los métodos get no reciben parámetros y los métodos set solo reciben un parámetro
let suma = {
    valor1: 1, 
    valor2: 2,
    get sumando(){
        return (this.valor1 + this.valor2);
    },
    set cambiandoValor1(v1){
        this.valor1 = v1;
    },
    set cambiandoValor2(v2){
        this.valor2 = v2;
    }
}
console.log(suma.sumando);
suma.cambiandoValor1 = 5;
console.log(suma.sumando);
suma.cambiandoValor2 = 6;
console.log(suma.sumando);