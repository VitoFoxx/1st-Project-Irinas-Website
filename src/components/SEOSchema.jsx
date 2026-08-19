export function SEOSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://silikon-service-dortmann.de/#business',
    'name': 'Silikon-Service Dortmann',
    'description': 'Professionelle Silikonfugen und Fugensanierung in Hannover und Umgebung. Fachgerechte Ausführung mit hochwertigem PCI-Silikon.',
    'url': 'https://silikon-service-dortmann.de',
    'telephone': '+491517261842',
    'email': 'service-dortmann@gmx.de',
    'image': 'https://silikon-service-dortmann.de/og-image.jpg',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Laatzen',
      'addressRegion': 'Niedersachsen',
      'postalCode': '30880',
      'addressCountry': 'DE'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Hannover'
      },
      {
        '@type': 'City',
        'name': 'Laatzen'
      },
      {
        '@type': 'City',
        'name': 'Sehnde'
      },
      {
        '@type': 'City',
        'name': 'Wunstorf'
      }
    ],
    'serviceType': 'Silikonfugen, Fugensanierung, Fliesenlegung',
    'priceRange': '€€',
    'sameAs': []
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
