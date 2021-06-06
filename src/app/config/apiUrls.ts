export class Static {
    private static serverIp:String = "http://127.0.0.1:8080/"

    private static users:String = Static.serverIp+"usuarios/";
    private static rooms:String = Static.serverIp+"usuarios/";
    private static bookings:String = Static.serverIp+"usuarios/";
    private static valorations:String = Static.serverIp+"usuarios/";
    private static services:String = Static.serverIp+"usuarios/";
    
    
    public static user = {
        login: Static.users+"login",
        create: Static.users+"create",
        delete: Static.users+"delete",
        list: Static.users+"list",
        modify: Static.users+"modificar",
        getUserById: Static.users+"usuario"
    }

    public static room = {
        getRoomById: Static.rooms+"login",
        create: Static.rooms+"create",
        delete: Static.rooms+"delete",
        list: Static.rooms+"list",
        modify: Static.rooms+"modificar",
        reservar: Static.rooms+"reservar"
    }

    private static booking = {
        login: Static.users+"login",
        create: Static.users+"create",
        delete: Static.users+"delete",
        list: Static.users+"list",
        modify: Static.users+"modificar",
        getUserById: Static.users+"usuario"
    }

    private static valoration = {
        login: Static.users+"login",
        create: Static.users+"create",
        delete: Static.users+"delete",
        list: Static.users+"list",
        modify: Static.users+"modificar",
        getUserById: Static.users+"usuario"
    }

    private static service = {
        login: Static.users+"login",
        create: Static.users+"create",
        delete: Static.users+"delete",
        list: Static.users+"list",
        modify: Static.users+"modificar",
        getUserById: Static.users+"usuario"
    }
}