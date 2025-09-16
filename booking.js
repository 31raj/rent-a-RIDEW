// Filter vehicle options based on vehicle type selection

document.addEventListener('DOMContentLoaded', function() {
  const typeSelect = document.getElementById('vehicle-type');
  const vehicleSelect = document.getElementById('vehicle');
  const subtotalAmount = document.getElementById('subtotal-amount');
  const subtotalDetails = document.getElementById('subtotal-details');
  const durationInput = document.getElementById('duration');

  // Map vehicle type to vehicle options
  const vehicleOptions = {
    car: [
      { value: 'maruti-swift', label: 'Maruti Swift', price: 300 },
      { value: 'hyundai-i20', label: 'Hyundai i20', price: 350 },
      { value: 'honda-amaze', label: 'Honda Amaze', price: 400 }
    ],
    bike: [
      { value: 'bajaj-pulsar', label: 'Bajaj Pulsar', price: 150 },
      { value: 'royal-enfield', label: 'Royal Enfield', price: 200 },
      { value: 'ktm-duke', label: 'KTM Duke', price: 220 },
      { value: 'yamaha-r15', label: 'Yamaha R15', price: 180 },
      { value: 'hero-splendor', label: 'Hero Splendor', price: 120 }
    ],
    scooter: [
      { value: 'honda-activa', label: 'Honda Activa', price: 100 },
      { value: 'tvs-jupiter', label: 'TVS Jupiter', price: 120 },
      { value: 'ola-electric', label: 'Ola Electric', price: 150 }
    ]
  };

  function updateSubtotal() {
    const selectedType = typeSelect.value;
    const selectedVehicle = vehicleSelect.value;
    const duration = durationInput && durationInput.value ? parseInt(durationInput.value) : 1;
    let price = 0;
    let label = '';
    if (selectedType && selectedVehicle) {
      const found = (vehicleOptions[selectedType] || []).find(opt => opt.value === selectedVehicle);
      if (found) {
        price = found.price;
        label = found.label;
      }
    }
    const total = price * duration;
    subtotalAmount.textContent = '₹' + total + (duration > 1 ? ' (' + duration + ' hrs)' : '');
    subtotalDetails.textContent = price ? (label + ' selected. ₹' + price + ' per hour × ' + duration + ' hour' + (duration > 1 ? 's' : '') + '.') : '';
  }

  if (typeSelect && vehicleSelect && durationInput) {
    typeSelect.addEventListener('change', function() {
      const selectedType = typeSelect.value;
      while (vehicleSelect.options.length > 1) {
        vehicleSelect.remove(1);
      }
      if (vehicleOptions[selectedType]) {
        vehicleOptions[selectedType].forEach(opt => {
          const option = document.createElement('option');
          option.value = opt.value;
          option.textContent = opt.label;
          vehicleSelect.appendChild(option);
        });
      }
      updateSubtotal();
    });
    vehicleSelect.addEventListener('change', updateSubtotal);
    durationInput.addEventListener('input', updateSubtotal);
  }

  // Initial subtotal
  updateSubtotal();
});
