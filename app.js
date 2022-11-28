const autosImportados=require("./autos");

//console.log(autosImportados)

let concesionaria = {
   autos:autosImportados, 
   buscarAuto: function(patente){
      let buscar=this.autos.find((auto)=>auto.patente==patente);
      if(buscar){
        return buscar
      }else{
        return null
      }
   },
   venderAuto: function(patente){
      let auto=this.buscarAuto(patente)

      if(auto){

         auto.vendido=true

      return auto
      }
   },
   autosParaLaVenta: function(){
        
      //this.venderAuto(patente)
      let venta=this.autos.filter((auto)=>auto.vendido==false)
   
      return venta        

   },
   autosNuevos: function(){
        
      let nuevo=this.autosParaLaVenta()
      return nuevo.filter((auto)=>auto.km<100)
         
   },

   listaDeVentas: function(){

      let ventas= this.autos.filter((carro)=>carro.vendido==true).map((carro)=>carro.precio)
      return ventas
      
   },

   totalDeVentas: function(){

      let lista=this.listaDeVentas()
      let total= lista.reduce((acum,valor)=>acum+valor,0)

      return total
   },

   puedeComprar: function(carro,persona){

         let cuota=carro.precio/carro.cuotas
         if (carro.precio<persona.capacidadDePagoTotal&&cuota<persona.capacidadDePagoEnCuotas){

            return true
         }else{
            return false
         }

      
   },

   autosQuePuedeComprar: function(persona){

      let carro=this.autosParaLaVenta() 

      let listcarros=carro.filter((carro)=>(this.puedeComprar(carro,persona)==true))

      return listcarros
      
      /*let listAutos=[]
      for(i=0;i<carro.length;i++){
         
         if(this.puedeComprar(carro[i],persona)==true){
         
            listAutos.push(carro[i])
         }
      }          
   return */
   
   }


} 
   
   
   //console.log(concesionaria.totalDeVentas())
   console.log(concesionaria.autosQuePuedeComprar({nombre: "Juan", capacidadDePagoEnCuotas: 30000,capacidadDePagoTotal:140000}))
   //console.log(concesionaria.autosQuePuedeComprar())