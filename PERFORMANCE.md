# Performance Optimizations

## Build Settings

### Code Splitting
- **React**: Separate chunk for vendor dependency
- **GSAP**: Separate chunk for animations library
- **Main**: Application code

### Minification
- Terser minification enabled
- Console logs removed in production
- Tree-shaking enabled

### Asset Optimization
- CSS minification via Tailwind
- JS minification via Terser
- Hashed file names for cache busting

## Runtime Optimizations

### CSS
- Tailwind CSS with PurgeCSS (only used styles included)
- Minimal custom CSS
- Efficient utility-first approach

### JavaScript
- React 19 with automatic batching
- GSAP with ScrollTrigger (lazy loaded when needed)
- Minimal external dependencies

### Images
- Lazy loading ready (use loading="lazy" on images)
- Responsive image sizes
- JPEG/WebP support recommended

## Recommendations for Further Optimization

### Image Handling
```jsx
<img 
  src="image.jpg" 
  alt="descriptive text"
  loading="lazy"
  width="800"
  height="600"
/>
```

### Bundle Size Targets
- Initial JS: <100KB (gzipped)
- Total CSS: <20KB (gzipped)
- Lighthouse Score Goal: 90+

### Lighthouse Metrics
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.5s

## Local Development

```bash
npm run dev          # Start dev server (unminified, fast)
npm run build        # Build for production (optimized)
npm run preview      # Preview production build locally
```

## Deployment Recommendations

1. **Compression**: Enable gzip on server
2. **Caching**: Set appropriate cache headers
3. **CDN**: Serve static assets from CDN
4. **HTTP/2**: Enable server push for critical resources
5. **Preconnect**: Add to Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
```
