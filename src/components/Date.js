const now = new Date();
const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ];

export const day = days[now.getDay()];
export const number = now.getDate();
export const month = months[now.getMonth()];
export const year = now.getFullYear();
