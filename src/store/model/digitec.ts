import {Store} from './store';

export const Digitec: Store = {
	labels: {
		outOfStock: {
			container:
				'.productDetail',
			text: [
				'Attualmente non disponibile e nessuna data di consegna prevista.',
				'Currently out of stock and no delivery date available.',
				'Non disponible pour le moment et aucune date de livraison prévue.',
				'Aktuell nicht lieferbar und kein Liefertermin vorhanden.'
			]
		},
		inStock: {
			container:
				'#addToCartButton',
			text: [
				'Aggiungi al carrello',
				'Add to cart',
				'Ajouter au panier',
				'In den Warenkorb'
			]
		}
	},
	links: [
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3070',
			url: 'https://www.digitec.ch/it/s1/product/gigabyte-geforce-rtx-3070-eagle-8g-8gb-schede-grafiche-13894876'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.digitec.ch/it/s1/product/gigabyte-geforce-rtx-3070-eagle-oc-8gb-schede-grafiche-13894686'
		}
	],
	name: 'digitec'
};
