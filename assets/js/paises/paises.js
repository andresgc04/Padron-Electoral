const paisesListTable = () => {
  $.ajax({
    url: "http://localhost:5000/api/paises",
    success: function (response) {
      $("#paisesListTable")
        .DataTable({
          data: response.body,
          columns: [
            { data: "PAIS_ID" },
            { data: "NOMBRE_PAIS" },
            { data: "ESTADO" },
            {
              data: function (row, type, set) {
                return `<button type="button" class="btn btn-primary editPaisButton" data-pais-id="${row.PAIS_ID}"><i class="fas fa-edit"></i></button>
                              <button type="button" class="btn btn-danger deletePaisButton" data-pais-id="${row.PAIS_ID}"><i class="fas fa-ban"></i></button>
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
        .appendTo("#paisesListTable_wrapper .col-md-6:eq(0)");
    },
  });
};

(function () {
  paisesListTable();
})();
