export const MapTypes = {
  Config: Symbol.for('Config'),
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
  Routes: {
    Manager: Symbol.for('RoutesManager'),
  },
}