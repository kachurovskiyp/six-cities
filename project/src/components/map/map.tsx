import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import L, { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offers-type';
import { MapProps } from '../../types/props-type';
import { useAppSelector } from '../../hooks';
import { getActiveOffer } from '../../store/data-process/data-selectors';

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

function Map({offers, city}: MapProps): JSX.Element {
  const activeOffer: Offer = useAppSelector(getActiveOffer);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const layerGroup = L.layerGroup([]);
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? CurrentCustomIcon
              : DefaultCustomIcon
          );
        layerGroup.addLayer(marker);
      });
      layerGroup.addTo(map);
    }
  }, [map, offers, activeOffer]);

  return <div style={{ height: '100%' }} ref={mapRef} />;
}

export default Map;
