# 🚀 GUÍA DE PUBLICACIÓN - BETHEEL MARKET

## 🎯 OPCIÓN RECOMENDADA: NETLIFY (100% GRATIS)

### ✅ Por qué Netlify:
- **GRATIS** para siempre
- **2 minutos** para publicar
- **Sin tarjeta de crédito**
- **SSL/HTTPS** incluido
- **Dominio gratis** (.netlify.app)
- **Actualizaciones fáciles**

---

## 📋 PASO A PASO - PUBLICACIÓN EN NETLIFY

### **PASO 1: Preparar los Archivos** ✅ YA ESTÁ LISTO

Tu proyecto ya está completo con:
```
✅ index.html
✅ css/styles.css
✅ js/script.js
✅ imagenes/ (con logo y fotos)
```

**NO necesitas hacer nada más con los archivos.**

---

### **PASO 2: Ir a Netlify**

1. Abre tu navegador
2. Ve a: **https://www.netlify.com**
3. Verás la página principal de Netlify

---

### **PASO 3: Crear Cuenta (GRATIS)**

**Opción A - Con Email:**
1. Click en **"Sign up"** (arriba a la derecha)
2. Ingresa tu email
3. Crea una contraseña
4. Click en **"Sign up"**
5. Verifica tu email (revisa tu bandeja de entrada)

**Opción B - Con GitHub (Recomendado):**
1. Click en **"Sign up"**
2. Click en **"Sign up with GitHub"**
3. Autoriza Netlify
4. ¡Listo!

**Opción C - Con Google:**
1. Click en **"Sign up"**
2. Click en **"Sign up with Google"**
3. Selecciona tu cuenta de Google
4. ¡Listo!

---

### **PASO 4: Publicar tu Sitio**

Una vez dentro de Netlify:

1. **Verás tu dashboard** (panel de control)

2. **Busca la sección que dice:**
   ```
   "Want to deploy a new site without connecting to Git?"
   ```

3. **Arrastra tu carpeta aquí:**
   - Abre el explorador de archivos de Windows
   - Ve a: `e:\proyecto Betel`
   - **ARRASTRA TODA LA CARPETA** a la zona de Netlify que dice:
     ```
     "Drag and drop your site output folder here"
     ```

4. **Netlify empezará a subir los archivos**
   - Verás una barra de progreso
   - Toma unos 30 segundos

5. **¡LISTO!** Tu sitio está publicado
   - Netlify te dará una URL como:
     ```
     https://random-name-123456.netlify.app
     ```

---

### **PASO 5: Cambiar el Nombre del Sitio (Opcional)**

Tu sitio tendrá un nombre aleatorio. Para cambiarlo:

1. En el dashboard de Netlify, click en tu sitio
2. Click en **"Site settings"**
3. Click en **"Change site name"**
4. Escribe un nombre mejor, por ejemplo:
   ```
   betheel-market
   ```
5. Click en **"Save"**

**Tu nueva URL será:**
```
https://betheel-market.netlify.app
```

---

## 🎨 PERSONALIZACIÓN ANTES DE PUBLICAR

### **IMPORTANTE: Actualiza estos datos primero**

Abre `index.html` y busca/reemplaza:

#### **1. Número de WhatsApp:**
```html
Buscar:  593999999999
Reemplazar con: TU_NUMERO (con código de país, sin espacios)
Ejemplo: 593987654321
```

#### **2. Dirección:**
```html
Buscar:  Calle Principal, Sector Centro
Reemplazar con: Tu dirección real
```

#### **3. Horarios:**
```html
Buscar:  Lunes a Sábado: 7:00 AM - 8:00 PM
Reemplazar con: Tus horarios reales
```

#### **4. Google Maps:**
1. Ve a: https://www.google.com/maps
2. Busca tu ubicación
3. Click en **"Compartir"**
4. Click en **"Insertar un mapa"**
5. Copia el código `<iframe>`
6. En `index.html`, busca: `<!-- Google Maps iframe -->`
7. Reemplaza el iframe existente con el tuyo

---

## 🔄 CÓMO ACTUALIZAR TU SITIO

Cuando hagas cambios:

### **Método 1: Arrastrar y Soltar (Fácil)**
1. Haz los cambios en tus archivos
2. Ve a Netlify
3. Click en tu sitio
4. Click en **"Deploys"**
5. Arrastra la carpeta actualizada
6. ¡Listo! Se actualiza en 30 segundos

### **Método 2: Netlify Drop (Más Fácil)**
1. Ve a: https://app.netlify.com/drop
2. Arrastra tu carpeta
3. ¡Listo!

---

## 🌐 DOMINIO PERSONALIZADO (Opcional)

Si quieres un dominio como `betheelmarket.com`:

### **Opción A: Comprar dominio**
1. Ve a: https://www.namecheap.com o https://www.godaddy.com
2. Busca tu dominio (ejemplo: betheelmarket.com)
3. Cómpralo (~$10-12 USD/año)

### **Opción B: Conectar dominio a Netlify**
1. En Netlify, click en tu sitio
2. Click en **"Domain settings"**
3. Click en **"Add custom domain"**
4. Ingresa tu dominio
5. Sigue las instrucciones para configurar DNS

**Costo:** ~$1 USD/mes (solo el dominio, Netlify sigue gratis)

---

## ✅ CHECKLIST DE PUBLICACIÓN

### **Antes de publicar:**
- [ ] Actualicé número de WhatsApp
- [ ] Actualicé dirección
- [ ] Actualicé horarios
- [ ] Configuré Google Maps
- [ ] Agregué enlaces de redes sociales
- [ ] Probé localmente (abrí index.html)

### **Publicación:**
- [ ] Creé cuenta en Netlify
- [ ] Arrastré la carpeta a Netlify
- [ ] Cambié el nombre del sitio
- [ ] Verifiqué que cargue correctamente
- [ ] Probé en móvil

### **Después de publicar:**
- [ ] Compartí en redes sociales
- [ ] Agregué a Google My Business
- [ ] Imprimí en tarjetas de presentación
- [ ] Envié a clientes por WhatsApp

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### **"Las imágenes no cargan"**
**Solución:**
- Verifica que la carpeta `imagenes/` esté incluida
- Asegúrate de arrastrar TODA la carpeta, no solo index.html

### **"WhatsApp no funciona"**
**Solución:**
- Verifica el número (debe incluir código de país)
- Formato correcto: `593987654321` (sin espacios, sin +)

### **"El mapa no se ve"**
**Solución:**
- Asegúrate de haber copiado el código `<iframe>` completo
- Verifica que esté entre las etiquetas correctas

### **"Quiero cambiar el nombre del sitio"**
**Solución:**
- Site settings → Change site name → Guardar

---

## 📱 COMPARTIR TU SITIO

Una vez publicado, comparte así:

### **WhatsApp:**
```
¡Visita nuestra nueva página web! 🛒
https://betheel-market.netlify.app

Conoce nuestros productos, promociones y ubicación.
¡Estamos para servirte! 😊
```

### **Facebook/Instagram:**
```
🎉 ¡Estamos online!

Visita nuestra nueva página web:
👉 https://betheel-market.netlify.app

✨ Productos frescos
✨ Precios accesibles
✨ Atención de calidad

#BetheelMarket #MiniMarket #ComprasOnline
```

### **Tarjetas de Presentación:**
```
BETHEEL MARKET
Tu mini market de confianza

🌐 betheel-market.netlify.app
📱 WhatsApp: +593 99 999 9999
📍 [Tu dirección]
```

---

## 🎯 PRÓXIMOS PASOS DESPUÉS DE PUBLICAR

### **1. Google My Business (Gratis)**
1. Ve a: https://www.google.com/business
2. Registra tu negocio
3. Agrega tu sitio web
4. Aparecerás en Google Maps

### **2. Redes Sociales**
- Crea página de Facebook
- Crea perfil de Instagram
- Agrega el link de tu sitio web

### **3. Marketing**
- Comparte en grupos locales
- Imprime volantes con el link
- Agrega a tu firma de email

---

## 💰 COSTOS TOTALES

### **Opción 1: GRATIS (Recomendada para empezar)**
```
Hosting Netlify:     $0/mes
Dominio .netlify.app: $0/mes
SSL/HTTPS:           $0/mes
─────────────────────────────
TOTAL:               $0/mes
```

### **Opción 2: Con dominio propio**
```
Hosting Netlify:     $0/mes
Dominio .com:        ~$1/mes ($12/año)
SSL/HTTPS:           $0/mes
─────────────────────────────
TOTAL:               ~$1/mes
```

---

## 🎉 ¡LISTO PARA PUBLICAR!

**Resumen de pasos:**
1. ✅ Actualiza información (WhatsApp, dirección, horarios)
2. ✅ Ve a https://www.netlify.com
3. ✅ Crea cuenta (gratis)
4. ✅ Arrastra la carpeta `e:\proyecto Betel`
5. ✅ ¡Tu sitio está online!

**Tiempo total:** 5-10 minutos

---

## 📞 ¿NECESITAS AYUDA?

Si tienes problemas:
1. Lee esta guía completa
2. Revisa la sección "Solución de problemas"
3. Verifica que todos los archivos estén en la carpeta

---

**¡Tu página web estará online en minutos!** 🚀✨

*Desarrollado con ❤️ para BETHEEL MARKET*
