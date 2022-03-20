// $(document).ready(function() {
//     $('#dataTabla').DataTable({
//         "order" : [[0 , "desc"]],

//         language: {
//             processing: "Tratamiento en curso...",
//             search: "Buscar&nbsp;:",
//             lengthMenu: "Mostrar _MENU_ resultados por página",
//             info: "Mostrando del resultado _START_ al _END_ de un total de _TOTAL_",
//             infoEmpty: "No existen datos.",
//             infoFiltered: "(filtrado de _MAX_ elementos en total)",
//             infoPostFix: "",
//             loadingRecords: "Cargando...",
//             zeroRecords: "No se encontraron datos con tu busqueda",
//             emptyTable: "No hay datos disponibles en la tabla.",
//             paginate: {
//                 first: "Primero",
//                 previous: "Anterior",
//                 next: "Siguiente",
//                 last: "Ultimo"
//             },
//             aria: {
//                 sortAscending: ": active para ordenar la columna en orden ascendente",
//                 sortDescending: ": active para ordenar la columna en orden descendente"
//             }
//         },

//         scrollY: 400,

//         lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],
//     });
// } );

$(document).ready(function() {
    $('#dataTabla').DataTable();
});
