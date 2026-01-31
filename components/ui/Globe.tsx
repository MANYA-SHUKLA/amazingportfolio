"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Color } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend, type ThreeElement } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElement<typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

export function Globe({ globeConfig, data }: WorldProps) {
  const [numbersOfRings, setNumbersOfRings] = useState<number[]>([0]);
  type GlobePoint = {
    size: number;
    order: number;
    color: (t: number) => string;
    lat: number;
    lng: number;
  };
  const [globeData, setGlobeData] = useState<
    | GlobePoint[]
    | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  const _buildMaterial = useCallback(() => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  }, [globeConfig.globeColor, globeConfig.emissive, globeConfig.emissiveIntensity, globeConfig.shininess]);

  const _buildData = useCallback(() => {
    const arcs = data;
    const points: GlobePoint[] = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      if (
        typeof arc.startLat !== 'number' || isNaN(arc.startLat) ||
        typeof arc.startLng !== 'number' || isNaN(arc.startLng) ||
        typeof arc.endLat !== 'number' || isNaN(arc.endLat) ||
        typeof arc.endLng !== 'number' || isNaN(arc.endLng)
      ) {
        continue;
      }
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      if (!rgb) continue;
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  }, [data, defaultProps.pointSize]);

  const startAnimation = useCallback(() => {
    if (!globeRef.current || !globeData || !data) return;

    const validArcs = data.filter((d) => {
      const arc = d as Position;
      return (
        arc &&
        typeof arc.startLat === 'number' && !isNaN(arc.startLat) &&
        typeof arc.startLng === 'number' && !isNaN(arc.startLng) &&
        typeof arc.endLat === 'number' && !isNaN(arc.endLat) &&
        typeof arc.endLng === 'number' && !isNaN(arc.endLng)
      );
    });

    if (validArcs.length === 0) return;

    try {
      globeRef.current
        .arcsData(validArcs)
        .arcStartLat((d: object) => (d as Position).startLat)
        .arcStartLng((d: object) => (d as Position).startLng)
        .arcEndLat((d: object) => (d as Position).endLat)
        .arcEndLng((d: object) => (d as Position).endLng)
        .arcColor((e: object) => (e as Position).color)
        .arcAltitude((e: object) => (e as Position).arcAlt || 0)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((e: object) => (e as Position).order || 0)
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime);

      globeRef.current
        .pointsData(globeData)
        .pointColor((e: object) => {
          const point = e as GlobePoint;
          const colorFn = point.color;
          if (typeof colorFn === 'function') {
            const rgba = colorFn(0);
            const match = rgba.match(/rgba\((\d+),\s*(\d+),\s*(\d+),/);
            return match ? `rgb(${match[1]}, ${match[2]}, ${match[3]})` : rgba;
          }
          return (point as unknown as { color: string }).color || "#ffffff";
        })
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);

      globeRef.current
        .ringsData([])
        .ringColor((e: object) => (t: number) => (e as GlobePoint).color(t))
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / (defaultProps.rings || 1)
        );

      globeRef.current.traverse((obj) => {
        obj.frustumCulled = false;
      });
    } catch (err) {
      console.error("Error initializing ThreeGlobe data:", err);
    }
  }, [data, globeData, defaultProps.arcLength, defaultProps.arcTime, defaultProps.maxRings, defaultProps.rings]);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.frustumCulled = false;
      globeRef.current.traverse((obj) => {
        obj.frustumCulled = false;
      });
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current, _buildData, _buildMaterial]);

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => {
          return defaultProps.polygonColor;
        });

      globeRef.current.traverse((obj) => {
        obj.frustumCulled = false;
      });

      startAnimation();
    }
  }, [globeData, defaultProps.showAtmosphere, defaultProps.atmosphereColor, defaultProps.atmosphereAltitude, defaultProps.polygonColor, startAnimation]);

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      const newNumbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      );
      setNumbersOfRings(newNumbersOfRings);

      globeRef.current.ringsData(
        globeData.filter((d, i) => newNumbersOfRings.includes(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} frustumCulled={false} />
    </>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    if (!size || isNaN(size.width) || isNaN(size.height) || size.width === 0 || size.height === 0) {
      return;
    }
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;

  return (
    <Canvas camera={{ position: [0, 0, cameraZ], fov: 50, near: 180, far: 1800 }}>
      <WebGLRendererConfig />
      <fog attach="fog" args={["#ffffff", 400, 2000]} />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={[-400, 100, 400]}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={[-200, 500, 200]}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={[-200, 500, 200]}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
