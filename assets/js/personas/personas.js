const personaslistTable = () => {
  $.ajax({
    url: "http://localhost:5000/api/personas",
    success: function (response) {
      $("#personasListTable")
        .DataTable({
          data: response.body,
          columns: [
            { data: "Nombre_Completo" },
            { data: "No_Cedula" },
            { data: "Sexo" },
            { data: "Estado" },
            {
              data: function (row, type, set) {
                return `<button type="button" class="btn btn-primary editPersonaButton" data-persona-id="${row.Persona_ID}"><i class="fas fa-edit"></i></button>
                          <button type="button" class="btn btn-danger deletePersonaButton" data-persona-id="${row.Persona_ID}"><i class="fas fa-ban"></i></button>
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
        .appendTo("#personasListTable_wrapper .col-md-6:eq(0)");
    },
  });
};

(function () {
  personaslistTable();
})();

$("#personasListTable").on("click", ".editPersonaButton", function () {
  const personaID = $(this).data("persona-id");

  alert("Editar" + personaID);
});
