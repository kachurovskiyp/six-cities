import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { Icon, Marker } from 'leaflet';

import { MapProps } from '../../types/map-props-type';

const CurrentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const DefaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({ city, offers, activeOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.coords.lat,
          lng: offer.coords.lng
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? CurrentCustomIcon
              : DefaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return <div ref={mapRef} />;
}

export default Map;
