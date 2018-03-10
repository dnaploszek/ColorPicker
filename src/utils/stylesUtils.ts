const contrastColor = (hex: string) => {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF';
};

const getStyle = (field: string, value: string, contrast?: boolean) => ({
  [field]: contrast ? contrastColor(value) : `#${value}`,
});

export const getBackgroundColorStyle = (hex: string, contrast?: boolean) => getStyle('backgroundColor', hex, contrast);

export const getColorStyle = (hex: string, contrast?: boolean) => getStyle('color', hex, contrast);
