const partidosPoliticosListTable = () => {
  $.ajax({
    url: "http://localhost:5000/api/partidos-politicos",
    success: function (response) {
      $("#partidosPoliticosListTable")
        .DataTable({
          data: response.body,
          columns: [
            { data: "NOMBRE_PARTIDO_POLITICO" },
            { data: "SIGLAS_PARTIDO_POLITICO" },
            { data: "ESTADO" },
            {
              data: function (row, type, set) {
                return `<button type="button" class="btn btn-primary editPersonaButton" data-partido-politico-id="${row.PARTIDO_POLITICO_ID}"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-danger deletePersonaButton" data-partido-politico-id="${row.PARTIDO_POLITICO_ID}"><i class="fas fa-ban"></i></button>
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
        .appendTo("#partidosPoliticosListTable_wrapper .col-md-6:eq(0)");
    },
  });
};

(function () {
  partidosPoliticosListTable();
})();
