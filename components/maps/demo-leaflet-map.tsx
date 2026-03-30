"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

type City = "Mumbai" | "Pune" | "Delhi" | "Bangalore" | "All";

type LatLng = [number, number];

type CityConfig = {
  name: Exclude<City, "All">;
  center: LatLng;
  zoom: number;
};

const CITY_CONFIGS: CityConfig[] = [
  { name: "Mumbai", center: [19.076, 72.8777], zoom: 11 },
  { name: "Pune", center: [18.5204, 73.8567], zoom: 11 },
  { name: "Delhi", center: [28.6139, 77.209], zoom: 11 },
  { name: "Bangalore", center: [12.9716, 77.5946], zoom: 11 },
];

function pinIcon(active: boolean) {
  const size = active ? 18 : 14;
  const glow = active
    ? "box-shadow: 0 0 0 6px rgba(99,102,241,0.20), 0 0 24px rgba(168,85,247,0.28);"
    : "box-shadow: 0 0 0 4px rgba(148,163,184,0.12);";

  return L.divIcon({
    className: "",
    html: `<div style="width:${size}px;height:${size}px;border-radius:9999px;background:${
      active ? "#6366f1" : "#94a3b8"
    };border:2px solid rgba(15,23,42,0.9);${glow}"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function Recenter({ center, zoom }: { center: LatLng; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [map, center, zoom]);
  return null;
}

export function DemoLeafletMap({ city }: { city: City }) {
  const selected = useMemo(() => {
    if (city === "All") {
      return {
        center: [22.9734, 78.6569] as LatLng,
        zoom: 4,
      };
    }

    const cfg = CITY_CONFIGS.find((c) => c.name === city);
    return {
      center: (cfg?.center ?? [22.9734, 78.6569]) as LatLng,
      zoom: cfg?.zoom ?? 4,
    };
  }, [city]);

  return (
    <MapContainer
      center={selected.center}
      zoom={selected.zoom}
      scrollWheelZoom={false}
      className="h-full w-full"
      attributionControl={false}
    >
      <Recenter center={selected.center} zoom={selected.zoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {CITY_CONFIGS.map((c) => (
        <Marker
          key={c.name}
          position={c.center}
          icon={pinIcon(city !== "All" && city === c.name)}
        />
      ))}
    </MapContainer>
  );
}
