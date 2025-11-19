import './ColorSwatch.css';

export function ColorSwatch({ color, hexCode, textColor = 'var(--viva_colors-viva_text)' }) {
  return (
    <div className="color-swatch" style={{ background: color }}>
      <span className="color-swatch__code" style={{ color: textColor }}>{hexCode}</span>
    </div>
  );
}

