<template>
  <div><canvas></canvas></div>
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    return {
      camera: {},
      light: {},
      renderer: {},
      scene: {},
      path: {},
      points: [],
      percentage: 0
    }
  },
  created() {
    window.addEventListener('resize', this.onWindowResize, false)
  },
  mounted() {
    this.init()
    requestAnimationFrame(this.render)
  },
  methods: {
    init() {
      const canvas = document.querySelector('canvas')

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Create a WebGL renderer 创建WebGL渲染器
      this.renderer = new THREE.WebGLRenderer({
        canvas
      })

      this.renderer.setSize(canvas.width, canvas.height)

      // Create an empty scene
      this.scene = new THREE.Scene()

      // Create a perpsective camera
      this.camera = new THREE.PerspectiveCamera(
        65,
        canvas.width / canvas.height,
        0.001,
        1000
      )
      this.camera.position.z = 400

      const ambient = new THREE.AmbientLight(0xffffff, 0.75)
      this.scene.add(ambient)

      // Array of points
      this.points = [
        [68.5, 185.5],
        [1, 262.5],
        [270.9, 281.9],
        [345.5, 212.8],
        [178, 155.7],
        [240.3, 72.3],
        [153.4, 0.6],
        [52.6, 53.3],
        [68.5, 185.5]
      ]

      // Convert the array of points into vertices
      for (let i = 0; i < this.points.length; i++) {
        const x = this.points[i][0]
        const y = 0
        const z = this.points[i][1]

        this.points[i] = new THREE.Vector3(x, y, z)
      }

      // Create a path from the points
      this.path = new THREE.CatmullRomCurve3(this.points)

      // Create the tube geometry from the path
      const geometry = new THREE.TubeGeometry(this.path, 600, 4, 32, true)

      // Set a different color on each face
      for (let i = 0, j = geometry.faces.length; i < j; i++) {
        geometry.faces[i].color = new THREE.Color(
          'hsl(' + Math.floor(Math.random() * 20 + 200) + ', 60%, 60%)'
        )
      }

      // Basic material
      const material = new THREE.MeshLambertMaterial({
        side: THREE.BackSide,
        vertexColors: THREE.FaceColors // We need to tell ThreeJs that the colors are coming from the faces
      })

      // Create a mesh
      const tube = new THREE.Mesh(geometry, material)

      // Add tube into the scene
      this.scene.add(tube)

      // Create a point light in our scene
      this.light = new THREE.PointLight('#ffffff', 1, 100)

      this.scene.add(this.light)
    },
    render() {
      this.percentage += parseFloat(Math.random().toFixed(1)) * 0.001 + 0.0002 // Speed

      const p1 = this.path.getPointAt(this.percentage % 1)
      const p2 = this.path.getPointAt((this.percentage + 0.03) % 1)

      this.camera.position.set(p1.x, p1.y, p1.z)

      this.light.position.set(p2.x, p2.y, p2.z)

      this.camera.lookAt(p2)

      // Render the scene
      this.renderer.render(this.scene, this.camera)

      requestAnimationFrame(this.render)
    },

    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
</script>

<style>
</style>
