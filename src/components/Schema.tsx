export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Optician",
        "name": "Wink Eye Care & Optical",
        "image": "https://www.winkeyecareoptical.com/images/logo.png",
        "url": "https://www.winkeyecareoptical.com/",
        "telephone": "215-935-6320",
        "email": "winkeyecare20@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1151 Old York Rd, Suite 103",
            "addressLocality": "Abington",
            "addressRegion": "PA",
            "postalCode": "19001",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.1158103,
            "longitude": -75.1207733
        },
        "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday"], "opens": "10:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday"], "opens": "11:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday"], "opens": "11:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "09:30", "closes": "17:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "description": "Every other Saturday", "opens": "09:00", "closes": "15:00" }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "100"
        }
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Minal Patel",
        "jobTitle": "Optometrist",
        "worksFor": {
            "@type": "Organization",
            "name": "Wink Eye Care & Optical"
        },
        "alumniOf": [
            { "@type": "EducationalOrganization", "name": "Temple University" },
            { "@type": "EducationalOrganization", "name": "Pennsylvania College of Optometry at Salus University" }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        </>
    );
}
