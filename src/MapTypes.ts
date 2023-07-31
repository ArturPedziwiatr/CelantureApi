export const MapTypes = {
  Config: Symbol.for('Config'),
  Valiadtors: Symbol.for('BootstrapValidators'),
  Http: {
    Controller: {
      Celanture: Symbol.for('CelantureController'),
      WFS: Symbol.for('WFSController'),
    },
    Middleware: {
      Celanture: Symbol.for('CelantureMiddleware'),
      Multer: Symbol.for('MulterMiddleware'),
    }
  },
  Executors: {
    Celanture: Symbol.for('CelantureExecutors'),
  },
  Services: {
    WFSService: Symbol.for('WFSService'),
  },
  Routes: {
    Manager: Symbol.for('RoutesManager'),
  },
}