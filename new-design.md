# 🎬 Cinematic 3D Scroll-Based Portfolio Website Prompt

## 📋 Executive Vision

Create an **immersive, cinematic 3D portfolio experience** where scrolling triggers dynamic camera movements, parallax depth effects, and lighting transformations. Each section unfolds like a film scene—smooth transitions, dramatic lighting, realistic shadows, and layered visual depth make the user feel like they're navigating through a 3D space, not a flat webpage.

---

## 🎨 Visual & Cinematic Aesthetic

### Overall Feeling

- **Cinematic + Modern**: High-production film opening credits vibes
- **Depth & Layering**: Multiple planes receding into distance (z-axis movement)
- **Luxury & Premium**: Glossy surfaces, soft dramatic lighting, subtle motion
- **Immersive**: User agency through scroll-triggered camera transformations
- **Smooth & Polished**: Every transition feels intentional and refined

### Color Palette

- **Primary**: Deep charcoal / near-black backgrounds (#0a0a0a to #1a1a1a)
- **Accents**: Neon/gold highlights (#d4af37, #00ffff, #ff006e) used sparingly
- **Lighting**: Warm (3000K) key light + cool (6000K) fill light for dramatic contrast
- **Fog Effect**: Subtle atmospheric fog (white/light gray) between depth layers

### Typography

- Large, bold hero text (120-200px) with subtle 3D text-shadow effect
- Secondary text in minimal, clean sans-serif (Helvetica, Inter, or Graphik)
- Text should cast shadows and respond to light direction

---

## 🎥 Camera & Scroll Movement Strategy

### Camera Behavior by Scroll Position

**Section 1: Hero/Entry (0-25% scroll)**

- Camera starts at Z: -50, looking at origin
- On scroll: Move camera backward (Z: -100) while slightly tilting down
- Scale effect: Hero content appears to grow/approach user
- Parallax depth: Background moves slower than foreground elements

**Section 2: Portfolio Pieces (25-50% scroll)**

- Camera orbits around Y-axis (-15° to +15°) as user scrolls
- Dolly forward: Z: -100 → Z: -40 (smooth approach)
- Tilt: Slight pitch rotation (15° down) to showcase layered content
- Lighting shifts: Accent light intensifies on portfolio cards

**Section 3: Featured Work (50-75% scroll)**

- Camera position fixed but rotates around content (gimbal effect)
- Focus distance changes with ease-out easing (psychological depth cueing)
- Scale modulation: Featured images scale 0.8 → 1.2 → 0.9 as user scrolls through

**Section 4: Contact/Closing (75-100% scroll)**

- Camera pulls back dramatically (Z: -200) and tilts up
- Final rotation: 360° slow spin around scene
- Lighting fades to minimal, accent lights dominate
- Text appears to float in space with motion blur

---

## 🎭 Depth & Parallax Architecture

### Layering System (Front to Back)

1. **Layer 1 (Z: 0 to 20)**: Text, buttons, interactive CTAs — moves fastest with scroll
2. **Layer 2 (Z: -20 to -40)**: Primary content cards, images — moderate parallax
3. **Layer 3 (Z: -40 to -60)**: Supporting visuals, decorative elements — slower movement
4. **Layer 4 (Z: -60 to -100)**: Background shapes, atmospheric elements — slowest
5. **Layer 5 (Z: -100 to -150)**: Backdrop, blur-heavy atmospheric fog

### Parallax Factor Calculation

```
scrollParallax = scrollProgress × maxDepth × depthMultiplier
// Layer 1: multiplier = 1.2 (fastest)
// Layer 2: multiplier = 0.8
// Layer 3: multiplier = 0.5
// Layer 4: multiplier = 0.2 (slowest)
```

### Visual Parallax Effects

- Foreground elements shift more horizontally (2-5px per scroll increment)
- Background elements shift less (0.5-1px per scroll increment)
- Vertical parallax: Sky/clouds move slower than ground elements
- Z-axis parallax: Objects scale down as they recede

---

## 💡 Lighting & Shadows Strategy

### Three-Point Lighting Setup

**Key Light (Main)**

- Position: (-30, 40, 30) — upper left diagonal
- Intensity: 1.2
- Color: Warm white (#fff5e6)
- Shadow casting: Yes, cast realistic drop shadows

**Fill Light (Secondary)**

- Position: (40, 20, 20) — upper right
- Intensity: 0.6
- Color: Cool blue (#d0e8ff)
- Reduces hard shadows, adds dimensional modeling

**Rim/Accent Light**

- Position: (0, -20, -60) — behind camera, hitting back edges
- Intensity: 0.8
- Color: Neon accent (#00ffff or #ff006e)
- Creates separation between subject and background
- Intensifies during key scroll positions (reveal moments)

### Shadow Specifications

- **Type**: Real-time projected shadows from Three.js lights
- **Quality**: Medium resolution (2048×2048) for balance
- **Softness**: Apply shadowMapSoftness or PCFShadowMap for smooth edges
- **Opacity**: 0.4-0.6 (visible but not oppressive)
- **Blur**: Gaussian blur post-processing for soft, cinematic look

### Lighting Transitions

- As user scrolls, key light intensity increases (1.0 → 1.4 → 1.0)
- Accent light color shifts: cool → warm → neon (creates mood changes)
- Fog color changes with light shifts (stays visible in all light conditions)

---

## 🔧 Technical Implementation Roadmap

### Tech Stack

- **Three.js**: 3D rendering engine, geometry, materials, lighting
- **GSAP 3+**: Timeline animations, easing functions
- **ScrollTrigger**: Scroll-driven animations, performance optimization
- **PostProcessing (optional)**: Bloom, motion blur, ambient occlusion

### Step 1: Scene Setup

```
✓ Create Three.js scene, camera, renderer
✓ Set camera FOV: 50-60° (cinematic feel)
✓ Configure WebGLRenderer: antialias: true, alpha: true
✓ Add OrbitControls or manual camera control
```

### Step 2: Geometry & Layers

```
✓ Create PlaneGeometry meshes for each depth layer
✓ Apply materials: MeshStandardMaterial (responsive to light)
✓ Position layers along Z-axis with spacing (20 units each)
✓ Add texture maps (normal maps for surface detail)
✓ Enable shadow mapping: mesh.castShadow = true
```

### Step 3: Lighting System

```
✓ Add DirectionalLight (key light at -30, 40, 30)
✓ Configure shadow properties: mapSize, bias, radius
✓ Add PointLight (fill light at 40, 20, 20)
✓ Add PointLight (accent/rim at 0, -20, -60)
✓ Tune fog: new Fog(0x1a1a1a, 10, 250)
```

### Step 4: ScrollTrigger Integration

```
✓ Create ScrollTrigger for each section (25% increments)
✓ Bind scroll progress to camera position (lerp for smoothness)
✓ Create GSAP timeline per section
✓ Map scroll → camera.position.z, camera.rotation.y, etc.
✓ Use ease functions: "power2.inOut", "back.inOut", "elastic.out"
```

### Step 5: Parallax Implementation

```
✓ For each layer, create onUpdate callback in ScrollTrigger
✓ Apply formula: layer.position.z = baseZ - (scroll × multiplier)
✓ Stagger layer animations (add delay between each)
✓ Add horizontal/vertical shift for 2D parallax
✓ Test parallax smoothness with requestAnimationFrame
```

### Step 6: Transitions & Easing

```
✓ Camera move: ease: "power2.inOut" (smooth, not instant)
✓ Scale transitions: ease: "back.out" (satisfying overshoot)
✓ Rotation easing: ease: "sine.inOut" (gentle spin)
✓ Opacity fades: ease: "linear" (predictable reveals)
✓ All transitions: 0.8-1.2s duration (felt responsiveness)
```

### Step 7: Polish & Refinement

```
✓ Add motion blur post-processing effect
✓ Implement bloom for accent lights
✓ Add subtle camera shake on scroll (0.02-0.05 intensity)
✓ Optimize: Use LOD for distant geometry
✓ Performance: Target 60 FPS (test on mid-range hardware)
```

---

## 🎬 Section Breakdown: Technical Specifications

### SECTION 1: HERO (0-25% scroll)

**Visual Goal**: Establish depth, draw user into scene

- **Camera Start**: { x: 0, y: 0, z: -50 }, lookAt: (0, 0, 20)
- **Camera End**: { x: 0, y: -5, z: -100 }, lookAt: (0, 5, 20)
- **Animation**: Camera dolly out + slight tilt down
- **Content Scale**: 0.8 → 1.0 (grow as camera approaches)
- **Lighting**: Key light softens, fog increases opacity (mystery)
- **Key Elements**:
  - Large hero text with 3D depth text-shadow
  - Subtle rotating 3D shapes in background
  - Animated accent light moving across shapes
- **Easing**: `power1.inOut` (gradual, cinematic)

### SECTION 2: PORTFOLIO PIECES (25-50% scroll)

**Visual Goal**: Showcase work with dynamic camera orbits

- **Camera Path**: Orbit Y-axis: -15° → 0° → +15° (gimbal rotation)
- **Dolly Path**: Z: -100 → -40 (approach work)
- **Content Interaction**: Cards scale on hover, cast dynamic shadows
- **Parallax Layers**: 4 distinct depth layers with different speeds
- **Lighting Shift**: Accent light color: cool blue → warm gold
- **Key Elements**:
  - Portfolio cards with image, title, description
  - Each card in separate depth layer
  - Shadows elongate/shorten based on light angle
- **Easing**: `power2.inOut` (snappy, responsive)

### SECTION 3: FEATURED WORK (50-75% scroll)

**Visual Goal**: Hero moment, dramatic lighting on featured piece

- **Camera Behavior**: Gimbal rotation around fixed point, focus breathing
- **Featured Image**: Scale 0.8 → 1.2 with overshoot easing
- **Surrounding Elements**: Blur and fade out (depth of field effect)
- **Lighting Drama**: Key light intensifies (1.0 → 1.6), accent light pulses
- **Secondary Content**: Orbit around featured piece at slower speed
- **Key Elements**:
  - Large centered image/project showcase
  - Supporting text/stats in secondary layers
  - Animated frame/border with glow effect
- **Easing**: `back.out` (satisfying snappy feel with overshoot)

### SECTION 4: CONTACT/CLOSING (75-100% scroll)

**Visual Goal**: Final reveal, call to action, sense of completion

- **Camera Path**: Pull back (Z: -200), rotate 360°, tilt up
- **Content Float**: Text appears to levitate, slight bob animation
- **Lighting Finale**: All lights fade, only accent light remains (dramatic)
- **Motion Blur**: Applied to background, text stays sharp (depth)
- **Scene Spin**: Slow clockwise rotation of camera around scene
- **Key Elements**:
  - Contact form / CTA button with hover states
  - Social icons with glow effects
  - Spinning 3D logo or brand mark
- **Easing**: `sine.inOut` (smooth, meditative close)

---

## 🎛️ Interactive Controls & States

### Hover States (Desktop)

```
// Portfolio Cards
opacity: 1.0 (was 0.7)
scale: 1.1 (push-in perspective)
lighting: Accent light intensifies (+0.3 intensity)
shadow: Cast shadow deepens (opacity: 0.6)

// CTA Buttons
glow: bloom effect activates
scale: 1.05 + slight rotation (3°)
color shift: gradient animation (1.5s loop)

// Text Elements
text-shadow: 3D depth increases
letter-spacing: expands slightly (psychological distance)
```

### Mobile Optimization

- Reduce parallax multipliers (0.5x) to prevent motion sickness
- Disable orbital camera movement (rotate only on Y-axis)
- Simplify lighting (remove accent light if GPU < mid-range)
- Increase ease durations (1.5s → 2.0s) for slower scroll
- Reduce geometry complexity (lower polygon count)

---

## ⚙️ Performance Targets & Optimization

### FPS & Load Time Goals

- **Target FPS**: 60 on desktop, 30-40 on mobile
- **First Contentful Paint**: < 2.5s
- **Time to Interactive**: < 4s
- **Total Bundle Size**: < 800KB (including Three.js + GSAP)

### Optimization Techniques

1. **Geometry**: Use LOD (Level of Detail) for distant objects
2. **Textures**: Compress images (WebP format), use appropriate resolution
3. **Shaders**: Pre-compile shader programs, avoid complex calculations
4. **GPU Memory**: Use texture atlasing, reuse materials
5. **CPU Offload**: Let GPU handle parallax calculations (vertex shaders)
6. **Caching**: GSAP timelines pre-calculated before scroll event fires
7. **Lazy Loading**: Load assets as sections come into viewport

---

## 🎯 Key Animation Easing Functions

| Animation          | Easing               | Duration | Purpose                    |
| ------------------ | -------------------- | -------- | -------------------------- |
| Camera dolly       | power2.inOut         | 1.0s     | Smooth approach, cinematic |
| Camera rotation    | sine.inOut           | 1.2s     | Gentle, meditative turn    |
| Scale (grow)       | back.out             | 0.8s     | Satisfying overshoot pop   |
| Opacity fade       | linear               | 1.0s     | Predictable reveal         |
| Text reveal        | power1.out           | 0.6s     | Quick, snappy read         |
| Light intensity    | sine.inOut           | 1.5s     | Smooth mood transition     |
| Parallax shift     | none (scroll-driven) | instant  | Responsive to input        |
| Accent light pulse | elastic.out          | 0.5s     | Energetic highlight        |

---

## 🎪 Advanced Effects (Optional Polish)

### Motion Blur

- Apply to background layers only (keep text sharp)
- Intensity: 0.3-0.5 during fast scroll
- Direction: Follow scroll direction (up/down)

### Bloom / Glow

- Apply to accent lights and neon text
- Threshold: 0.8 (only brightest elements)
- Strength: 1.2-1.5
- Radius: 0.4 (soft, dreamy glow)

### Ambient Occlusion

- Add depth to texture surfaces
- Radius: 0.2-0.4 units
- Bias: 0.001-0.005 (prevent artifacts)

### Depth of Field

- Focus distance: Center of hero content
- Aperture: f/2.8 (shallow depth, background blur)
- Focal length: Adjust per section (depth shifts)

### Particle System (Optional)

- Floating dust particles in fog
- React to light direction
- Slow, organic movement (speed: 0.1-0.3 units/s)

---

## 📱 Responsive & Accessibility

### Breakpoints

- **Desktop** (1920px+): Full effects, 4K textures
- **Tablet** (768-1920px): Moderate effects, reduced parallax
- **Mobile** (< 768px): Simplified version, static backgrounds optional

### Accessibility Considerations

- **Prefers Reduced Motion**: Disable parallax, simplify animations
- **High Contrast Mode**: Increase shadow opacity, boost accent light
- **Keyboard Navigation**: Tab through interactive elements
- **Screen Readers**: Provide alt text for all image content

---

## 🚀 Development Workflow

**Phase 1: Foundation (Days 1-2)**

- Set up Three.js scene with basic geometry
- Configure lighting and shadows
- Create basic parallax layers

**Phase 2: Animation (Days 3-4)**

- Integrate GSAP + ScrollTrigger
- Wire up camera movement to scroll
- Test parallax smoothness and easing

**Phase 3: Content Integration (Days 5-6)**

- Replace placeholder content with portfolio pieces
- Optimize textures and geometry
- Add hover states and interactivity

**Phase 4: Polish & Performance (Days 7-8)**

- Add post-processing effects (bloom, motion blur)
- Optimize for mobile and low-end devices
- Fine-tune all easing curves and timings
- Test cross-browser compatibility

**Phase 5: Launch (Day 9)**

- Final QA testing
- Performance profiling (Lighthouse, DevTools)
- Deploy and monitor

---

## 📊 Testing Checklist

- [ ] Camera movement feels smooth and cinematic
- [ ] Parallax depth is noticeable but not dizzying
- [ ] Shadows cast realistically and change with light direction
- [ ] Text remains readable during all animations
- [ ] Mobile experience doesn't trigger motion sickness
- [ ] 60 FPS sustained on target devices
- [ ] No memory leaks (test with DevTools over 5-10 min)
- [ ] All hover states respond instantly (< 50ms)
- [ ] Keyboard navigation works fully
- [ ] Alt text present on all visual content

---

## 💭 Final Thoughts

This prompt is your **creative + technical north star**. As you build:

- **Stay true to the cinematic vision** — every animation should feel like a film scene
- **Prioritize smoothness** — stuttering breaks immersion instantly
- **Layer thoughtfully** — complexity should serve the story, not distract from it
- **Test continuously** — camera/parallax feel changes with small tweaks
- **Respect performance** — a 30 FPS experience on most devices beats a 60 FPS that only works on flagship hardware

**The goal**: User scrolls and feels like they're flying through your digital space. Every interaction confirms they're in a living, breathing 3D world.

Now build something magical. 🎬✨
