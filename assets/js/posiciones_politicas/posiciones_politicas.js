const posicionesPoliticaslistTable = () => {
  $.ajax({
    url: "http://localhost:5000/api/posiciones-politicas",
    success: function (response) {
      $("#posicionesPoliticasListTable")
        .DataTable({
          data: response.body,
          columns: [
            { data: "POSICION_POLITICA_ID" },
            { data: "NOMBRE_POSICION_POLITICA" },
            { data: "NOMBRE_ESTADO" },
            {
              data: function (row, type, set) {
                return `<button type="button" class="btn btn-primary editPosicionPoliticaButton" data-posicion-politica-id="${row.POSICION_POLITICA_ID}"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-danger deletePosicionPoliticaButton" data-posicion-politica-id="${row.POSICION_POLITICA_ID}"><i class="fas fa-ban"></i></button>
                           `;
              },
            },
          ],
          paging: true,
          lengthChange: false,
          searching: false,
          ordering: true,
          info: true,
          autoWidth: false,
          responsive: true,
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
        })
        .buttons()
        .container()
        .appendTo("#posicionesPoliticasListTable_wrapper .col-md-6:eq(0)");
    },
  });
};

(function () {
  posicionesPoliticaslistTable();
})();

$("#posicionesPoliticasListTable").on(
  "click",
  ".editPosicionPoliticaButton",
  function () {
    const posicionPoliticaID = $(this).data("posicion-politica-id");

    alert("Editar" + posicionPoliticaID);
  }
);
