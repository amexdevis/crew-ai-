<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Book Writer</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
    <div class="container">
        <canvas id="bg"></canvas>
        <div class="content">
            <h1>AI-Powered Book Writing</h1>
            <p>Enter details to generate your book:</p>
            
            <form id="bookForm">
                <label for="title">Book Title:</label>
                <input type="text" id="title" name="title" required>

                <label for="genre">Genre:</label>
                <select id="genre" name="genre">
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="mystery">Mystery</option>
                    <option value="non-fiction">Non-Fiction</option>
                </select>

                <label for="theme">Theme:</label>
                <input type="text" id="theme" name="theme" required>

                <button type="button" onclick="startProcess()">Start Writing</button>
            </form>

            <div class="progress-container">
                <p>Progress:</p>
                <div class="progress-bar" id="progressBar"></div>
                <p id="currentAgent">Waiting to start...</p>
            </div>
            
            <p id="status"></p>
            <button id="download" style="display: none;" onclick="downloadBook()">Download Book</button>
        </div>
    </div>

    <script src="script.js"></script>
    <script>
        // 3D Background Animation using Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg')});
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshStandardMaterial({color: 0x44aa88, metalness: 1, roughness: 0.5});
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        camera.position.z = 30;
        
        function animate() {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            renderer.render(scene, camera);
        }
        animate();
    </script>
</body>
</html>
