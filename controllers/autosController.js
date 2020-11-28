const fs = require("fs");
let sucursales = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))
let autosSucursal = sucursales.map(function(sucursal){
    return sucursal.autos
})
let autos = [...autosSucursal[0], ...autosSucursal[1], ...autosSucursal[2], ...autosSucursal[3], ...autosSucursal[4]]
module.exports = {
    autos : (req,res) => {
        res.render("autos",{title: "Autos", mensaje:"Estos son todos los autos que podes encontrar en nuestras concesionarias: ", autos : autos})
    }
}