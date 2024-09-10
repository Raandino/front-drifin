export const useVehicleUrl = () => {
    // Function to generate a clean URL for a vehicle
    const generateVehicleUrl = (brand: string, model: string, year: string) => {
      // Clean brand, model, and year by trimming whitespace and converting to lowercase
      const cleanString = (str: string) => str.trim().replace(/\s+/g, '-').toLowerCase();
  
      const cleanBrand = cleanString(brand);
      const cleanModel = cleanString(model);
      const cleanYear = cleanString(year);
  
      // Join the brand, model, and year with dashes
      return `vehicles/${cleanBrand}-${cleanModel}-${cleanYear}`;
    };
  
    return {
      generateVehicleUrl
    };
  };