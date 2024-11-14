// __tests__/parking.test.js

const blocks = {
    A: { total: 100, available: 60 },
    B: { total: 50, available: 30 },
    C: { total: 70, available: 50 },
    // Agrega más bloques si es necesario
  };
  
  test('Debe registrar una entrada si hay espacios disponibles', () => {
    const block = 'A';
    expect(blocks[block].available).toBeGreaterThan(0);
    blocks[block].available--;
    expect(blocks[block].available).toBe(59); // Comprueba si se resta correctamente
  });
  