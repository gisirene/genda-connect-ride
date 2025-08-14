import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxIntegrationProps {
  mapboxToken?: string;
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export const MapboxIntegration: React.FC<MapboxIntegrationProps> = ({
  mapboxToken,
  center = [30.0588, -1.9414], // Rwanda coordinates
  zoom = 10,
  className = "w-full h-96"
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Dynamic import to avoid SSR issues
    const initializeMap = async () => {
      try {
        const mapboxgl = await import('mapbox-gl');
        
        mapboxgl.default.accessToken = mapboxToken;
        
        map.current = new mapboxgl.default.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: center,
          zoom: zoom,
        });

        // Add navigation controls
        map.current.addControl(
          new mapboxgl.default.NavigationControl(),
          'top-right'
        );

        // Add sample bus markers
        const busLocations = [
          { lng: 30.0588, lat: -1.9414, id: 'bus-101', name: 'Bus 101' },
          { lng: 30.0688, lat: -1.9514, id: 'bus-205', name: 'Bus 205' },
          { lng: 30.0488, lat: -1.9314, id: 'bus-312', name: 'Bus 312' },
        ];

        busLocations.forEach((bus) => {
          // Create bus marker
          const el = document.createElement('div');
          el.className = 'bus-marker';
          el.style.width = '20px';
          el.style.height = '20px';
          el.style.backgroundColor = '#0f2a50';
          el.style.borderRadius = '50%';
          el.style.border = '3px solid white';
          el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

          new mapboxgl.default.Marker(el)
            .setLngLat([bus.lng, bus.lat])
            .setPopup(
              new mapboxgl.default.Popup({ offset: 25 })
                .setHTML(`<h3>${bus.name}</h3><p>Live tracking active</p>`)
            )
            .addTo(map.current);
        });

      } catch (error) {
        console.error('Error initializing Mapbox:', error);
      }
    };

    initializeMap();

    return () => map.current?.remove();
  }, [mapboxToken, center, zoom]);

  if (!mapboxToken) {
    return (
      <div className={`${className} bg-gradient-to-br from-accent/20 to-success/20 rounded-lg flex items-center justify-center`}>
        <div className="text-center p-8">
          <h3 className="text-xl font-semibold text-primary mb-2">Map Integration</h3>
          <p className="text-muted-foreground mb-4">
            Please add your Mapbox token to enable live tracking
          </p>
          <a 
            href="https://mapbox.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Get Mapbox Token →
          </a>
        </div>
      </div>
    );
  }

  return <div ref={mapContainer} className={`${className} rounded-lg`} />;
};