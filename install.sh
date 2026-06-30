#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ask() { read -rp "  $1 [y/N] " ans; [[ "${ans,,}" == "y" ]]; }

echo "==> Installing Daemon 2.0 KDE theme..."

# Color scheme
mkdir -p "$HOME/.local/share/color-schemes"
cp "$SCRIPT_DIR/Color Scheme/Daemon2.colors" "$HOME/.local/share/color-schemes/"
echo "  [ok] Color scheme"

# Kvantum theme
mkdir -p "$HOME/.config/Kvantum"
cp -r "$SCRIPT_DIR/Kvantum/daemon-2.0" "$HOME/.config/Kvantum/"
echo "  [ok] Kvantum theme"

# Icon theme
mkdir -p "$HOME/.local/share/icons"
cp -r "$SCRIPT_DIR/Icon Theme/Daemon-Icons" "$HOME/.local/share/icons/"
echo "  [ok] Icon theme"

# Plasma style
mkdir -p "$HOME/.local/share/plasma/desktoptheme"
cp -r "$SCRIPT_DIR/Plasma Style/Daemon-2.0" "$HOME/.local/share/plasma/desktoptheme/"
echo "  [ok] Plasma style"

# Window decorations (Aurorae)
mkdir -p "$HOME/.local/share/aurorae/themes"
cp -r "$SCRIPT_DIR/Window Decorations/daemon-2.0" "$HOME/.local/share/aurorae/themes/"
echo "  [ok] Window decorations"

# Konsole color scheme
mkdir -p "$HOME/.local/share/konsole"
cp "$SCRIPT_DIR/Konsole/Daemon-2.0.colorscheme" "$HOME/.local/share/konsole/"
echo "  [ok] Konsole color scheme"

# Kitty theme
mkdir -p "$HOME/.config/kitty"
cp "$SCRIPT_DIR/Kitty/Daemon-2.0.conf" "$HOME/.config/kitty/"
echo "  [ok] Kitty theme"

# VSCode extension (both OSS and proprietary)
if [ -d "$HOME/.vscode/extensions" ]; then
    cp -r "$SCRIPT_DIR/VSCode/daemon-2-0" "$HOME/.vscode/extensions/"
    echo "  [ok] VSCode (proprietary) extension"
fi
if [ -d "$HOME/.vscode-oss/extensions" ]; then
    cp -r "$SCRIPT_DIR/VSCode/daemon-2-0" "$HOME/.vscode-oss/extensions/"
    echo "  [ok] VSCode OSS extension"
fi

# GTK theme (WIP)
if ask "Install GTK theme? (work in progress — Breeze-Dark base only)"; then
    mkdir -p "$HOME/.local/share/themes"
    cp -r "$SCRIPT_DIR/GTK Theme/Breeze-Dark" "$HOME/.local/share/themes/Daemon-2.0-GTK"
    echo "  [ok] GTK theme (WIP)"
else
    echo "  [--] GTK theme skipped"
fi

# Bibata-Original-Classic cursor
echo "==> Downloading Bibata-Original-Classic cursor (v2.0.7)..."
BIBATA_URL="https://github.com/ful1e5/Bibata_Cursor/releases/download/v2.0.7/Bibata-Original-Classic.tar.xz"
BIBATA_TMP="$(mktemp -t bibata.XXXXXX.tar.xz)"
curl -L -o "$BIBATA_TMP" "$BIBATA_URL"
tar -xf "$BIBATA_TMP" -C "$HOME/.local/share/icons/"
rm -f "$BIBATA_TMP"
echo "  [ok] Bibata-Original-Classic cursor"

# TV Glitch KWin effect (burn-my-windows)
echo "==> Installing TV Glitch KWin effect..."
if ! pacman -Qs kwin6-effects-burn-my-windows &>/dev/null; then
    echo "  [!] kwin6-effects-burn-my-windows not installed — installing via yay..."
    if yay -S --noconfirm kwin6-effects-burn-my-windows; then
        echo "  [ok] TV Glitch (burn-my-windows)"
    else
        echo "  [!!] TV Glitch install failed — run manually: yay -S kwin6-effects-burn-my-windows"
    fi
else
    echo "  [ok] TV Glitch (burn-my-windows)"
fi

# KWin settings
kwriteconfig6 --file kwinrc --group Plugins --key kwin6_effect_tv_glitchEnabled true
kwriteconfig6 --file kwinrc --group Plugins --key slideEnabled true
kwriteconfig6 --file kwinrc --group TabBox --key LayoutName flip
echo "  [ok] KWin: TV Glitch, Slide, Flip Switch task switcher"

# Window title font: Orbitron 8pt
kwriteconfig6 --file kdeglobals --group WM --key activeFont "Orbitron,8,-1,5,400,0,0,0,0,0,Regular"
echo "  [ok] Window title font: Orbitron 8pt"

qdbus6 org.kde.KWin /KWin reconfigure 2>/dev/null || true
echo "  [ok] KWin config reloaded"

# Wallpaper — pick closest resolution
WALLPAPER_DIR="$SCRIPT_DIR/Wallpapers"
SCREEN_RES="$(kscreen-doctor -o 2>/dev/null | grep -oP '\d+x\d+(?=@)' | head -1 || true)"
if [[ "$SCREEN_RES" == "3440x"* ]]; then
    WP="$WALLPAPER_DIR/3440x1440-1.25.png"
elif [[ "$SCREEN_RES" == "2560x"* ]]; then
    WP="$WALLPAPER_DIR/2560x1600-1.25.png"
else
    WP="$WALLPAPER_DIR/1920x1080-1.25.png"
fi
WALLPAPER_DEST="$HOME/Downloads/daemon-2.0"
mkdir -p "$WALLPAPER_DEST"
cp "$WP" "$WALLPAPER_DEST/daemon-2.0-wallpaper.png"
echo "  [ok] Wallpaper saved to $WALLPAPER_DEST/daemon-2.0-wallpaper.png"

# Firefox/LibreWolf theme
EXT_ID="{28127a6f-9a96-4256-b4d9-87b54b7ffc1c}"
XPI="$SCRIPT_DIR/Firefox/Daemon2.0.xpi"

FF_PROFILE="$(grep -A1 "^Default=" "$HOME/.config/mozilla/firefox/profiles.ini" 2>/dev/null | tail -1 | cut -d= -f2 || true)"
if [ -n "$FF_PROFILE" ] && [ -d "$HOME/.config/mozilla/firefox/$FF_PROFILE" ]; then
    mkdir -p "$HOME/.config/mozilla/firefox/$FF_PROFILE/extensions"
    cp "$XPI" "$HOME/.config/mozilla/firefox/$FF_PROFILE/extensions/$EXT_ID.xpi"
    echo "  [ok] Firefox theme"
fi

LW_DEFAULT="$(grep -A1 "^Default=" "$HOME/.librewolf/installs.ini" 2>/dev/null | tail -1 | cut -d= -f2 || true)"
if [ -n "$LW_DEFAULT" ] && [ -d "$HOME/.librewolf/$LW_DEFAULT" ]; then
    mkdir -p "$HOME/.librewolf/$LW_DEFAULT/extensions"
    cp "$XPI" "$HOME/.librewolf/$LW_DEFAULT/extensions/$EXT_ID.xpi"
    echo "  [ok] LibreWolf theme"
fi

# ── Plasma Widgets ────────────────────────────────────────────────────────────
echo "==> Installing Plasma widgets..."

WIDGET_TMP="$(mktemp -d)"
trap 'rm -rf "$WIDGET_TMP"' EXIT

install_plasmoid() {
    local name="$1" file="$2"
    if kpackagetool6 --install "$file" --type Plasma/Applet &>/dev/null 2>&1 \
    || kpackagetool6 --upgrade "$file" --type Plasma/Applet &>/dev/null 2>&1; then
        echo "  [ok] $name"
    else
        echo "  [!!] $name — install failed (may already be up to date)"
    fi
}

install_plasmoid_from_dir() {
    local name="$1" dir="$2"
    if kpackagetool6 --install "$dir" --type Plasma/Applet &>/dev/null 2>&1 \
    || kpackagetool6 --upgrade "$dir" --type Plasma/Applet &>/dev/null 2>&1; then
        echo "  [ok] $name"
    else
        echo "  [!!] $name — install failed (may already be up to date)"
    fi
}

# 1. Apdatifier — direct .plasmoid release asset
curl -sL -o "$WIDGET_TMP/apdatifier.plasmoid" \
    "https://github.com/exequtic/apdatifier/releases/download/2.9.9/apdatifier_2.9.9.plasmoid"
install_plasmoid "Apdatifier" "$WIDGET_TMP/apdatifier.plasmoid"

# 2. Compact Pager — direct .plasmoid release asset
curl -sL -o "$WIDGET_TMP/compact_pager.plasmoid" \
    "https://github.com/tilorenz/compact_pager/releases/download/v3.6/package.plasmoid"
install_plasmoid "Compact Pager" "$WIDGET_TMP/compact_pager.plasmoid"

# 3. Power Usage — .plasmoid in repo main branch
curl -sL -o "$WIDGET_TMP/power-usage.plasmoid" \
    "https://github.com/magillos/Plasma-6-power-usage-widget/raw/main/Power-Usage.plasmoid"
install_plasmoid "Power Usage" "$WIDGET_TMP/power-usage.plasmoid"

# 4. Window Title Fork — repo root is the package
curl -sL -o "$WIDGET_TMP/window-title.tar.gz" \
    "https://github.com/psifidotos/applet-window-title/archive/refs/tags/0.7.1.tar.gz"
tar -xf "$WIDGET_TMP/window-title.tar.gz" -C "$WIDGET_TMP"
install_plasmoid_from_dir "Window Title Fork" "$WIDGET_TMP/applet-window-title-0.7.1"

# 5. Overview Widget — repo root is the package
curl -sL -o "$WIDGET_TMP/overview.tar.gz" \
    "https://github.com/HimDek/Overview-Widget-for-Plasma/archive/refs/heads/master.tar.gz"
tar -xf "$WIDGET_TMP/overview.tar.gz" -C "$WIDGET_TMP"
install_plasmoid_from_dir "Overview Widget" "$WIDGET_TMP/Overview-Widget-for-Plasma-master"

# 6. Netspeed Widget — package/ subdir
curl -sL -o "$WIDGET_TMP/netspeed.tar.gz" \
    "https://github.com/dfaust/plasma-applet-netspeed-widget/archive/refs/heads/master.tar.gz"
tar -xf "$WIDGET_TMP/netspeed.tar.gz" -C "$WIDGET_TMP"
install_plasmoid_from_dir "Netspeed Widget" "$WIDGET_TMP/plasma-applet-netspeed-widget-master/package"

# 7. Thermal Monitor — package/ subdir
curl -sL -o "$WIDGET_TMP/thermalmonitor.tar.gz" \
    "https://github.com/olib14/thermalmonitor/archive/refs/tags/v0.2.7.tar.gz"
tar -xf "$WIDGET_TMP/thermalmonitor.tar.gz" -C "$WIDGET_TMP"
install_plasmoid_from_dir "Thermal Monitor" "$WIDGET_TMP/thermalmonitor-0.2.7/package"

# 8. MediaBar — package/ subdir
curl -sL -o "$WIDGET_TMP/mediabar.tar.gz" \
    "https://github.com/panagiotopoulos/MediaBar/archive/refs/tags/v2.3.tar.gz"
tar -xf "$WIDGET_TMP/mediabar.tar.gz" -C "$WIDGET_TMP"
install_plasmoid_from_dir "MediaBar" "$WIDGET_TMP/MediaBar-2.3/package"

# 9. Simple Separator — fetch fresh download URL from OpenDesktop at install time
SEP_URL="$(curl -s 'https://api.opendesktop.org/ocs/v1/content/data/2137418?format=json' \
    | python3 -c "import sys,json; d=json.load(sys.stdin)['data']; d=d[0] if isinstance(d,list) else d; print(d.get('downloadlink1',''))" || true)"
if [ -n "$SEP_URL" ]; then
    curl -sL -o "$WIDGET_TMP/separator.tar.xz" "$SEP_URL"
    tar -xf "$WIDGET_TMP/separator.tar.xz" -C "$WIDGET_TMP"
    PKG_DIR="$(find "$WIDGET_TMP" -name "metadata.json" -path "*/zayron*" | head -1 | xargs dirname 2>/dev/null)"
    [ -n "$PKG_DIR" ] && install_plasmoid_from_dir "Simple Separator" "$PKG_DIR"
else
    echo "  [!!] Simple Separator — could not fetch download URL"
fi

# ── Apply theme ───────────────────────────────────────────────────────────────
echo "==> Applying theme..."

plasma-apply-colorscheme Daemon2 2>/dev/null && echo "  [ok] Colors"
plasma-apply-cursortheme Bibata-Original-Classic 2>/dev/null && echo "  [ok] Cursor"
plasma-apply-desktoptheme Daemon-2.0 2>/dev/null && echo "  [ok] Plasma style"
plasma-apply-wallpaperimage "$WALLPAPER_DEST/daemon-2.0-wallpaper.png" 2>/dev/null && echo "  [ok] Wallpaper"

kwriteconfig6 --file kdeglobals --group Icons --key Theme "Daemon-Icons"
echo "  [ok] Icons"

kwriteconfig6 --file kwinrc --group "org.kde.kdecoration2" --key library "org.kde.kwin.aurorae"
kwriteconfig6 --file kwinrc --group "org.kde.kdecoration2" --key theme "__aurorae__svg__daemon-2.0"
echo "  [ok] Window decorations"

kwriteconfig6 --file kdeglobals --group KDE --key widgetStyle "kvantum"
kvantummanager --set daemon-2.0 2>/dev/null && echo "  [ok] Kvantum → Daemon-2.0" || echo "  [!!] Kvantum theme set failed"

kbuildsycoca6 --noincremental 2>/dev/null && echo "  [ok] KDE theme cache rebuilt"
qdbus6 org.kde.KWin /KWin reconfigure 2>/dev/null || true
dbus-send --session --dest=org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.refreshCurrentShell 2>/dev/null || true
echo "  [ok] KWin + Plasmashell reloaded"

echo ""
echo "==> All done!"
echo "    Icons take effect on next login (or run: kquitapp6 plasmashell && kstart plasmashell)"
echo "    Restart Firefox/LibreWolf to activate the browser theme"
echo ""
echo "==> Widgets to place manually (all installed, add via right-click → Edit Panel):"
echo ""
echo "    Panel — left side:"
echo "      • Window Title Fork     — shows the active window title in the panel"
echo ""
echo "    Panel — right side (status area):"
echo "      • Netspeed Widget       — live upload/download speed"
echo "      • Thermal Monitor       — CPU/GPU temperatures"
echo "      • Power Usage           — power draw in watts"
echo "      • Apdatifier            — package update notifier"
echo "      • Simple Separator      — decorative spacer between widgets"
echo ""
echo "    Panel — taskbar/pager area:"
echo "      • Compact Pager         — virtual desktop switcher (replaces default pager)"
echo ""
echo "    Panel — media:"
echo "      • MediaBar              — compact media player controls (play/pause/track)"
echo ""
echo "    Desktop — floating widget:"
echo "      • Overview Widget       — clickable overview/exposé-style window switcher"
