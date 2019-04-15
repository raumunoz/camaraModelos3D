
var paises;
var dropPaises=document.getElementById("pais-shipping");
var dropEstados=document.getElementById("estado-shipping");
window.onload = function () {
    var forms=document.getElementById("form-envio");
    fetch("js/paisesEstados.json")
        .then(res => res.json())
        .then(data =>paises=data)
        .then(()=>{
            generaOpcPaises();
            cambioDePais()
        });
        /*
    form.addEventListener("submit",
        function (e) {
            
       // e.preventDefault();
        alert("Nuevo submit");
    });*/
   /* window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);*/

};
function generaOpcPaises(){
    var opcPaises="";
    paises.forEach(pais => {
        if(pais.name=="Mexico"){
            opcPaises=opcPaises+`
            <option value="${pais.name}" selected >${pais.name}</option>
            `;
        }else{
            opcPaises=opcPaises+`
            <option value="${pais.name}" >${pais.name}</option>
            `;    
        }
        
    });
    dropPaises.innerHTML=opcPaises;
    //alert(dropPaises.selectedOptions[0].innerText);
    
}
function generaOpcEstados(pais){
    var opcEstados="";
    var estados=paises.find(x=>x.name==pais).states;
 
    if(typeof estados !== "undefined"){
        estados.forEach((estado)=>{
            opcEstados=opcEstados+`
            <option value="${estado.name}">${estado.name}</option>
            `;
        })
    }
    dropEstados.innerHTML=opcEstados;
    
}

function cambioDePais(){
    var pais=dropPaises.selectedOptions[0].innerText;
    generaOpcEstados(pais);
}