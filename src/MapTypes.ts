export const MapTypes = {
  Config: Symbol.for('Config'),
  Valiadtors: Symbol.for('BootstrapValidators'),
  Http: {
    Controller: {
      Celanture: Symbol.for('CelantureController'),
    },
    Middleware: {
      Celanture: Symbol.for('CelantureMiddleware'),
      Multer: Symbol.for('MulterMiddleware'),
    },
  },
  Executors: {
    Celanture: Symbol.for('CelantureExecutors'),
  },
  Routes: {
    Manager: Symbol.for('RoutesManager'),
  },
}
