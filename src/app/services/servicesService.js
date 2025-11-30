const STORAGE_KEY = 'app_services_v1';
const EVENT_NAME = 'services:changed';

const seed = () => {
  return [
    { id: 'cosmetologia-1', category: 'cosmetologia', name: 'Limpieza Facial Profunda', price: 45000, duration: 60, available: 10, active: true },
    { id: 'cosmetologia-2', category: 'cosmetologia', name: 'Peeling Químico Suave', price: 60000, duration: 50, available: 5, active: true },
    { id: 'corporales-1', category: 'corporales', name: 'Masaje Relajante 60min', price: 35000, duration: 60, available: 8, active: true },
    { id: 'manicure-1', category: 'manicure', name: 'Manicure Spa', price: 20000, duration: 45, available: 20, active: true },
    { id: 'manicure-2', category: 'manicure', name: 'Pedicure Completo', price: 22000, duration: 50, available: 15, active: true },
    { id: 'corte-1', category: 'corte-y-color', name: 'Corte Profesional', price: 30000, duration: 40, available: 12, active: true },
    { id: 'maquillaje-1', category: 'maquillaje', name: 'Maquillaje Social', price: 40000, duration: 60, available: 6, active: true },
    { id: 'capilares-1', category: 'capilares', name: 'Botox Capilar', price: 80000, duration: 90, available: 4, active: true },
  ];
};

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seed();
    return JSON.parse(raw);
  } catch (e) {
    return seed();
  }
}

function writeStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (e) {
    console.error('servicesService: write error', e);
  }
}

export const servicesService = {
  getServices() {
    return readStorage();
  },
  saveServices(items) {
    writeStorage(items);
    return items;
  },
  createService(item) {
    const list = readStorage();
    const next = [...list, item];
    writeStorage(next);
    return item;
  },
  updateService(id, patch) {
    const list = readStorage();
    const next = list.map((it) => (it.id === id ? { ...it, ...patch } : it));
    writeStorage(next);
    return next.find((it) => it.id === id);
  },
  deleteService(id) {
    const list = readStorage();
    const next = list.filter((it) => it.id !== id);
    writeStorage(next);
    return next;
  },
  onChange(cb) {
    const handler = () => cb(readStorage());
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }
};

export default servicesService;
