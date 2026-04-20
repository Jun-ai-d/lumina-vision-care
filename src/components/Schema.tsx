import { siteConfig } from "@/config/site";

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Optician",
        "name": siteConfig.name,
        "image": `${siteConfig.url}/images/v2_logo.png`,
        "url": siteConfig.url,
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.contact.address.street,
            "addressLocality": siteConfig.contact.address.city,
            "addressRegion": siteConfig.contact.address.state,
            "postalCode": siteConfig.contact.address.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": siteConfig.contact.address.coords.lat,
            "longitude": siteConfig.contact.address.coords.lng
        },
        "openingHoursSpecification": siteConfig.hours.map(h => {
            const [opens, closes] = h.time === "Closed" ? ["00:00", "00:00"] : h.time.split(" - ").map(t => {
                const [time, period] = t.split(" ");
                let [hours, mins] = time.split(":").map(Number);
                if (period === "PM" && hours !== 12) hours += 12;
                if (period === "AM" && hours === 12) hours = 0;
                return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
            });
            return {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [h.day],
                "opens": opens,
                "closes": closes
            };
        }).filter(h => h.opens !== "00:00"),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "100"
        }
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": siteConfig.doctor.name,
        "jobTitle": siteConfig.doctor.title,
        "worksFor": {
            "@type": "Organization",
            "name": siteConfig.name
        },
        "alumniOf": []
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        </>
    );
}
