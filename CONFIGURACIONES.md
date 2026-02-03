# ⚙️ CONFIGURACIONES A PERSONALIZAR

## 📝 IMPORTANTE: Antes de publicar, actualiza esta información

---

## 1️⃣ WHATSAPP

### Ubicación en el código:
Buscar en `index.html` el texto: `593999999999`

### Reemplazar con:
```
TU_NUMERO_AQUI
```

**Formato correcto:**
- ✅ Ecuador: `593987654321` (código país + número sin 0)
- ✅ Perú: `51987654321`
- ✅ Colombia: `57321654987`
- ❌ NO usar: +593, espacios, guiones, paréntesis

**Ejemplo:**
Si tu WhatsApp es: +593 98 765 4321
Debes poner: `593987654321`

---

## 2️⃣ DIRECCIÓN FÍSICA

### Ubicación en el código:
Buscar en `index.html`: `Calle Principal, Sector Centro`

### Reemplazar con:
```
Tu dirección completa aquí
Incluye: Calle, número, sector, ciudad
```

**Ejemplo:**
```
Av. 10 de Agosto y Colón
Sector La Mariscal, Quito
```

---

## 3️⃣ HORARIOS DE ATENCIÓN

### Ubicación en el código:
Buscar en `index.html`:
```
Lunes a Sábado: 7:00 AM - 8:00 PM
Domingos: 8:00 AM - 6:00 PM
```

### Reemplazar con tus horarios reales:
```
Lunes a Viernes: TU_HORARIO
Sábados: TU_HORARIO
Domingos: TU_HORARIO
```

---

## 4️⃣ TELÉFONO DE CONTACTO

### Ubicación en el código:
Buscar en `index.html`: `+593 99 999 9999`

### Reemplazar con:
```
+593 XX XXX XXXX
```

---

## 5️⃣ GOOGLE MAPS

### Pasos para obtener tu mapa:

1. **Ir a Google Maps:**
   https://www.google.com/maps

2. **Buscar tu ubicación:**
   - Escribe la dirección de tu mini market
   - O haz click en el mapa en la ubicación exacta

3. **Obtener código de inserción:**
   - Click en "Compartir"
   - Click en "Insertar un mapa"
   - Selecciona el tamaño (mediano o grande)
   - Click en "COPIAR HTML"

4. **Pegar en el código:**
   - Abre `index.html`
   - Busca: `<!-- Google Maps iframe -->`
   - Reemplaza todo el `<iframe>...</iframe>` con tu código

**Ejemplo de código que obtendrás:**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12..." 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

---

## 6️⃣ REDES SOCIALES

### Facebook
Buscar en `index.html`: `href="#"` en la sección de redes sociales

Reemplazar con:
```html
href="https://facebook.com/TU_PAGINA"
```

### Instagram
```html
href="https://instagram.com/TU_USUARIO"
```

**Ejemplo completo:**
```html
<a href="https://facebook.com/betheelmarket" target="_blank">
    <i class="fab fa-facebook"></i>
</a>
<a href="https://instagram.com/betheel.market" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

---

## 7️⃣ INFORMACIÓN DEL NEGOCIO

### Nombre del negocio
Ya está configurado como: **BETHEEL MARKET**
Si quieres cambiarlo, busca en `index.html`: `BETHEEL MARKET`

### Descripción
Buscar en `index.html`:
```
Productos frescos, precios accesibles y la mejor atención para ti y tu familia
```

Personalizar según tu negocio.

---

## 8️⃣ MENSAJE DE WHATSAPP PREDETERMINADO

### Ubicación:
Buscar en `index.html`: `?text=Hola%20BETHEEL%20MARKET`

### Personalizar:
```
?text=Hola,%20quisiera%20información%20sobre%20productos
```

**Nota:** Los espacios se escriben como `%20`

**Ejemplos:**
- `?text=Hola,%20quiero%20hacer%20un%20pedido`
- `?text=Buenos%20días,%20quisiera%20consultar%20precios`
- `?text=Hola,%20me%20gustaría%20saber%20sobre%20promociones`

---

## 9️⃣ COLORES DE LA MARCA (Opcional)

Si quieres cambiar los colores corporativos:

### Ubicación:
Archivo: `css/styles.css`
Buscar: `:root {`

### Colores actuales:
```css
--primary-red: #E31E24;        /* Rojo principal */
--primary-red-dark: #B71C1C;   /* Rojo oscuro */
--primary-red-light: #FF5252;  /* Rojo claro */
--accent-orange: #FF6B35;      /* Naranja */
--accent-yellow: #FFD23F;      /* Amarillo */
--accent-green: #06D6A0;       /* Verde */
```

### Herramienta para elegir colores:
https://coolors.co/

---

## 🔟 TÍTULO Y DESCRIPCIÓN SEO

### Título de la página
Buscar en `index.html`:
```html
<title>BETHEEL MARKET - Tu Mini Market de Confianza</title>
```

### Descripción (para Google)
Buscar en `index.html`:
```html
<meta name="description" content="BETHEEL MARKET - Tu mini market de confianza...">
```

Personalizar para mejorar el SEO.

---

## 📋 CHECKLIST DE PERSONALIZACIÓN

Marca cada item cuando lo completes:

- [ ] ✅ Actualicé el número de WhatsApp
- [ ] ✅ Actualicé la dirección física
- [ ] ✅ Actualicé los horarios de atención
- [ ] ✅ Actualicé el teléfono de contacto
- [ ] ✅ Configuré el mapa de Google Maps
- [ ] ✅ Agregué enlaces de redes sociales
- [ ] ✅ Personalicé los mensajes de WhatsApp
- [ ] ✅ Revisé la descripción del negocio
- [ ] ✅ Verifiqué el título y meta descripción
- [ ] ✅ (Opcional) Cambié los colores de marca

---

## 🔍 CÓMO BUSCAR Y REEMPLAZAR

### En Visual Studio Code:
1. Presiona `Ctrl + F` (buscar)
2. Presiona `Ctrl + H` (buscar y reemplazar)
3. Escribe lo que quieres buscar
4. Escribe el reemplazo
5. Click en "Reemplazar todo"

### En Notepad++:
1. Presiona `Ctrl + H`
2. En "Buscar": escribe el texto original
3. En "Reemplazar con": escribe el nuevo texto
4. Click en "Reemplazar todo"

### En Bloc de notas:
1. Presiona `Ctrl + H`
2. Buscar y reemplazar manualmente

---

## 💡 CONSEJOS

1. **Haz una copia de seguridad** antes de editar
2. **Prueba localmente** antes de publicar
3. **Verifica en móvil** después de cada cambio
4. **Guarda cambios frecuentemente**
5. **Usa un editor de código** como VS Code (gratis)

---

## 🆘 SI ALGO SALE MAL

1. **No te preocupes** - siempre puedes volver a los archivos originales
2. **Revisa la consola del navegador** (F12) para ver errores
3. **Verifica que no hayas borrado comillas** o etiquetas HTML
4. **Compara con el código original** si algo no funciona

---

## 📞 DATOS DE EJEMPLO ACTUALES

Estos son los datos de ejemplo que debes reemplazar:

| Campo | Valor Actual | Acción |
|-------|--------------|--------|
| WhatsApp | 593999999999 | ❌ CAMBIAR |
| Dirección | Calle Principal, Sector Centro | ❌ CAMBIAR |
| Horario | Lunes a Sábado: 7:00 AM - 8:00 PM | ❌ CAMBIAR |
| Teléfono | +593 99 999 9999 | ❌ CAMBIAR |
| Facebook | # | ❌ CAMBIAR |
| Instagram | # | ❌ CAMBIAR |
| Mapa | Ubicación genérica | ❌ CAMBIAR |

---

**¡Recuerda guardar todos los cambios antes de publicar!**
