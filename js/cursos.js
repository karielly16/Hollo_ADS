$(document).ready(
    getFaculdade()
)
function getFaculdade() {

    var Cursos = [
        {
            'curso': 'Análise e Desen. de Sistemas',
            'arquivo': 'ads.png',
            'url': 'ads.html'
        },
        {
            'curso': 'Administração',
            'arquivo': 'admi.png',
            'url': 'adm.html'
        },
        {
            'curso': 'Ciências Contábeis',
            'arquivo': 'contabili.png',
            'url': 'contabeis.html'
        },
        {
            'curso': 'Direito',
            'arquivo': 'balancas (1).png',
            'url': 'direito.html'
        },
        {
            'curso': 'Psicologia',
            'arquivo': 'psicologia.png',
            'url': 'psicologia.html'
        },
    ];


    $.each(Cursos, function (i, curso) {
        $("#cursos").append(
            '<div class="col-md-4 text-center wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms" style="min-height: 380px" >' +
            '<div class="block kill-margin-bottom">' +
            '<div class="icon-box">' +
            '<i>' +
            '<img src="images/icons/' + curso.arquivo + '" alt="some text" width="60" height="60">' +
            '</i>' +
            '</div>' +
            '<div class="content text-center">' +
            '<h3><a class="ddd" href="' + curso.url + '">' + curso.curso + '</a></h3>' +
            '</div>' +
            '</div>' +
            '</div>'
        )
    })
}
