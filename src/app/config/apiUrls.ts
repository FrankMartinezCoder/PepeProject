export class Static {
    private static serverIp:string = "http://192.168.0.105:8080/"

    private static users:string = Static.serverIp+"usuarios/";
    private static rooms:string = Static.serverIp+"habitaciones/";
    private static bookings:string = Static.serverIp+"reservas/";
    private static services:string = Static.serverIp+"servicios/";   
    private static valorations:string = Static.serverIp+"usuarios/";   
    
    public static user = {
        login: Static.users+"login",
        create: Static.users+"create",
        delete: Static.users+"delete",
        list: Static.users+"list",
        modify: Static.users+"modificar",
        getUserById: Static.users+"usuario"
    }

    public static booking = {
        login: Static.bookings+"login",
        add: Static.bookings+"add",
        delete: Static.bookings+"delete",
        list: Static.bookings+"list",
        modify: Static.bookings+"modificar",
        getBookingsByUser: Static.bookings+"usuario"
    }

    public static room = {
        create: Static.rooms+"create",
        delete: Static.rooms+"delete",
        list: Static.rooms+"list",
        modify: Static.rooms+"modificar",
        reservar: Static.rooms+"reservar"
    }

    public static valoration = {
        // getUserById: Static.valorations+"usuario"
    }

    public static service = {
        getServicesFromHotelId: Static.services+"listHotelServicios"
    }
}