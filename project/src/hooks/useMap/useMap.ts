import leaflet from 'leaflet';
import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState, useRef } from 'react';

import { Offer } from '../../types/offers-type';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: Offer) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.coords.lat,
          lng: city.coords.lng
        },
        zoom: city.coords.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;