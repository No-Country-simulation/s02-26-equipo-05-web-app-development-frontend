import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    constructor(private route: ActivatedRoute) { }

    /**
     * Escanea la URL actual en busca de UTMs o Click IDs (Google/Meta)
     * y los guarda silenciosamente en el LocalStorage del navegador.
     */
    captureUrlParams() {
        if (typeof window === 'undefined') return; // <-- Evita crasheo en SSR

        this.route.queryParams.subscribe(params => {
            const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];

            let hasNewParams = false;
            trackingParams.forEach(param => {
                if (params[param]) {
                    localStorage.setItem(param, params[param]);
                    hasNewParams = true;
                }
            });

            if (hasNewParams) {
                console.log('[Analytics] Nuevos parámetros de rastreo capturados de la URL.');
            }
        });
    }

    /**
     * Retorna un objeto con todos los UTMs y Click IDs guardados.
     * Ideal para adjuntar al payload de creación del Lead en el Backend.
     */
    getStoredParams(): Record<string, string | null> {
        if (typeof window === 'undefined') {
            return { utm_source: null, utm_medium: null, utm_campaign: null, utm_term: null, utm_content: null, gclid: null, fbclid: null };
        }

        return {
            utm_source: localStorage.getItem('utm_source'),
            utm_medium: localStorage.getItem('utm_medium'),
            utm_campaign: localStorage.getItem('utm_campaign'),
            utm_term: localStorage.getItem('utm_term'),
            utm_content: localStorage.getItem('utm_content'),
            gclid: localStorage.getItem('gclid'),
            fbclid: localStorage.getItem('fbclid')
        };
    }

    /**
     * Limpia el LocalStorage de parámetros de rastreo (Útil post-compra).
     */
    clearStoredParams() {
        if (typeof window === 'undefined') return;

        const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
        trackingParams.forEach(param => localStorage.removeItem(param));
    }

    /**
     * Empuja un evento personalizado al Data Layer global de Google Tag Manager.
     */
    trackEvent(eventName: string, payload: any = {}) {
        if (typeof window === 'undefined') return;

        const dataLayer = (window as any).dataLayer = (window as any).dataLayer || [];
        dataLayer.push({
            event: eventName,
            ...payload
        });
        console.log(`[DataLayer] Grito enviado: ${eventName}`, payload);
    }
}
