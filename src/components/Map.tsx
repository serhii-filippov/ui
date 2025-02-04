import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox token

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-82.452606, 27.964157],
        zoom: 10,
      });

      // Add a marker
      new mapboxgl.Marker()
        .setLngLat([-82.452606, 27.964157])
        .addTo(map);

      // Add zoom controls
      map.addControl(new mapboxgl.NavigationControl());

      // Add custom controls (zoom and center)
      const zoomControl = document.createElement('div');
      zoomControl.innerHTML = `
        <button style="margin: 5px; padding: 5px 10px; font-size: 16px;">+</button>
        <button style="margin: 5px; padding: 5px 10px; font-size: 16px;">-</button>
      `;
      zoomControl.style.margin = '10px';
      map.addControl({ onAdd: () => zoomControl, onRemove: () => {} }, 'top-left');

      const centerControl = document.createElement('div');
      centerControl.innerHTML = `
        <button style="margin: 5px; padding: 5px 10px; font-size: 16px;">📍</button>
      `;
      centerControl.style.margin = '10px';
      map.addControl({ onAdd: () => centerControl, onRemove: () => {} }, 'top-right');

      // Add event listeners for custom controls
      zoomControl.querySelector('button:nth-child(1)')?.addEventListener('click', () => {
        map.zoomIn();
      });

      zoomControl.querySelector('button:nth-child(2)')?.addEventListener('click', () => {
        map.zoomOut();
      });

      centerControl.querySelector('button')?.addEventListener('click', () => {
        map.setCenter([-82.452606, 27.964157]);
      });

      return () => map.remove();
    }
  }, []);

  return <div ref={mapContainer} className="map-container" />;
};

export default Map;