import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GeometricHeroProps {
  scrollY?: number;
}

const GeometricHero: React.FC<GeometricHeroProps> = ({ scrollY = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0a0e27, 1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Geometry - Complex toroid knot that evolves
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16);

    // Material with cyan and magenta
    const material = new THREE.MeshPhongMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.2,
      wireframe: false,
      shininess: 100,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    scene.add(mesh);
    meshRef.current = mesh;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xff00ff, 0.6);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Second light for cyan accent
    const pointLight = new THREE.PointLight(0x00f0ff, 0.8);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (meshRef.current) {
        // Base rotation
        meshRef.current.rotation.x += 0.003;
        meshRef.current.rotation.y += 0.005;

        // Scroll influence
        const scrollInfluence = scrollY * 0.001;
        meshRef.current.rotation.z = scrollInfluence;

        // Pulsing scale based on scroll
        const scale = 1 + Math.sin(Date.now() * 0.001 + scrollY * 0.01) * 0.1;
        meshRef.current.scale.set(scale, scale, scale);
      }

      // Camera subtle movement
      if (cameraRef.current) {
        cameraRef.current.position.x = Math.sin(Date.now() * 0.0003) * 0.5;
        cameraRef.current.position.y = Math.cos(Date.now() * 0.0004) * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [scrollY]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default GeometricHero;
