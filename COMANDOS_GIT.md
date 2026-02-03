# 🚀 COMANDOS GIT - GUÍA RÁPIDA

## 📌 ¿Qué es Git y GitHub?

- **Git:** Sistema de control de versiones (como un "historial de cambios")
- **GitHub:** Plataforma online para alojar código y publicar sitios web

---

## 🎯 OPCIÓN 1: Publicar con GitHub Pages (Gratis)

### Paso 1: Instalar Git

**Windows:**
1. Descargar: https://git-scm.com/download/win
2. Instalar con opciones por defecto
3. Verificar instalación:
```bash
git --version
```

### Paso 2: Configurar Git (Solo la primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Paso 3: Crear cuenta en GitHub

1. Ir a: https://github.com
2. Click en "Sign up"
3. Completar registro (gratis)

### Paso 4: Crear repositorio en GitHub

1. Click en "+" → "New repository"
2. Nombre: `betheel-market`
3. Marcar "Public"
4. NO marcar "Initialize with README"
5. Click "Create repository"

### Paso 5: Subir tu proyecto

Abre PowerShell en la carpeta del proyecto y ejecuta:

```bash
# Navegar a la carpeta del proyecto
cd "e:\proyecto Betel"

# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primera versión de BETHEEL MARKET"

# Renombrar rama a main
git branch -M main

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/betheel-market.git

# Subir archivos
git push -u origin main
```

### Paso 6: Activar GitHub Pages

1. En GitHub, ve a tu repositorio
2. Click en "Settings"
3. En el menú lateral, click "Pages"
4. En "Source", selecciona "main"
5. Click "Save"
6. Espera 1-2 minutos
7. Tu sitio estará en: `https://TU-USUARIO.github.io/betheel-market`

---

## 🔄 ACTUALIZAR LA PÁGINA (Después de hacer cambios)

Cuando edites archivos y quieras publicar los cambios:

```bash
# Navegar a la carpeta
cd "e:\proyecto Betel"

# Ver qué archivos cambiaron
git status

# Agregar todos los cambios
git add .

# Guardar cambios con un mensaje descriptivo
git commit -m "Actualicé información de contacto"

# Subir a GitHub
git push
```

**Los cambios se publicarán automáticamente en 1-2 minutos.**

---

## 📝 COMANDOS ÚTILES

### Ver estado de archivos
```bash
git status
```

### Ver historial de cambios
```bash
git log
```

### Ver cambios específicos
```bash
git diff
```

### Deshacer cambios (antes de commit)
```bash
git checkout -- nombre-archivo.html
```

### Ver ramas
```bash
git branch
```

### Crear nueva rama
```bash
git branch nueva-caracteristica
git checkout nueva-caracteristica
```

### Volver a rama principal
```bash
git checkout main
```

---

## 🎯 OPCIÓN 2: GitHub Desktop (Más Fácil)

Si prefieres una interfaz gráfica:

### Paso 1: Descargar GitHub Desktop
https://desktop.github.com

### Paso 2: Instalar y abrir

### Paso 3: Iniciar sesión con tu cuenta de GitHub

### Paso 4: Agregar repositorio
1. Click en "File" → "Add local repository"
2. Selecciona la carpeta `e:\proyecto Betel`
3. Click "Add repository"

### Paso 5: Hacer commit
1. Verás todos los archivos en la lista
2. Escribe un mensaje: "Primera versión"
3. Click "Commit to main"

### Paso 6: Publicar
1. Click "Publish repository"
2. Marca "Public"
3. Click "Publish"

### Paso 7: Activar GitHub Pages
(Mismo proceso que en Opción 1, Paso 6)

---

## 🔄 ACTUALIZAR con GitHub Desktop

1. Edita tus archivos normalmente
2. Abre GitHub Desktop
3. Verás los cambios en la lista
4. Escribe mensaje descriptivo
5. Click "Commit to main"
6. Click "Push origin"
7. ¡Listo! Cambios publicados

---

## 🌐 COMPARACIÓN: GitHub Pages vs Netlify

| Característica | GitHub Pages | Netlify |
|----------------|--------------|---------|
| Facilidad | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Velocidad publicación | 1-2 min | 30 seg |
| Dominio gratis | username.github.io | random.netlify.app |
| SSL/HTTPS | ✅ | ✅ |
| Actualizaciones | Git push | Drag & drop |
| Límites | 1GB | 100GB |
| Mejor para | Desarrolladores | Principiantes |

**Recomendación:**
- **Si sabes Git:** GitHub Pages
- **Si prefieres fácil:** Netlify
- **Puedes usar ambos:** Sí, sin problema

---

## 📋 WORKFLOW RECOMENDADO

### Para desarrollo:
1. Edita archivos localmente
2. Prueba en navegador (abre index.html)
3. Cuando funcione bien, haz commit
4. Sube a GitHub

### Para actualizaciones rápidas:
1. Edita el archivo
2. Git add, commit, push
3. Espera 1-2 minutos
4. Verifica en el sitio online

---

## 🔐 SEGURIDAD

### NO subas a GitHub:
- ❌ Contraseñas
- ❌ API keys
- ❌ Información sensible
- ❌ Archivos personales

### SÍ puedes subir:
- ✅ HTML, CSS, JavaScript
- ✅ Imágenes
- ✅ Documentación
- ✅ Archivos públicos

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "fatal: not a git repository"
```bash
git init
```

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/betheel-market.git
```

### Error al hacer push
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Olvidé mi mensaje de commit
```bash
git commit --amend -m "Nuevo mensaje"
```

### Quiero deshacer el último commit
```bash
git reset --soft HEAD~1
```

---

## 📚 RECURSOS PARA APRENDER GIT

### Tutoriales interactivos:
- https://learngitbranching.js.org (Muy recomendado)
- https://try.github.io

### Documentación:
- https://git-scm.com/doc
- https://docs.github.com

### Videos:
- YouTube: "Git y GitHub para principiantes"
- YouTube: "GitHub Pages tutorial"

---

## 💡 TIPS PROFESIONALES

### Mensajes de commit descriptivos:
```bash
# ❌ Mal
git commit -m "cambios"

# ✅ Bien
git commit -m "Actualicé número de WhatsApp y horarios"
```

### Commits frecuentes:
- Haz commit cada vez que completes una tarea
- No esperes a terminar todo
- Es mejor muchos commits pequeños que uno grande

### Branches para experimentos:
```bash
git checkout -b prueba-nuevo-diseño
# Haz cambios
# Si funciona:
git checkout main
git merge prueba-nuevo-diseño
# Si no funciona:
git checkout main
git branch -D prueba-nuevo-diseño
```

---

## ✅ CHECKLIST GIT

Antes de tu primer push:

- [ ] Git instalado
- [ ] Cuenta de GitHub creada
- [ ] Repositorio creado en GitHub
- [ ] Git configurado (user.name y user.email)
- [ ] .gitignore creado
- [ ] Archivos sensibles NO incluidos

---

## 🎯 ALTERNATIVAS A GITHUB

Si prefieres otras plataformas:

### GitLab
- Similar a GitHub
- Gratis
- CI/CD incluido
- https://gitlab.com

### Bitbucket
- De Atlassian
- Gratis para equipos pequeños
- https://bitbucket.org

### SourceForge
- Veterano
- Gratis
- https://sourceforge.net

**Todos funcionan similar a GitHub.**

---

## 🚀 RESUMEN RÁPIDO

### Para publicar por primera vez:
```bash
cd "e:\proyecto Betel"
git init
git add .
git commit -m "Primera versión"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/betheel-market.git
git push -u origin main
```

### Para actualizar después:
```bash
cd "e:\proyecto Betel"
git add .
git commit -m "Descripción de cambios"
git push
```

---

**¡Eso es todo! Con estos comandos puedes gestionar tu proyecto profesionalmente.**

*Si prefieres algo más simple, usa Netlify con drag & drop.*
