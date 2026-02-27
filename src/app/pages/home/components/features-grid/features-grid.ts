import { Component } from '@angular/core';

@Component({
    selector: 'app-features-grid',
    standalone: true,
    imports: [],
    templateUrl: './features-grid.html',
})
export class FeaturesGrid {
    features = [
        {
            title: 'Tu LLC o C-Corp Rápido',
            description: 'Nos encargamos de todo el papeleo en Delaware o Wyoming para que tú te enfoques en crecer, no en la burocracia.',
            icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        },
        {
            title: 'Cuenta de Banco en USA',
            description: 'Obtén tu EIN (Número de Identificación de Empleador) y abre tu cuenta bancaria estadounidense sin viajar.',
            icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        },
        {
            title: 'Cumplimiento y Contabilidad',
            description: 'Declaración anual de impuestos estatales y federales. Un equipo experto asegurándose de que estés en regla con el IRS.',
            icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
            title: 'Agente Registrado 24/7',
            description: 'Dirección comercial virtual y escaneo de tu correo oficial de EE.UU., disponible en tu dashboard privado todo el año.',
            icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        }
    ];
}
