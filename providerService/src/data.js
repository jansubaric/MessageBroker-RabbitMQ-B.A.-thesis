const TARIFE = {
    Mala_Tarifa: "60kn, 5GB, 80 min prema svim mrežama",
    Tarifa_Zovi: "140kn, 10GB, neograničeni pozivi",
    Neogranicena_Tarifa: "180kn, flat internet, neograničeni pozivi"   
}

const MORGAN_CONFIG = ':method :url :status :res[content-length] :remote-addr - :response-time ms';

const ERROR_MAPPING = {
    400: ['CastError', 'ValidationError']
}

module.exports = {
    TARIFE: TARIFE,
    MORGAN_CONFIG: MORGAN_CONFIG,
    ERROR_MAPPING: ERROR_MAPPING
}