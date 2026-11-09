/**
 * Lighting for the embossed look (Nov 2026).
 * One light source, top left, shared by every raised headline on the site.
 * Used by src/styles/emboss.css through filter: url(#sia-raise) and friends.
 * Renders nothing visible.
 */
export function EmbossDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        {/* Raised letters on black card */}
        <filter id="sia-raise" x="-8%" y="-30%" width="116%" height="160%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" result="bump" />
          <feDiffuseLighting in="bump" surfaceScale="3" diffuseConstant="1.556" lightingColor="#fff" result="diff">
            <feDistantLight azimuth="225" elevation="40" />
          </feDiffuseLighting>
          <feComposite in="diff" in2="SourceAlpha" operator="in" result="diffIn" />
          <feBlend in="SourceGraphic" in2="diffIn" mode="multiply" result="shaded" />
          <feSpecularLighting in="bump" surfaceScale="3" specularConstant=".5" specularExponent="24" lightingColor="#fff" result="spec">
            <feDistantLight azimuth="225" elevation="40" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
          <feComposite in="specIn" in2="shaded" operator="arithmetic" k1="0" k2=".28" k3="1" k4="0" result="lit" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="sb" />
          <feOffset in="sb" dx="1.6" dy="2" result="so" />
          <feFlood floodColor="#000" floodOpacity=".6" />
          <feComposite in2="so" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="lit" />
          </feMerge>
        </filter>
        {/* Letters cast in plaster on the first screen: crisp bevel, window light from the top left */}
        <filter id="sia-stone" x="-8%" y="-30%" width="116%" height="160%" colorInterpolationFilters="sRGB">
          {/* rounded cast edge, like letters pressed out of wet plaster */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.3" result="bump" />
          <feDiffuseLighting in="bump" surfaceScale="2.4" diffuseConstant="1.556" lightingColor="#fff" result="diff">
            <feDistantLight azimuth="225" elevation="40" />
          </feDiffuseLighting>
          <feComposite in="diff" in2="SourceAlpha" operator="in" result="diffIn" />
          <feBlend in="SourceGraphic" in2="diffIn" mode="multiply" result="shaded" />
          {/* a soft, matte sheen on the lit edges, not a glossy outline */}
          <feSpecularLighting in="bump" surfaceScale="2.4" specularConstant=".6" specularExponent="14" lightingColor="#f3e9dc" result="spec">
            <feDistantLight azimuth="225" elevation="40" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
          <feComposite in="specIn" in2="shaded" operator="arithmetic" k1="0" k2=".38" k3="1" k4="0" result="lit" />
          {/* contact shadow hugging the letters, plus a short cast shadow away from the light */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="ao" />
          <feFlood floodColor="#000" floodOpacity=".35" />
          <feComposite in2="ao" operator="in" result="aoShadow" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" result="sb" />
          <feOffset in="sb" dx="1.2" dy="1.5" result="so" />
          <feFlood floodColor="#000" floodOpacity=".7" />
          <feComposite in2="so" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="aoShadow" />
            <feMergeNode in="shadow" />
            <feMergeNode in="lit" />
          </feMerge>
        </filter>
        {/* Raised letters on the cream paper sections */}
        <filter id="sia-raise-paper" x="-8%" y="-30%" width="116%" height="160%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="bump" />
          <feDiffuseLighting in="bump" surfaceScale="1.7" diffuseConstant="1.556" lightingColor="#fff" result="diff">
            <feDistantLight azimuth="225" elevation="40" />
          </feDiffuseLighting>
          <feComposite in="diff" in2="SourceAlpha" operator="in" result="diffIn" />
          <feBlend in="SourceGraphic" in2="diffIn" mode="multiply" result="lit" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.4" result="sb" />
          <feOffset in="sb" dx="1.2" dy="1.6" result="so" />
          <feFlood floodColor="#4f4235" floodOpacity=".16" />
          <feComposite in2="so" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="lit" />
          </feMerge>
        </filter>
        {/* Small type (the header wordmark): a finer bevel so it stays crisp */}
        <filter id="sia-raise-fine" x="-5%" y="-30%" width="110%" height="160%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation=".7" result="bump" />
          <feDiffuseLighting in="bump" surfaceScale="1.6" diffuseConstant="1.556" lightingColor="#fff" result="diff">
            <feDistantLight azimuth="225" elevation="40" />
          </feDiffuseLighting>
          <feComposite in="diff" in2="SourceAlpha" operator="in" result="diffIn" />
          <feBlend in="SourceGraphic" in2="diffIn" mode="multiply" result="lit" />
          <feOffset in="SourceAlpha" dx=".8" dy="1" result="so" />
          <feFlood floodColor="#000" floodOpacity=".7" />
          <feComposite in2="so" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="lit" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
