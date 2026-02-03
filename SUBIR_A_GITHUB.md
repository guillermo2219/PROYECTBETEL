# 🚀 SUBIR PROYECTO A GITHUB

## ✅ YA ESTÁ CASI LISTO

He preparado tu proyecto para GitHub. Solo falta autenticarte.

---

## 📋 OPCIÓN 1: GITHUB DESKTOP (MÁS FÁCIL) ✅ RECOMENDADO

### **Paso 1: Descargar GitHub Desktop**
1. Ve a: https://desktop.github.com
2. Descarga e instala GitHub Desktop
3. Inicia sesión con tu cuenta de GitHub

### **Paso 2: Abrir tu proyecto**
1. Abre GitHub Desktop
2. Click en **"File"** → **"Add local repository"**
3. Click en **"Choose..."**
4. Selecciona la carpeta: `e:\proyecto Betel`
5. Click en **"Add repository"**

### **Paso 3: Publicar**
1. Click en **"Publish repository"**
2. Desmarca **"Keep this code private"** (si quieres que sea público)
3. Click en **"Publish repository"**

**¡LISTO!** Tu código está en GitHub.

---

## 📋 OPCIÓN 2: LÍNEA DE COMANDOS (MANUAL)

### **Paso 1: Configurar credenciales**

Abre PowerShell en `e:\proyecto Betel` y ejecuta:

```powershell
# Configurar tu nombre
git config --global user.name "Tu Nombre"

# Configurar tu email
git config --global user.email "tu-email@gmail.com"
```

### **Paso 2: Autenticarte con GitHub**

Tienes 2 opciones:

#### **Opción A: Personal Access Token (Recomendado)**

1. Ve a: https://github.com/settings/tokens
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. Dale un nombre: `Betheel Project`
4. Marca: **repo** (todos los permisos de repo)
5. Click en **"Generate token"**
6. **COPIA EL TOKEN** (solo se muestra una vez)

Luego ejecuta:
```powershell
git push -u origin main
```

Cuando te pida:
- **Username:** tu-usuario-github
- **Password:** PEGA_EL_TOKEN (no tu contraseña)

#### **Opción B: GitHub CLI**

1. Instala GitHub CLI: https://cli.github.com
2. Ejecuta:
```powershell
gh auth login
```
3. Sigue las instrucciones
4. Luego:
```powershell
git push -u origin main
```

---

## 📋 OPCIÓN 3: SUBIR MANUALMENTE (SIN GIT)

### **Paso 1: Ir a tu repositorio**
1. Ve a: https://github.com/guillermo2219/Betheel
2. Click en **"Add file"** → **"Upload files"**

### **Paso 2: Arrastrar archivos**
1. Arrastra TODOS los archivos de `e:\proyecto Betel`
2. Escribe un mensaje: "Initial commit - BETHEEL MARKET website"
3. Click en **"Commit changes"**

**¡LISTO!** Tu código está en GitHub.

---

## ✅ VERIFICAR QUE SUBIÓ CORRECTAMENTE

1. Ve a: https://github.com/guillermo2219/Betheel
2. Deberías ver todos tus archivos:
   - index.html
   - css/
   - js/
   - imagenes/
   - README.md
   - etc.

---

## 🌐 PUBLICAR CON GITHUB PAGES (GRATIS)

Una vez que tu código esté en GitHub:

### **Activar GitHub Pages:**
1. Ve a tu repositorio: https://github.com/guillermo2219/Betheel
2. Click en **"Settings"**
3. En el menú izquierdo, click en **"Pages"**
4. En **"Source"**, selecciona: **main** (rama)
5. Click en **"Save"**

**Tu sitio estará en:**
```
https://guillermo2219.github.io/Betheel/
```

**Tiempo:** 2-3 minutos para activarse

---

## 🔄 ACTUALIZAR TU PROYECTO EN EL FUTURO

### **Con GitHub Desktop:**
1. Haz cambios en tus archivos
2. Abre GitHub Desktop
3. Verás los cambios listados
4. Escribe un mensaje de commit
5. Click en **"Commit to main"**
6. Click en **"Push origin"**

### **Con línea de comandos:**
```powershell
git add .
git commit -m "Descripción de los cambios"
git push
```

---

## 📊 ESTADO ACTUAL

✅ **Completado:**
- [x] Repositorio Git inicializado
- [x] Archivos agregados al staging
- [x] Primer commit creado
- [x] Repositorio remoto configurado
- [x] Rama principal configurada (main)

⏳ **Pendiente:**
- [ ] Autenticación con GitHub
- [ ] Push de archivos al repositorio remoto

---

## 🎯 RESUMEN RÁPIDO

**Lo más fácil:**
1. Descarga GitHub Desktop
2. Agrega el repositorio local
3. Publica

**O manualmente:**
1. Ve a GitHub.com
2. Sube los archivos arrastrando

**O con token:**
1. Genera token en GitHub
2. `git push -u origin main`
3. Usa el token como contraseña

---

## 💡 RECOMENDACIÓN

**Usa GitHub Desktop** - Es la forma más fácil y visual de trabajar con Git.

Descarga: https://desktop.github.com

---

## 🆘 ¿PROBLEMAS?

### **"Authentication failed"**
- Usa GitHub Desktop
- O genera un Personal Access Token

### **"Repository not found"**
- Verifica que el repositorio existe en GitHub
- URL correcta: https://github.com/guillermo2219/Betheel.git

### **"Permission denied"**
- Verifica que estás autenticado
- Usa GitHub Desktop o token

---

## 📞 SIGUIENTE PASO

**Elige una opción:**

1. **GitHub Desktop** (más fácil) ✅
   - Descarga e instala
   - Agrega repositorio local
   - Publica

2. **Subida manual** (rápido)
   - Ve a GitHub.com
   - Arrastra archivos

3. **Línea de comandos** (avanzado)
   - Genera token
   - `git push -u origin main`

---

**¿Cuál opción prefieres?** Te ayudo con la que elijas.

*Tu proyecto está listo para GitHub* 🚀
