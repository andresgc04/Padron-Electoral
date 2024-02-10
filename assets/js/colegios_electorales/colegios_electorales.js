const ColegiosElectoralesListTable = () => {
  $.ajax({
    url: "http://localhost:5000/api/colegios-electorales",
    success: function (response) {
      $("#colegiosElectoralesListTable")
        .DataTable({
          data: response.body,
          columns: [
            { data: "COLEGIO_ELECTORAL_ID" },
            { data: "NOMBRE_COLEGIO_ELECTORAL" },
            { data: "ESTADO" },
            {
              data: function (row, type, set) {
                return `<button type="button" class="btn btn-primary editColegioElectoralButton" data-colegio-electoral-id="${row.COLEGIO_ELECTORAL_ID}"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger deletePersonaButton" data-colegio-electoral-id="${row.COLEGIO_ELECTORAL_ID}"><i class="fas fa-ban"></i></button>
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
        .appendTo("#colegiosElectoralesListTable_wrapper .col-md-6:eq(0)");
    },
  });
};

(function () {
  ColegiosElectoralesListTable();
})();
