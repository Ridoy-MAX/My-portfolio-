import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AdvancedGeometricHeroProps {
  scrollY?: number;
  mouseX?: number;
  mouseY?: number;
}

const AdvancedGeometricHero: React.FC<AdvancedGeometricHeroProps> = ({
  scrollY = 0,
  mouseX = 0,
  mouseY = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene with fog for depth
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    scene.fog = new THREE.Fog(0x0a0e27, 10, 30);
    sceneRef.current = scene;

    // Camera with DOF-like perspective
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.z = 4;
    cameraRef.current = camera;

    // Renderer with advanced settings
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0e27, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ===== MAIN GEOMETRY WITH CUSTOM SHADER =====
    const geometry = new THREE.IcosahedronGeometry(1, 6);

    // Custom shader material for morphing effect
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scroll: { value: 0 },
        mouseInfluence: { value: 0 },
      },
      vertexShader: `
        uniform float time;
        uniform float scroll;
        uniform float mouseInfluence;

        varying float vNoise;
        varying vec3 vNormal;

        float noise(vec3 p) {
          return sin(p.x * 2.0 + time) * cos(p.y * 3.0 + time) * sin(p.z * 1.5 + time);
        }

        void main() {
          vec3 pos = position;

          // Morphing displacement based on scroll
          float displacement = noise(pos + time * 0.5) * 0.15 * (0.5 + sin(scroll) * 0.5);
          pos += normalize(pos) * displacement;

          // Mouse influence
          pos += normalize(pos) * sin(time) * mouseInfluence * 0.3;

          vNoise = displacement;
          vNormal = normalize(normalMatrix * normal);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying float vNoise;
        varying vec3 vNormal;

        void main() {
          // Cyan to magenta gradient based on normal and noise
          vec3 color1 = vec3(0.0, 240.0 / 255.0, 1.0); // Cyan
          vec3 color2 = vec3(1.0, 0.0, 1.0); // Magenta

          float mix = 0.5 + 0.5 * sin(vNormal.x + time * 0.3 + vNoise * 3.0);
          vec3 finalColor = mix(color1, color2, mix);

          // Add iridescence
          float fresnel = pow(1.0 - abs(dot(normalize(vec3(0, 0, 1)), vNormal)), 3.0);
          finalColor += fresnel * 0.3;

          gl_FragColor = vec4(finalColor, 0.95);
        }
      `,
      wireframe: false,
      blending: THREE.AdditiveBlending,
    });

    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    meshRef.current = mesh;

    // ===== PARTICLE SYSTEM =====
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 10;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;

      particleVelocities[i] = (Math.random() - 0.5) * 0.05;
      particleVelocities[i + 1] = (Math.random() - 0.5) * 0.05;
      particleVelocities[i + 2] = (Math.random() - 0.5) * 0.05;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'velocity',
      new THREE.BufferAttribute(particleVelocities, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // ===== LIGHTING =====
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xff00ff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 1);
    pointLight1.position.set(-6, -3, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 0.8);
    pointLight2.position.set(6, 3, -4);
    scene.add(pointLight2);

    // ===== ANIMATION LOOP =====
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      timeRef.current += 0.016; // ~60fps

      if (meshRef.current && meshRef.current.material instanceof THREE.ShaderMaterial) {
        const material = meshRef.current.material;
        material.uniforms.time.value = timeRef.current;
        material.uniforms.scroll.value = scrollY * 0.002;
        material.uniforms.mouseInfluence.value = Math.sqrt(mouseX ** 2 + mouseY ** 2) / 1000;

        // Mesh rotation with mouse influence
        meshRef.current.rotation.x += 0.003 + mouseY * 0.0001;
        meshRef.current.rotation.y += 0.005 + mouseX * 0.0001;
        meshRef.current.rotation.z = scrollY * 0.0005;
      }

      // Particle animation
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.getAttribute(
          'position'
        ) as THREE.BufferAttribute;
        const velocities = particlesRef.current.geometry.getAttribute(
          'velocity'
        ) as THREE.BufferAttribute;

        const posArray = positions.array as Float32Array;
        const velArray = velocities.array as Float32Array;

        for (let i = 0; i < posArray.length; i += 3) {
          // Update position with velocity
          posArray[i] += velArray[i];
          posArray[i + 1] += velArray[i + 1];
          posArray[i + 2] += velArray[i + 2];

          // Wrap particles around scene
          if (posArray[i] > 5) posArray[i] = -5;
          if (posArray[i] < -5) posArray[i] = 5;
          if (posArray[i + 1] > 5) posArray[i + 1] = -5;
          if (posArray[i + 1] < -5) posArray[i + 1] = 5;
          if (posArray[i + 2] > 5) posArray[i + 2] = -5;
          if (posArray[i + 2] < -5) posArray[i + 2] = 5;

          // Attract particles to center based on mouse
          const centerX = (mouseX / window.innerWidth - 0.5) * 2;
          const centerY = (mouseY / window.innerHeight - 0.5) * -2;

          const dx = centerX - posArray[i];
          const dy = centerY - posArray[i + 1];

          velArray[i] += dx * 0.00001;
          velArray[i + 1] += dy * 0.00001;

          // Damping
          velArray[i] *= 0.98;
          velArray[i + 1] *= 0.98;
          velArray[i + 2] *= 0.98;
        }

        positions.needsUpdate = true;
        particlesRef.current.rotation.x += 0.0001;
        particlesRef.current.rotation.y += 0.0002;
      }

      // Camera subtle animation
      if (cameraRef.current) {
        cameraRef.current.position.x = Math.sin(timeRef.current * 0.2) * 0.3;
        cameraRef.current.position.y = Math.cos(timeRef.current * 0.15) * 0.3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ===== EVENT LISTENERS =====
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
      shaderMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [scrollY, mouseX, mouseY]);

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

export default AdvancedGeometricHero;
