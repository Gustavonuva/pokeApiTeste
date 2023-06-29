export const converterParaMetros = (altura) => {
  const metros = altura / 10;
  return `${metros.toFixed(1)}M`;
};

export const converterParaLibras = (peso) => {
  const kilos = peso / 10;
  const libras = kilos / 2.20462;
  return `${libras.toFixed(1)} libras`;
};
