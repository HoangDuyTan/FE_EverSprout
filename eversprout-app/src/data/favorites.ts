const FAVORITES_KEY = "eversprout-favorites";

export function getFavorites(): number[] {
    const data = localStorage.getItem(FAVORITES_KEY);
    if (data === null) {
        return [];
    }

    try {
        const favorites = JSON.parse(data);
        return Array.isArray(favorites) ? favorites : [];
    } catch {
        return [];
    }
}

export function saveFavorites(favorites: number[]) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    window.dispatchEvent(new Event("favorites-updated"));
}

export function isFavorite(productId: number) {
    return getFavorites().includes(productId);
}

export function toggleFavorite(productId: number) {
    const favorites = getFavorites();

    if (favorites.includes(productId)) {
        saveFavorites(favorites.filter((id) => id !== productId));
        return false;
    }

    saveFavorites([...favorites, productId]);
    return true;
}

export function clearFavorites() {
    saveFavorites([]);
}
