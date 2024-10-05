import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDPrintingEffect = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Store the current value of the ref in a local variable
        const mount = mountRef.current;

        // Setup scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth * 0.1, window.innerHeight * 0.1); // 10% height and width
        mount.appendChild(renderer.domElement);

        // Create multiple falling objects (rain drops or 3D printing particles)
        const particles = [];
        const particleCount = 200;
        const particleGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Small spheres as particles
        const particleMaterial = new THREE.MeshBasicMaterial({ color: 0x39ff14 }); // Neon green

        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(
                (Math.random() - 0.5) * 5, // Random X
                Math.random() * 5, // Random Y (height)
                (Math.random() - 0.5) * 5 // Random Z
            );
            particles.push(particle);
            scene.add(particle);
        }

        // Camera position
        camera.position.z = 5;

        // Animation loop to simulate particles falling
        const animate = () => {
            requestAnimationFrame(animate);

            particles.forEach(particle => {
                particle.position.y -= 0.02; // Move downwards (falling)
                if (particle.position.y < -2.5) {
                    particle.position.y = 5; // Reset to top when reaching bottom
                }
            });

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            if (mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div ref={mountRef} style={{ width: '100%', height: '100vh', backgroundColor: '#000' }} />
    );
};

export default ThreeDPrintingEffect;
