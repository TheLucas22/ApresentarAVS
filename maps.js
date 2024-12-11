// Função para inicializar o mapa
function initMap() {
    // Definir a localização do restaurante (latitude e longitude)
    var restauranteLocation = { lat: -23.0266876, lng: -43.4628408 }; // Coordenadas de exemplo

    // Criar o mapa centrado na localização do restaurante
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,  // Nível de zoom
        center: restauranteLocation  // Localização central do mapa
    });

    // Adicionar um marcador no local do restaurante
    var marker = new google.maps.Marker({
        position: restauranteLocation,
        map: map,
        title: 'Restaurante Sabores da Casa'  // Texto exibido ao passar o mouse no marcador
    });
}
