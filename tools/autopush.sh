#!/bin/bash
# Empuja a GitHub los commits que Claude deja en esta Mac.
#
# Por que existe: Claude commitea desde una VM Linux aislada que NO tiene
# credenciales de GitHub y solo tiene salida HTTPS por proxy (sin SSH).
# Esta Mac si tiene credenciales que funcionan. Este script las usa.
# Asi ningun token ni clave pasa nunca por el chat.
#
# Instalacion: ver README, seccion "Publicacion automatica".

set -u
REPO="$HOME/Documents/GitHub/shopping-items"
LOG="$HOME/Library/Logs/shopping-autopush.log"
mkdir -p "$(dirname "$LOG")"

cd "$REPO" 2>/dev/null || exit 0

# La VM de Claude no tiene permiso para borrar archivos, asi que git deja
# locks y objetos temporales huerfanos que bloquean el siguiente comando.
# Aca si se pueden borrar.
rm -f .git/index.lock .git/HEAD.lock .git/config.lock \
      .git/objects/maintenance.lock .git/refs/heads/*.lock 2>/dev/null
rm -rf .git/_stale 2>/dev/null
find .git/objects -name 'tmp_obj_*' -delete 2>/dev/null

# Hay upstream configurado?
git rev-parse --abbrev-ref '@{u}' >/dev/null 2>&1 || {
  echo "[$(date '+%F %T')] sin upstream configurado" >> "$LOG"; exit 0; }

# Hay algo pendiente?
PEND=$(git log '@{u}..HEAD' --oneline 2>/dev/null | wc -l | tr -d ' ')
[ "$PEND" = "0" ] && exit 0

echo "[$(date '+%F %T')] $PEND commit(s) pendientes, empujando..." >> "$LOG"
if git push origin HEAD >> "$LOG" 2>&1; then
  echo "[$(date '+%F %T')] OK" >> "$LOG"
else
  echo "[$(date '+%F %T')] FALLO (revisar credenciales de git en esta Mac)" >> "$LOG"
fi
