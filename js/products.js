const AUTOSURL = "https://japceibal.github.io/emercado-api/cats_products/101.json"

// function setCarsID(id) {
//     localStorage.getItem("products", id);
//     window.location = "product-info.html"
// }

document.addEventListener('DOMContentLoaded', function() {

    let products = [];


    fetch(AUTOSURL)
    .then(respuesta => respuesta.json())
    .then(datos=> {
       products = datos.products;
    
     let htmlContentToAppend = "";
     

     for (let i = 0; i < products.length; i++) {
        let auto = products[i];
        
     
        htmlContentToAppend += `

        
            <div class="list-group-item list-group-item-action">
                <div class="row">
                   <div class="col-3">
                      <img src="${auto.image}" alt="product image" class="img-thumbnail">
                   </div>
                   <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                             <h4>${auto.name} - ${auto.currency} ${auto.cost}</h4>
                             <p>${auto.description}</p>
                            </div>
                            <small class="text-muted">${auto.soldCount} vendidos</small>
                        </div>
                    </div>
                </div>
            </div>

       ` 

        }
    

     document.getElementById("listaAutos").innerHTML += htmlContentToAppend;
    
     
    });
});
