export class Static {
    private static serverIp:string = "http://192.168.0.105:8080/"

    private static users:string = Static.serverIp+"usuarios/";
    private static rooms:string = Static.serverIp+"habitaciones/";
    private static bookings:string = Static.serverIp+"bookings/";
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
        create: Static.bookings+"create",
        delete: Static.bookings+"delete",
        list: Static.bookings+"list",
        modify: Static.bookings+"modificar",
        getUserById: Static.bookings+"usuario"
    }

    public static room = {
        getRoomById: Static.rooms+"login",
        create: Static.rooms+"create",
        delete: Static.rooms+"delete",
        list: Static.rooms+"list",
        modify: Static.rooms+"modificar",
        reservar: Static.rooms+"reservar"
    }

    public static valoration = {
        login: Static.valorations+"login",
        create: Static.valorations+"create",
        delete: Static.valorations+"delete",
        list: Static.valorations+"list",
        modify: Static.valorations+"modificar",
        getUserById: Static.valorations+"usuario"
    }

    public static service = {
        login: Static.users+"login",
        create: Static.users+"create",
        delete: Static.users+"delete",
        list: Static.users+"list",
        modify: Static.users+"modificar",
        getUserById: Static.users+"usuario"
    }
}